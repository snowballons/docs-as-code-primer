# Phase 1 — User & Business Requirements

| | |
|--|--|
| **Phase** | 1 |
| **Primary path** | `docs/internal/requirements/` |

## Purpose

Translate vision into testable *what*: functional requirements, NFRs, stories, personas, journeys, prioritized backlog.

## Ownership

Product / BA primary; Tech Lead for feasibility; QA for testability.

## Write

- Functional requirements in testable form
- NFRs with **numeric** targets (performance, security, reliability, a11y, i18n)
- User stories with Given/When/Then acceptance criteria
- Personas and journey maps
- MoSCoW (or equivalent) backlog; Must = MVP

### Bad → good (NFR)

| Bad | Good |
|-----|------|
| “We want fast page loads.” | “p95 HTML TTFB < 300ms on production P75 hardware for the 90th-percentile catalog page.” |
| “Exports should be fast.” | “Export jobs for ≤ 1M rows complete in < 30s under nominal warehouse load.” |

## Definition of Done (MVP)

- [ ] Must-have stories have acceptance criteria
- [ ] NFRs are measurable
- [ ] Tech Lead reviewed Must-haves for feasibility
- [ ] Docs under `docs/internal/requirements/`

## Mistakes

- Specifying UI chrome instead of need
- “Should be fast” without a number
- Ignoring NFRs until after launch

## Use

- Templates: [`templates/user-story.md`](../templates/user-story.md), [`templates/nfr.md`](../templates/nfr.md), [`templates/persona.md`](../templates/persona.md)
- Examples: [`export-csv.md`](../examples/acme-export-platform/internal/requirements/user-stories/export-csv.md), [`non-functional.md`](../examples/acme-export-platform/internal/requirements/non-functional.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
