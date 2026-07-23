---
title: "Module / service specification: export-service"
---
# Module / service specification: export-service

## Responsibility

Owns:

- Accepting export job requests (API)
- Enqueueing work and tracking job state
- Coordinating workers that read the warehouse and write export artifacts

Does **not** own:

- Billing entitlement rules (calls Billing)
- Long-term analytics warehouse schemas (read-only consumer)
- Customer-facing help center content

## Interface

- REST: `POST /v1/exports`, `GET /v1/exports/{job_id}` (see OpenAPI)
- Internal: queue messages `export.job.requested`

## Dependencies

| Dependency | Type | Failure mode if unavailable |
|------------|------|-----------------------------|
| Billing | Sync HTTP | Fail closed with 403/503 per playbook |
| Warehouse | Sync query from workers | Retry with backoff; surface `failed` |
| Object storage | Artifact put/get | Retry; alert on persistent failure |
| Email provider | Async notify | Job still completes; notify eventually |

## State

Jobs stored in `export_jobs` (state machine: `queued` → `running` → `completed` | `failed`). Strong consistency on job row updates.

## Concurrency model

API is stateless/horizontally scaled. Workers compete on queue; per-job single active worker via queue semantics.

## Error model

| Error class | How surfaced | Retryable? |
|-------------|--------------|------------|
| Validation | 422 | No |
| Entitlement | 403 | No |
| Downstream timeout | job `failed` + retry policy | Yes (worker) |
| Rate limit | 429 | Yes (client) |

## Observability

- Metrics: queue depth, age, job duration, accept latency, failure reason
- Logs: `job_id`, tenant_id (no raw export payloads)
- Traces: accept → enqueue → worker processing

## Related docs

- ADR-001 queue decision
- Runbook: `export-queue-backlog.md`
- OpenAPI: `../api-specs/export-api.yaml`
- User API overview: `../../../user/api-reference/overview.md`
