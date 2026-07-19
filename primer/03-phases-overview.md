# Phases overview

Ten phases mirror a software lifecycle. They are a **mental model**, not a waterfall gate system. Phases 3–5 often run in parallel. Phase 8 never ends.

| Phase | Name | Primary stream | Scaffold path |
|-------|------|----------------|---------------|
| 0 | Vision & Charter | Internal | `docs/internal/charter/` |
| 1 | Requirements | Internal | `docs/internal/requirements/` |
| 2 | Architecture | Internal | `docs/internal/architecture/`, `decisions/` |
| 3 | Detailed design | Internal | `docs/internal/system-design/` |
| 4 | Implementation docs | Internal | `docs/internal/development/` |
| 5 | Testing & QA | Internal | `docs/internal/testing/` |
| 6 | Operations | Internal | `docs/internal/operations/` |
| 7 | User documentation | User | `docs/user/` |
| 8 | Maintenance | Both | changelogs, ADR updates, retrospectives |
| 9 | Retirement | Both | charter retirement + user migration notices |

## Rule of thumb

- **0–6** → mostly internal
- **7** → mostly user-facing
- **8** → both
- **9** → wrap both streams

## Definition of Done (global)

A change that affects behavior, contracts, operations, or onboarding is not done until the matching docs path is updated (or the PR states why docs are N/A).

Next: [Phase 0](04-phase-0-charter.md)
