---
title: "Example: Acme Export Platform"
description: "Fictional product used to show the kit filled in — not a real system."
---

# Example: Acme Export Platform

Fictional product used to show the kit filled in — not a real system.

**Product one-liner:** Self-service data export so enterprise customers can download account data without filing engineering tickets.

## What's included

| Path | Phase | Shows |
|------|-------|--------|
| [internal/charter/vision.md](/examples/acme-export-platform/internal/charter/vision/) | 0 | Vision + KPIs |
| [internal/requirements/user-stories/export-csv.md](/examples/acme-export-platform/internal/requirements/user-stories/export-csv/) | 1 | Testable user story |
| [internal/requirements/non-functional.md](/examples/acme-export-platform/internal/requirements/non-functional/) | 1 | Numeric NFRs + bad→good |
| [internal/requirements/personas/persona-enterprise-admin.md](/examples/acme-export-platform/internal/requirements/personas/persona-enterprise-admin/) | 1 | Persona |
| [internal/architecture/context-diagram.md](/examples/acme-export-platform/internal/architecture/context-diagram/) | 2 | C4-style context (Mermaid) |
| [internal/decisions/adr-001-queue-for-exports.md](/examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports/) | 2 | ADR with alternatives |
| [internal/system-design/services/export-service.md](/examples/acme-export-platform/internal/system-design/services/export-service/) | 3 | Module spec |
| [internal/system-design/api-specs/export-api.yaml](/examples/acme-export-platform/internal/system-design/api-specs/export-api/) | 3 | Canonical OpenAPI sample |
| [internal/operations/runbooks/export-queue-backlog.md](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/) | 6 | Symptom-oriented runbook |
| [user/getting-started/quickstart.md](/examples/acme-export-platform/user/getting-started/quickstart/) | 7 | User getting started |
| [user/api-reference/overview.md](/examples/acme-export-platform/user/api-reference/overview/) | 7 | Curated API intro (derived from OpenAPI) |
| [user/changelog/2024-03-15-export-improvements.md](/examples/acme-export-platform/user/changelog/2024-03-15-export-improvements/) | 8 | User-facing release changelog |
| [internal/changelog-2026-q1.md](/examples/acme-export-platform/internal/changelog-2026-q1/) | 8 | Internal quarterly changelog |
| [internal/retrospectives/2026-02-11-worker-oom-crash-loop.md](/examples/acme-export-platform/internal/retrospectives/2026-02-11-worker-oom-crash-loop/) | 8 | Incident retrospective |
| [internal/charter/retirement-v1-export-legacy.md](/examples/acme-export-platform/internal/charter/retirement-v1-export-legacy/) | 9 | Retirement plan + knowledge transfer |
| [shared/glossary.md](/examples/acme-export-platform/shared/glossary/) | Shared | Shared terms |

## How to read this

1. Note what is **internal** (honest, operational) vs **user** (goal-oriented, safe).
2. Compare structure to [`scaffold/docs/`](../../scaffold/docs/).
3. Use with [`FIRST_WEEK.md`](/FIRST_WEEK/) — copy patterns, not the fictional product details.

This example covers Phases 0–9. It prioritises phases teams get stuck on (1, 3) plus the two-audience and ops patterns, then models Phase 8 (maintenance) and Phase 9 (retirement) with realistic entries.
