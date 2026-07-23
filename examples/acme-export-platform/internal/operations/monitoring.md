---
title: "Monitoring and dashboards — Export Platform"
description: "| | | |--|--| | **Owner** | Platform SRE | | **Dashboard** | `https://acme.grafana.internal/d/export-platform` (placeholder) | | **Alert channel** | #exports-alerts (Slack); PagerDuty for SEV-1/SEV-2 "
---
# Monitoring and dashboards — Export Platform

| | |
|--|--|
| **Owner** | Platform SRE |
| **Dashboard** | `https://acme.grafana.internal/d/export-platform` (placeholder) |
| **Alert channel** | #exports-alerts (Slack); PagerDuty for SEV-1/SEV-2 |
| **Last reviewed** | 2026-03-10 |

## Dashboard layout

The Grafana dashboard has four rows:

### Row 1: Throughput & health

| Panel | Metric | Source | Threshold |
|-------|--------|--------|-----------|
| Request rate (rpm) | `sum(rate(export_api_requests_total[5m]))` | ALB logs | — |
| Error rate (5xx %) | `sum(rate(export_api_5xx[5m])) / sum(rate(export_api_requests_total[5m]))` | ALB logs | > 1% |
| Export success rate | `sum(rate(export_job_completed[1h])) / sum(rate(export_job_failed[1h]) + rate(export_job_completed[1h]))` | Job metrics | < 99.5% |
| Queue depth | `export_queue_depth` | Worker metric | — |

### Row 2: Performance

| Panel | Metric | Source |
|-------|--------|--------|
| API latency (p95/p99) | `histogram_quantile(0.95, sum(rate(export_api_duration_ms[5m])))` | ALB logs |
| Job duration (p50/p95) | `histogram_quantile(0.95, sum(rate(export_job_duration_ms[1h])))` | Worker metric |
| Queue oldest age | `export_queue_oldest_age_seconds` | Worker metric |
| Worker saturation | `avg(export_worker_busy) / avg(export_worker_count)` | Worker metric |

### Row 3: Resource usage

| Panel | Metric | Source |
|-------|--------|--------|
| Worker CPU | `avg(container_cpu_usage_seconds_total)` | ECS / Container Insights |
| Worker memory | `avg(container_memory_working_set_bytes)` | ECS / Container Insights |
| DB connection pool | `avg(rds_connections)` | RDS enhanced monitoring |
| S3 upload rate | `sum(rate(s3_put_requests_total[5m]))` | S3 metrics |

### Row 4: Business

| Panel | Metric | Source |
|-------|--------|--------|
| Exports by tenant (top 10) | `count by(org_id)` | Job metrics |
| Exports by format | `count by(format)` | Job metrics |
| Exports by status | `count by(status)` | Job metrics |

## Alert rules

| Alert | Condition | Severity | Wait | Runbook |
|-------|-----------|----------|------|---------|
| ExportAPIErrorRate | error rate > 1% for 5m | SEV-2 | 5m | — |
| ExportQueueStuck | queue oldest age > 10m | SEV-2 | 5m | export-queue-backlog |
| ExportWorkerDown | worker count < desired for 2m | SEV-2 | 2m | export-queue-backlog |
| ExportSuccessRateDrop | job success < 95% over 1h | SEV-2 | 15m | export-queue-backlog |
| ExportJobDurationHigh | p95 job duration > 180s for 1h | SEV-3 | 30m | — |
| ExportDBConnections | DB connection count > 80% of max | SEV-3 | 10m | — |

### Notification routing

| Severity | Notification | Target |
|----------|-------------|--------|
| SEV-1 | Page | PagerDuty (export-on-call) |
| SEV-2 | Alert + Slack | #exports-alerts + PagerDuty |
| SEV-3 | Slack only | #exports-alerts |
| SEV-4 | Dashboard annotation | — |

## Logging

All services emit structured JSON logs:

| Field | Always present | Example |
|-------|---------------|---------|
| `timestamp` | Yes | `2026-03-15T14:30:00Z` |
| `service` | Yes | `export-worker` |
| `level` | Yes | `info`, `warn`, `error` |
| `job_id` | If context exists | `job_exp_001` |
| `org_id` | If context exists | `tenant_abc` |
| `duration_ms` | On completion | `12500` |
| `error` | On failure | `PG::QueryTimeout` |

Log aggregation: Loki. Search patterns:

- `{service="export-worker"} |= "error"`
- `{service="export-api"} | json | error_code="rate_limited"`

## Related

- [SLOs and error budget](/examples/acme-export-platform/internal/operations/slos/)
- [Runbook: Export queue backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/)
- [Observability section in export queue architecture](/examples/acme-export-platform/internal/system-design/export-queue-architecture/#observability)
