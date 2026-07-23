---
title: "Bad examples gallery"
description: "Before/after pairs showing common documentation anti-patterns. Each example is based on the Acme Export Platform concept."
---
# Bad examples gallery

Before/after pairs showing common documentation anti-patterns. Each example is based on the Acme Export Platform concept.

---

## 1. Engineer-speak vs goal-oriented user doc

### Bad — engineer-speak

```markdown
# Export

POST /v1/exports

Request body: {format: "csv" | "json", filters: object, delivery: {method: "download" | "webhook", url?: string}}

Response: 202 {job_id: uuid, status: "queued"}

The export job is processed asynchronously. Poll GET /v1/exports/{id} until status = "completed".
```

**What's wrong:** It documents the API endpoint, not what the user wants to accomplish. Buried verbs ("asynchronously"), no context, no outcome.

### Good — goal-oriented

```markdown
# Export your data

Generate a CSV or JSON export of your account data for reporting, auditing, or analysis.

```bash
curl -X POST https://api.acme.io/v1/exports \
  -H "Authorization: Bearer $API_KEY" \
  -d '{"format": "csv", "filters": {"date_range": {"from": "2024-01-01", "to": "2024-12-31"}}}'
```

Acme processes your request in the background and notifies you when the file is ready. Most exports complete within 2 minutes.

**Note:** Large exports (over 1M rows) may take longer. You can close the browser and come back — the download link stays valid for 24 hours.
```

**What changed:** Goal-first headline, concrete example, user-oriented guarantees, appropriate tone.

---

## 2. Sanitized vs candid internal doc

### Bad — sanitised

```markdown
# Export queue architecture

The export queue processes export jobs in the background. Jobs are added to a Redis queue and processed by Sidekiq workers. Completed files are stored in S3.

Components: API Server, Redis, Workers, S3
```

**What's wrong:** Tells you the architecture, but not the sharp edges. An engineer inheriting this learns nothing about what breaks.

### Good — candid

```markdown
# Export queue architecture

## Why a queue

ADR-001 chose a pull-based job queue because exports for >500k rows exceed 30s. Synchronous HTTP would require chunking we don't have.

**Known failure mode:** if a worker is OOM-killed mid-query, the PG connection pool holds the abandoned connection until TCP timeout. This caused an incident in 2024-11. Fix is in review.

## What we'd do differently

- The Redis + PG split (fast enqueue + durable record) was necessary after losing jobs on Redis restart. If we rebuild, we'd use PG-ONLY with LISTEN/NOTIFY.
- Worker concurrency is fixed at 4. Per-org rate limiting doesn't exist yet (issue #892).

## Open questions

1. File retention: 30 days. Legal hold flag not built.
2. Parquet format: 3 enterprise customers asked. Pluggable writer exists; schema validation isn't.
```

**What changed:** Failure modes documented, trade-offs explained, open questions surfaced. An inheriting engineer can make informed decisions.

---

## 3. Duplicate glossary vs single source of truth

### Bad — two glossaries

**In `/docs/user/getting-started/`:**

```markdown
**Export:** A file containing your account data in CSV or JSON format.
```

**In `/docs/internal/operations/`:**

```markdown
**Export:** A background job that queries the warehouse and produces a file in the object store.
```

**What's wrong:** Two definitions of the same term. They will drift. Which one is correct when someone updates one but not the other?

### Good — canonical glossary with context

**In `/docs/shared/glossary.md`:**

```markdown
## Export

*Canonical:* A job that extracts data from the warehouse and produces a downloadable file.

*User context:* A file containing your account data that you can download from Settings → Exports.

*Internal context:* A background Sidekiq job that queries the warehouse read replica, writes to S3, and triggers a webhook on completion.
```

**What changed:** Single canonical definition, with audience-specific expansions. One file to maintain. The primer rule "one canonical source per fact" enforced.

---

## 4. Component-organised vs symptom-organised runbook

### Bad — organised by component

```
docs/internal/operations/runbooks/
├── api-server-down.md
├── redis-cache-miss-spike.md
├── postgres-connection-pool-exhausted.md
└── worker-crash-loop.md
```

**What's wrong:** An on-call engineer at 2am doesn't know whether the symptom is "api server" or "worker". They know what they SEE.

### Good — organised by symptom

```
docs/internal/operations/runbooks/
├── high-error-rate-on-exports.md
│   └── (linked from: api-server-down, worker-crash, webhook-timeout)
├── export-delayed-beyond-sla.md
│   └── (linked from: queue-backlog, worker-slow, warehouse-replica-lag)
├── file-not-available-for-download.md
│   └── (linked from: s3-bucket-permissions, job-stuck-in-processing)
└── webhook-not-received.md
    └── (linked from: webhook-endpoint-down, ssl-cert-expired)
```

**What changed:** Organise by the symptom the responder sees. Each symptom page links to the component-specific diagnostics. The primer rule "runbooks by symptom, not by component folder" enforced.

---

## 5. Raw OpenAPI vs curated API reference

### Bad — raw OpenAPI dump

A single page at `docs/user/api-reference/` that renders the full OpenAPI spec with every endpoint, parameter, error code, and schema — no hierarchy, no narrative, no examples beyond the spec file.

**What's wrong:** The user is dumped into the machinery. They can't tell which endpoints matter, what order to call them in, or what constitutes a valid workflow.

### Good — curated API reference

```
docs/user/api-reference/
├── overview.md              ← auth, base URL, rate limits, common headers
├── exports.md               ← Create, check, cancel — with curl examples
├── webhooks.md              ← Payload format, retry, security
└── reference/               ← Generated or semi-generated from OpenAPI
    ├── create-export.md
    ├── get-export-status.md
    └── cancel-export.md
```

**What changed:** The overview provides the mental model and auth setup. Each operation gets its own page with a goal-oriented narrative and exact curl examples. The generated reference is secondary — it exists for detail, not for first learning.
