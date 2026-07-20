# SLOs and error budget

| | |
|--|--|
| **Domain** | Export Platform — job orchestration and delivery |
| **Owner** | Platform SRE team |
| **Review cadence** | Monthly (burn check); Quarterly (SLO adjustment) |

## Service Level Indicators (SLIs)

| SLI | Definition | Measurement | Source |
|-----|------------|-------------|--------|
| API availability | HTTP 2xx/5xx ratio (excluding 429) | % of requests over 1 min window | ALB logs |
| Export success rate | Jobs reaching `completed` vs `failed`/`dead` | % over 1 h window | Export job metrics |
| API latency (p95) | Time from request receipt to 2xx/4xx response | ms over 5 min window | ALB logs |
| Job latency (p95) | Time from `enqueued` to `completed` (excluding scheduled) | seconds over 1 h window | Export job metrics |
| Freshness (scheduled) | Time between scheduled run time and actual start | seconds per job | Schedule worker |

## Service Level Objectives (SLOs)

| SLI | Target (monthly) | Error budget / mo | Severity if breached |
|-----|-----------------|-------------------|----------------------|
| API availability | ≥ 99.9% | 43 min of 5xx | SEV-2 |
| Export success rate | ≥ 99.5% | 0.5% of total jobs | SEV-2 |
| API latency (p95) | ≤ 500 ms | N/A (not a burn-rate SLO) | SEV-3 |
| Job latency (p95) | ≤ 120 s for CSV < 1M rows | N/A | SEV-3 |
| Freshness (scheduled) | ≤ 60 s drift | N/A | SEV-3 |

## Error budget policy

| Burn rate | Time to exhaust | Action |
|-----------|-----------------|--------|
| < 100% / month | > 30 days | Normal operation |
| 100–200% / month | 15–30 days | Freeze non-critical features; prioritize reliability work |
| 200–500% / month | 6–15 days | Pause all feature work; full reliability sprint |
| > 500% / month | < 6 days | Emergency incident; page SRE lead |

**Best-effort only** (no SLO): Export job latency for Parquet format > 1M rows; email notification delivery.

## Related

- [Runbook: export queue backlog](runbooks/export-queue-backlog.md)
- [Dashboard: Export Platform](https://acme.grafana.internal/d/export-platform)
- [Phase 6 primer chapter](../../../../primer/10-phase-6-operations.md)
