# ADR-001: Use a queue for export job processing

## Status

Accepted

## Date

2026-03-12

## Context

Export jobs can take seconds to minutes and must not block the request path. Spikes occur at end-of-month reporting. We need retries and visibility for stuck jobs.

## Decision

Accept export requests synchronously (create job + `202 Accepted`), process asynchronously via a durable work queue, and expose job status via API and email on completion.

## Alternatives considered

| Option | Pros | Cons | Why not |
|--------|------|------|---------|
| Synchronous export in API process | Simple | Timeouts; no isolation; poor spike behavior | Fails NFR on duration and reliability |
| **Queue + workers (chosen)** | Isolation, retries, scale workers | More moving parts | — |
| Step Functions / cloud workflow only | Managed orchestration | Portability; cost at our volume | Premature lock-in for v1 |

## Consequences

### Positive

- API latency decoupled from export duration
- Retry/poison-queue patterns available

### Negative / trade-offs

- Need backlog runbooks and worker autoscaling
- Users must poll or wait for email (documented in user docs)

### Follow-ups

- Runbook: `export-queue-backlog.md`
- SLO on queue age
