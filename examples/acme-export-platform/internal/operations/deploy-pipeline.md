---
title: "Deploy pipeline — Export Platform"
description: "| | | |--|--| | **Owner** | Platform SRE | | **Cadence** | Continuous deploy (merge to main → staging → prod) | | **Last updated** | 2026-03-10 |"
---

# Deploy pipeline — Export Platform

| | |
|--|--|
| **Owner** | Platform SRE |
| **Cadence** | Continuous deploy (merge to main → staging → prod) |
| **Last updated** | 2026-03-10 |

## Pipeline stages

```text
PR ──merge──→ main ──build──→ staging ──gate──→ production
                    │                        │
               image + migration        slow-roll (10% → 50% → 100%)
```

### 1. Build (GitHub Actions)

Triggered on merge to `main` touching `services/export-*` or `infra/`:

| Step | What it does |
|------|-------------|
| Test | Unit + integration + export smoke (samples a real export end-to-end in staging) |
| Build | Docker image tagged `git-sha`, pushed to ECR |
| Migrate | `bin/rails db:migrate` against staging with expand-contract pattern (see DB schema doc) |
| Deploy staging | Rolling update of staging ECS service |

### 2. Staging smoke

Post-deploy checks run for 5 minutes:

- Export API health endpoint returns 200
- Can enqueue and complete a small CSV export
- Queue depth stable (no runaway retries)
- Alert: none firing for export-critical SLOs

### 3. Production gate

A human (or automated changelog check) approves the production deploy:

| Check | Who / what |
|-------|-----------|
| Changelog entry exists for user-visible changes | PR template enforces |
| Migration dry-run against prod clone | CI step (commented until DB migration exists) |
| Canary smoke passes | 5-min monitoring window on canary |

### 4. Production deploy

Slow rollout via ECS:

| Stage | % traffic | Hold | Rollback if |
|-------|-----------|------|-------------|
| Canary | 10% | 5 min | Error rate > 0.5% or p95 latency > 2x baseline |
| Half | 50% | 10 min | Any SEV-2 alert firing |
| Full | 100% | — | — |

Rollback: `git revert` + regular pipeline. ECS retains the previous task definition for immediate manual rollback via `aws ecs update-service`.

## Database migrations

We follow expand-contract for zero-downtime deploys:

| Phase | Example | Deploy stage |
|-------|---------|-------------|
| Expand | Add column `export_jobs.schedule_id` as nullable | Deploy 1 (code reads both old and new) |
| Migrate | Backfill `schedule_id` for existing rows | Deploy 1 + background job |
| Contract | Remove old column, make `schedule_id` NOT NULL | Deploy 2 (code no longer references old) |

## Related

- [DB schema + migration strategy](/examples/acme-export-platform/internal/system-design/database/schema/)
- [Runbook: Export queue backlog](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/)
- [Recipe: Dual publish pattern](/recipes/dual-publish/)
