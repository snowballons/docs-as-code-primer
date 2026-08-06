---
title: "Retirement: Legacy export endpoint /v1/export-legacy"
description: "Retirement plan, knowledge transfer, and archival policy for the synchronous /v1/export-legacy endpoint — superseded by /v2/exports."
---

# Retirement: Legacy export endpoint `/v1/export-legacy`

| | |
|--|--|
| **System / feature** | Synchronous CSV export endpoint `POST /v1/export-legacy` |
| **Replacement** | Async export API `POST /v2/exports` + webhook delivery |
| **Deprecated** | 2026-Q1 (see [internal changelog](/examples/acme-export-platform/internal/changelog-2026-q1/)) |
| **End-of-life date** | 2026-09-30 |
| **Owner** | @tom-eng |
| **Status** | In deprecation window — still serving traffic |

---

## Why we are retiring this

`/v1/export-legacy` was a synchronous endpoint that held the HTTP connection open while the export ran. It timed out for exports over 30 s (roughly 500k rows) and could not support scheduled or webhook-delivered exports. The v2 async API supersedes it entirely. All new export integrations since v1.2.0 use `/v2/exports`.

See [ADR-001](/examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports/) for the original design rationale and the queue-based architecture that `/v2/exports` is built on.

---

## Retirement timeline

| Date | Event |
|------|-------|
| 2026-Q1 | Deprecated in internal changelog; deprecation notice published in user changelog |
| 2026-04-01 | Migration guide published at `docs/user/migrations/v1-to-v2-exports.md` |
| 2026-06-30 | Warning header `Deprecation: true` added to all `/v1/export-legacy` responses |
| 2026-08-01 | Final reminder to remaining callers via email (from usage analytics) |
| 2026-09-30 | Endpoint removed; returns `410 Gone` with migration link |
| 2026-10-31 | `ExportWorkerV1` class removed from codebase |
| 2027-01-01 | Docs archived under `docs/archive/v1-export-legacy/` |

---

## User migration guide

User-facing migration instructions live at:

> `docs/user/migrations/v1-to-v2-exports.md` ← to be created by 2026-04-01

Key changes for integrators:

| Old (`/v1/export-legacy`) | New (`/v2/exports`) |
|--------------------------|---------------------|
| Synchronous — response body is the file | Asynchronous — response is a job ID; poll or use webhooks |
| 30 s timeout for all exports | No timeout; all export sizes supported |
| No scheduling | Cron-based scheduling available |
| CSV only | CSV, JSON, Parquet |
| No notification on completion | Webhook delivery or email notification |

---

## Knowledge transfer

### What is non-obvious about the legacy endpoint

- The endpoint holds a Postgres read-replica connection open for the full duration of the export. Under PgBouncer, this leaks a connection slot even after the client disconnects. This was the primary motivation for the async rewrite.
- Rate limiting for `/v1/export-legacy` is handled by a separate middleware (`RateLimiterV1`) that is not shared with the v2 path. It must be removed independently.
- Three enterprise customers (`acme-enterprise`, `globex-corp`, `initech`) have server-to-server integrations against the v1 endpoint. They have been individually notified but historically lag on API migrations.

### Files to remove at end-of-life

| File / symbol | Location | Notes |
|---------------|----------|-------|
| `ExportHandlerV1` | `internal/api/v1/export.go` | Entry point |
| `RateLimiterV1` | `internal/middleware/ratelimit_v1.go` | V1-only rate limiter |
| `ExportWorkerV1` | `internal/worker/v1/worker.go` | Superseded by V2 |
| Route registration | `internal/router/routes.go` line ~42 | `POST /v1/export-legacy` |
| Integration tests | `tests/integration/v1_export_test.go` | Delete entire file |

### Monitoring to decommission

- Grafana panel: "V1 Legacy Export Request Rate" (dashboard: Export Platform → Legacy)
- PagerDuty rule: `v1_export_error_rate > 5%` (rule ID `pd-exports-007`) — disable after 2026-09-30

---

## Archival policy

After 2027-01-01, archive the following under `docs/archive/v1-export-legacy/`:

| What | Why |
|------|-----|
| This retirement document | Audit trail |
| `docs/internal/system-design/services/v1-export-service.md` (if it exists at that point) | Design reference for post-mortems |
| OpenAPI v1 spec (if extracted) | Archived clients may need the contract |
| This retrospective | — |

Do **not** archive: setup guides, the V1 runbook (already updated to cover V2), or PR template references to V1.

Add an `ARCHIVE.md` at `docs/archive/v1-export-legacy/ARCHIVE.md`:

```text
Archived: 2027-01-01
Reason: /v1/export-legacy endpoint removed 2026-09-30. Superseded by /v2/exports.
Owner at retirement: @tom-eng
```

---

## Definition of Done (retirement)

- [ ] User migration guide published and tested on a clean integration
- [ ] All known enterprise integrators notified individually
- [ ] Deprecation warning header active on endpoint responses
- [ ] Removal PR merged and verified returning `410 Gone`
- [ ] Monitoring rules disabled / archived
- [ ] Docs archived under `docs/archive/v1-export-legacy/`
- [ ] Internal changelog updated with removal entry
