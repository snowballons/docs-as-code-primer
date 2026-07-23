---
title: "Export processing sequence"
description: "**Flow:** API request → queue → worker → storage → notification"
---

# Export processing sequence

**Flow:** API request → queue → worker → storage → notification

```mermaid
sequenceDiagram
    actor User as Enterprise Admin
    participant API as API Server
    participant Queue as Job Queue (Redis)
    participant DB as PostgreSQL
    participant Worker as Export Worker (x4)
    participant Store as Object Store
    participant Webhook as User Webhook

    User->>API: POST /v1/exports {format, filters, delivery}
    API->>DB: INSERT export_jobs (status=enqueued)
    API->>Queue: LPUSH export:queue (job_id)
    API-->>User: 202 Accepted {job_id, status}

    Note over Worker: Polls queue every 5s

    Worker->>Queue: BRPOP export:queue (timeout=5s)
    Queue-->>Worker: job_id
    Worker->>DB: UPDATE status=processing, lease_expiry=now()+5min
    Worker->>DB: SELECT rows with applied filters
    DB-->>Worker: Result set (streamed)

    alt Row count > 10M
        Worker->>DB: UPDATE status=failed, error_message="Row limit exceeded"
        Worker->>API: Alert (row limit hit)
    else Row count ≤ 10M
        Worker->>Store: Upload file (multipart if >100MB)
        Store-->>Worker: s3_key
        Worker->>DB: UPDATE status=completed, s3_key, updated_at
    end

    alt Delivery = webhook
        Worker->>Webhook: POST {job_id, status, download_url}
        Webhook-->>Worker: 200 OK
    else Delivery = email
        Worker->>API: Trigger notification email
    end

    User->>API: GET /v1/exports/{job_id}
    API-->>User: {status, download_url, expires_at}
    User->>Store: GET /download/{s3_key}
    Store-->>User: File stream
```

## Error paths

```mermaid
sequenceDiagram
    participant Worker as Export Worker
    participant DB as PostgreSQL
    participant Queue as Job Queue

    Note over Worker: Processing starts

    Worker->>DB: Query data
    alt Query timeout (> 120s)
        DB-->>Worker: Query cancelled
        Worker->>DB: UPDATE status=failed, retry_count++
        alt retry_count < 3
            Worker->>Queue: LPUSH export:retry (job_id, backoff=30s)
        else retry_count >= 3
            Worker->>DB: UPDATE status=dead
            Worker->>API: Alert #exports-team
        end
    end

    Note over Worker: Worker crashes mid-upload
    Note over Worker: Next worker picks up job after lease expiry
    Worker->>DB: SELECT with lease_expiry < now()
    Worker->>DB: UPDATE lease_expiry=now()+5min
    Note over Worker: Retries upload
```

## Related

- [State machine: export job lifecycle](/examples/acme-export-platform/internal/system-design/state-machines/export-job-lifecycle/)
- [Export queue architecture](/examples/acme-export-platform/internal/system-design/export-queue-architecture/)
- [Runbook: queue backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/)
