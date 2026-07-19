# Example: Acme Export Platform

Fictional product used to show the kit filled in — not a real system.

**Product one-liner:** Self-service data export so enterprise customers can download account data without filing engineering tickets.

## What's included

| Path | Phase | Shows |
|------|-------|--------|
| [internal/charter/vision.md](internal/charter/vision.md) | 0 | Vision + KPIs |
| [internal/requirements/user-stories/export-csv.md](internal/requirements/user-stories/export-csv.md) | 1 | Testable user story |
| [internal/requirements/non-functional.md](internal/requirements/non-functional.md) | 1 | Numeric NFRs + bad→good |
| [internal/requirements/personas/persona-enterprise-admin.md](internal/requirements/personas/persona-enterprise-admin.md) | 1 | Persona |
| [internal/architecture/context-diagram.md](internal/architecture/context-diagram.md) | 2 | C4-style context (Mermaid) |
| [internal/decisions/adr-001-queue-for-exports.md](internal/decisions/adr-001-queue-for-exports.md) | 2 | ADR with alternatives |
| [internal/system-design/services/export-service.md](internal/system-design/services/export-service.md) | 3 | Module spec |
| [internal/system-design/api-specs/export-api.yaml](internal/system-design/api-specs/export-api.yaml) | 3 | Canonical OpenAPI sample |
| [internal/operations/runbooks/export-queue-backlog.md](internal/operations/runbooks/export-queue-backlog.md) | 6 | Symptom-oriented runbook |
| [user/getting-started/quickstart.md](user/getting-started/quickstart.md) | 7 | User getting started |
| [user/api-reference/overview.md](user/api-reference/overview.md) | 7 | Curated API intro (derived from OpenAPI) |
| [shared/glossary.md](shared/glossary.md) | Shared | Shared terms |

## How to read this

1. Note what is **internal** (honest, operational) vs **user** (goal-oriented, safe).
2. Compare structure to [`scaffold/docs/`](../../scaffold/docs/).
3. Use with [`FIRST_WEEK.md`](../../FIRST_WEEK.md) — copy patterns, not the fictional product details.

This example is still incomplete versus a full Phase 0–9 archive. It prioritizes phases teams get stuck on (1, 3) plus the two-audience and ops patterns.
