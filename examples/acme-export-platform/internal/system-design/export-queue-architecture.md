---
title: "Export queue architecture"
description: "> **Internal doc.** This describes the export queue system as it exists — including the decisions that felt right at the time, the sharp edges we know about, and the things we'd do differently."
---

# Export queue architecture

> **Internal doc.** This describes the export queue system as it exists — including the decisions that felt right at the time, the sharp edges we know about, and the things we'd do differently.

## Why a queue

ADR-001 chose a pull-based job queue over a synchronous HTTP export for three reasons:

1. **Export duration.** CSV exports for >500k rows regularly exceed 30s — too long for a synchronous web request without chunking.
2. **Retry without data loss.** A failed export can be retried from the queue without losing partial progress (jobs are idempotent).
3. **Backpressure.** The database can't handle 50 concurrent full-table scans. The queue limits concurrency to 4 workers.

**Trade-off we accepted:** users don't get their file in the HTTP response. They must poll or wait for a webhook. We decided this is acceptable for the admin dashboard use case (see persona: enterprise-admin).

## Architecture sketch

```text
┌─────────────┐     ┌────────────────┐     ┌──────────────┐
│  API Server  │────▶│  Job Queue     │────▶│  Workers (4) │
│  (Rails)     │     │  (PG + Redis)  │     │  (Sidekiq)   │
└─────────────┘     └────────────────┘     └──────┬───────┘
                                                   │
                                                   ▼
                                           ┌──────────────┐
                                           │  Object Store │
                                           │  (S3-compat)  │
                                           └──────────────┘
```

The queue is backed by Redis for fast enqueue/dequeue, with PostgreSQL as the durable job record (the "it definitely happened" store). We chose this split because early prototypes lost jobs on Redis restart before PG persistence was added.

## Job lifecycle

```text
enqueued ──▶ queued ──▶ processing ──▶ completed
                          │
                          ▼
                        failed ──▶ retry_queue (max 3)
                          │
                          ▼
                      dead (manual review)
```

- **enqueued:** request validated, row inserted into PG, Redis push fires
- **queued:** visible to workers, awaiting capacity
- **processing:** worker holds a lease (5min timeout)
- **completed:** file stored in S3, user notified via webhook
- **failed:** worker crashed or the query timed out; retry up to 3x with exponential backoff (30s, 2m, 10m)
- **dead:** exhausted retries; alerts to #exports-team

**Failure mode we don't handle well:** if a worker gets OOM-killed mid-query, the job is retried — but the database connection pool may still hold the abandoned connection until TCP timeout. This caused a connection pool exhaustion incident in 2024-11. The fix (connection pool check-in on SIGTERM) is in review.

## Schema (simplified)

```sql
CREATE TABLE export_jobs (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id        UUID NOT NULL REFERENCES orgs(id),
  requested_by  UUID NOT NULL REFERENCES users(id),
  query         JSONB NOT NULL,          -- filter/sort/columns
  format        TEXT NOT NULL DEFAULT 'csv',
  status        TEXT NOT NULL DEFAULT 'enqueued',
  retry_count   INTEGER NOT NULL DEFAULT 0,
  s3_key        TEXT,                     -- populated on completion
  error_message TEXT,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at    TIMESTAMPTZ NOT NULL DEFAULT now(),
  lease_expiry  TIMESTAMPTZ              -- set while processing
);
```

Migration strategy: see `database/migrations/2024-03-add-export-jobs.sql`.

## Open questions

1. **File retention.** We keep completed exports for 30 days then delete the S3 object. Do we need a legal hold flag?
2. **Rate limiting per org.** Currently unlimited. One org could saturate all 4 workers. We should cap at 2 concurrent per org (tracked in issue #892).
3. **Format expansion.** Parquet was requested by 3 enterprise customers. The worker abstraction supports it (output writer is pluggable) but the schema validation for Parquet-specific types isn't built.

## Observability

Key metrics (exported to Datadog):

| Metric | What it measures |
|--------|-----------------|
| `export.job.enqueued` | Rate of new jobs |
| `export.job.completed` | Rate of successful jobs |
| `export.job.failed` | Rate of failures (tagged by error class) |
| `export.job.duration_ms` | Histogram: p50/p95/p99 |
| `export.queue.depth` | Current queued count |
| `export.worker.busy` | Workers currently processing |

Logs: structured JSON with `job_id`, `org_id`, `status`. Search in Loki: `{app="export-worker"} | json`.

## Related

- [ADR-001: Why a queue](/examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports/) — the decision that created this design
- [Module spec: Export service](/examples/acme-export-platform/internal/system-design/services/export-service/) — interface and dependency contract
- [Runbook: Queue backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/) — what to do when workers stall
- [User feature: Scheduled exports](/examples/acme-export-platform/user/features/scheduled-exports/) — how users see this system
