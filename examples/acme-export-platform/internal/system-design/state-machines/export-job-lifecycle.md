---
title: "Export job state machine"
---
# Export job state machine

## States

```mermaid
stateDiagram-v2
    [*] --> Enqueued
    Enqueued --> Queued
    Queued --> Processing
    Processing --> Completed
    Processing --> Failed
    Failed --> Queued : retry (max 3)
    Failed --> Dead : exhausted
    Processing --> Cancelled
    Queued --> Cancelled
    Dead --> [*]
    Completed --> [*]
    Cancelled --> [*]

    state Processing {
        [*] --> Running
        Running --> Uploading
        Running --> Failed : query timeout
        Uploading --> Failed : upload error
        Uploading --> Notifying
        Notifying --> Completed
    end
```

## Transitions

| From | To | Trigger | Side effects |
|------|----|---------|-------------|
| Enqueued | Queued | Redis push confirmed | None |
| Queued | Processing | Worker acquires lease (5m) | Lease expiry set |
| Processing | Completed | File stored; notification sent | s3_key populated; webhook/email fired |
| Processing | Failed | Query timeout / upload error / worker crash | retry_count++ |
| Processing | Cancelled | User cancels via API | Lease released |
| Failed | Queued | Retry (backoff: 30s → 2m → 10m) | Lease cleared |
| Failed | Dead | retry_count >= 3 | Alert #exports-team |
| Queued | Cancelled | User cancels via API | Job removed from queue |

## Lease expiry recovery

If a worker crashes without updating the job status, the lease mechanism recovers:

```text
1. Worker acquires lease (UPDATE ... lease_expiry = now() + 5m)
2. Worker crashes
3. No other worker can acquire this job while lease is valid
4. After lease expiry, polling query picks it up:
   SELECT * FROM export_jobs
   WHERE status = 'processing' AND lease_expiry < now()
5. Status is reset to 'queued'; retry_count stays unchanged
6. Another worker processes it
```

## Error states

| State | Meaning | Recovery |
|-------|---------|----------|
| Failed (retriable) | Transient error (timeout, connection drop) | Automatic retry with backoff |
| Dead | All retries exhausted | Manual intervention; inspect error_message |
| Orphaned (processing w/ expired lease) | Worker died | Automatic recovery via lease sweep |
| Stuck (queued > 30min) | No available workers | Scale up workers; alert if persistent |

## Related

- [Sequence diagram: export processing](/examples/acme-export-platform/internal/system-design/sequence-diagrams/export-processing/)
- [Export queue architecture](/examples/acme-export-platform/internal/system-design/export-queue-architecture/)
- [Runbook: queue backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/)
