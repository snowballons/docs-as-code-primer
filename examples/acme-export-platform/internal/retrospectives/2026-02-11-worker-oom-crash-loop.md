---
title: "Incident retrospective: Export queue worker OOM crash loop (2026-02-11)"
description: "Post-incident review for a SEV-2 export processing outage caused by unbounded memory growth in the export worker pool."
---

# Incident retrospective: Export queue worker OOM crash loop (2026-02-11)

> A retrospective is not a blame instrument. It is a shared record — what went wrong, what went right, and what we will not repeat.

## Incident summary

| | |
|--|--|
| **Date** | 2026-02-11 |
| **Duration** | 1 h 42 min (14:07 – 15:49 UTC) |
| **Severity** | SEV-2 |
| **Services affected** | `export-worker` (all 4 instances), `export-api` (degraded: job submission accepted but no processing) |
| **Detected by** | Alert: `export_queue_depth > 500 for 5 min` (PagerDuty, 14:09 UTC) |
| **Responders** | @priya-sre (IC), @tom-eng (export service owner), @fatima-infra (infra support) |

## Timeline

| Time (UTC) | Event |
|------------|-------|
| 14:07 | All 4 export workers OOM-killed by the Linux kernel. Queue depth begins climbing. |
| 14:09 | PagerDuty alert fires: `export_queue_depth > 500`. @priya-sre acknowledges. |
| 14:13 | @priya-sre opens [runbook: export queue backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/). Follows diagnosis steps. |
| 14:18 | Workers restart automatically (Kubernetes `restartPolicy: Always`). Queue begins draining. |
| 14:23 | Workers OOM-kill again. Restart loop confirmed. @tom-eng paged. |
| 14:31 | @tom-eng identifies root cause: a batch of 12 exports for tenant `acme-enterprise` each request 2M rows. Per-worker memory ceiling is 512 MB; actual usage ~650 MB per job. |
| 14:45 | Hotfix deployed: `WORKER_MAX_ROWS=1_000_000` env var added; jobs over limit split into two. |
| 14:52 | Workers stabilise. Queue begins draining at normal rate. |
| 15:49 | Queue depth returns to zero. All pending exports completed. Incident closed. |

## Impact

- **Users affected:** ~140 export jobs queued; none failed permanently (all completed post-recovery). 14 enterprise tenants experienced delays of 45 min – 1 h 30 min.
- **Data loss:** None.
- **SLO impact:** Export p95 processing time SLO (30 s) breached for 1 h 42 min. Error-budget burn: ~6 % of monthly budget consumed.

## Root cause

The `export-worker` memory ceiling (512 MB) was sized for the original workload maximum of 1M rows. After the v1.2.0 release, scheduled exports allowed users to configure recurring full-account exports. Tenant `acme-enterprise` had configured 12 daily full-account exports that all triggered simultaneously at 14:00 UTC. Each job required ~650 MB, exceeding the worker ceiling and triggering OOM kills.

The `WORKER_COUNT` documentation warned about timeout risk for large exports but did not document the memory ceiling or the per-job row limit — so the v1.2.0 scheduled export feature shipped without a guard.

## What went well

1. The queue-backlog runbook diagnosed the OOM pattern correctly within 6 minutes of paging.
2. Kubernetes restart policy prevented a complete service outage — jobs queued rather than failing.
3. @tom-eng identified the root cause quickly by correlating the OOM timestamps with the tenant's scheduled export config.
4. The hotfix was low-risk (env var + split logic already existed in a feature branch) and deployed without a full release process.

## What went wrong

1. The v1.2.0 scheduled exports feature had no guard on per-job row count. The memory implication was a known risk (it appears in the architecture doc) but was not enforced in code.
2. The runbook did not include a step for "workers OOM-killing repeatedly" — the responder had to improvise after step 3.
3. The memory ceiling was undocumented outside of a code comment in `worker_config.go`. The getting-started and feature docs for scheduled exports make no mention of it.
4. All 12 tenant jobs were queued for the same minute (14:00 UTC default schedule). No jitter was applied to scheduled export triggers.

## Action items

| # | Action | Owner | Tracked in | Target date |
|---|--------|-------|------------|-------------|
| 1 | Add `EXPORT_MAX_ROWS_PER_JOB` guard in worker; reject or split at submission time | @tom-eng | EXPORT-891 | 2026-02-18 |
| 2 | Add jitter (±5 min) to all scheduled export triggers to prevent thundering-herd | @tom-eng | EXPORT-892 | 2026-02-18 |
| 3 | Update runbook with "OOM crash loop" cause and remediation steps | @priya-sre | EXPORT-893 | 2026-02-14 |
| 4 | Document `WORKER_MAX_ROWS` and memory ceiling in `docs/internal/development/` and user scheduled-exports feature doc | @tom-eng | EXPORT-894 | 2026-02-21 |
| 5 | Add memory usage metric to worker dashboard; alert at 80 % ceiling | @fatima-infra | EXPORT-895 | 2026-02-25 |
| 6 | Write ADR for row-limit enforcement strategy (env var vs per-tenant config vs quota) | @tom-eng | EXPORT-896 | 2026-03-07 |

## Runbook updates

- [ ] **#3 above:** Add "OOM crash loop" section to [export-queue-backlog runbook](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/) with exact symptom, diagnosis command (`kubectl top pods -n exports`), and remediation (reduce `WORKER_MAX_ROWS`, restart workers, drain queue).
- [ ] Run runbook game day after update — target 2026-02-28 in staging.

## Related

- Alert: `export_queue_depth > 500` (PagerDuty rule ID `pd-exports-003`)
- Runbook used: [export-queue-backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/)
- Monitoring dashboard: Grafana → Export Platform → Worker Health
- Follow-up ADR: EXPORT-896 (pending)
- Internal changelog entry: [2026-Q1 changelog](/examples/acme-export-platform/internal/changelog-2026-q1/) — worker autoscaler update
