---
title: "Internal changelog: Acme Export Platform — 2026-Q1"
description: "Quarterly internal changelog for engineers and operators. Covers architecture changes, ops updates, deprecations, and dependency bumps — not user-facing release notes."
---

# Internal changelog: Acme Export Platform — 2026-Q1

> Internal audience: engineers and operators. For user-facing release notes see [`docs/user/changelog/`](/examples/acme-export-platform/user/changelog/2024-03-15-export-improvements/).

**Period:** 2026-01-01 – 2026-03-31  
**Published:** 2026-04-02  
**Owner:** Platform team

---

## Architecture

| Change | ADR | Impact |
|--------|-----|--------|
| Export queue migrated from Redis to RabbitMQ | [ADR-012: RabbitMQ for export queue](/examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports/) (supersedes ADR-001) | Consumer code unchanged; rebuild required — new `amqp` package dependency. Workers restart cleanly on queue reconnect. |
| Worker pool now scales 2–8 instances based on queue depth | — | Autoscaler config in `deploy-pipeline.md`; no code change required. Reduces idle cost ~30%. |

## Ops / infra

| Change | Runbook updated? | Impact |
|--------|-----------------|--------|
| Staging RDS upgraded PostgreSQL 15 → 16 | ✅ (deploy-pipeline.md) | No schema changes required. Test migration in staging completed 2026-02-14 with 0 errors. Prod upgrade scheduled 2026-Q2. |
| Production deploy switched from blue-green to canary (10 % → 50 % → 100 %) | ✅ (deploy-pipeline.md) | Rollback window shortened to 15 min per stage. Alert thresholds tightened accordingly. |
| Export artifact S3 bucket moved to `us-east-1` only | ✅ (export-queue-backlog.md) | Multi-region write removed; read replication retained. No user-visible change. |

## Deprecations (internal)

| Deprecated | Replacement | Target removal | Migration notes |
|------------|-------------|---------------|-----------------|
| `POST /v1/export-legacy` (synchronous endpoint) | `POST /v2/exports` (async + webhook) | 2026-Q3 | See user-facing deprecation notice in `user/changelog/`. Internal callers: update SDK by 2026-Q2. |
| `ExportWorkerV1` class | `ExportWorkerV2` (RabbitMQ-based) | 2026-Q2 | V1 still runs in parallel during queue migration window. Remove after ADR-012 cutover verified. |

## Dependency updates

| Change | Dependency | Old version | New version | Notes |
|--------|------------|-------------|-------------|-------|
| Upgraded | Go runtime | 1.21 | 1.22 | See [Go 1.22 release notes](https://go.dev/doc/go1.22). No breaking changes in our usage. |
| Added | `github.com/rabbitmq/amqp091-go` | — | v1.10.0 | Replaces `go-redis` for queue transport. |
| Removed | `go-redis/v9` | v9.4.0 | — | Removed after RabbitMQ cutover. Redis still used for rate-limit counters (separate package). |
| Upgraded | `golangci-lint` | v1.55 | v1.57 | New linter: `exhaustruct` enabled for config structs. Fix: zero-value fields now explicit. |

## Test / infra changes

| Change | Impact |
|--------|--------|
| Integration tests migrated from Dockertest to Testcontainers | Faster teardown; parallel test suites now supported. CI test time reduced from 4m 20s to 2m 55s. |
| Coverage gate changed from advisory to hard for export flow | CI fails if export flow branch coverage drops below 100%. See `docs/internal/testing/test-strategy.md`. |

## Doc updates completed this quarter

- [x] ADR-012 written and ADR-001 marked Superseded
- [x] `deploy-pipeline.md` updated for canary rollout steps
- [x] `export-queue-backlog.md` runbook updated with RabbitMQ diagnosis commands
- [x] User deprecation notice published for `/v1/export-legacy`
- [x] `slos.md` error-budget policy updated to reflect canary rollout window
