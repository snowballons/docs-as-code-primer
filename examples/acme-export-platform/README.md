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
| [internal/system-design/api-specs/export-api.yaml](internal/system-design/api-specs/export-api.yaml) | 3 | Canonical OpenAPI sample |
| [internal/operations/runbooks/export-queue-backlog.md](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/) | 6 | Symptom-oriented runbook |
| [user/getting-started/quickstart.md](/examples/acme-export-platform/user/getting-started/quickstart/) | 7 | User getting started |
| [user/api-reference/overview.md](/examples/acme-export-platform/user/api-reference/overview/) | 7 | Curated API intro (derived from OpenAPI) |
| [shared/glossary.md](/examples/acme-export-platform/shared/glossary/) | Shared | Shared terms |

## How to read this

1. Note what is **internal** (honest, operational) vs **user** (goal-oriented, safe).
2. Compare structure to [`scaffold/docs/`](../../scaffold/docs/).
3. Use with [`FIRST_WEEK.md`](/FIRST_WEEK/) — copy patterns, not the fictional product details.

This example is still incomplete versus a full Phase 0–9 archive. It prioritizes phases teams get stuck on (1, 3) plus the two-audience and ops patterns.
