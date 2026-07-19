# Phase 5 — Testing & Quality Assurance

| | |
|--|--|
| **Phase** | 5 |
| **Primary path** | `docs/internal/testing/` |

## Purpose

Prove the system meets Phase 1 criteria. Keep a reviewable record for releases, audits, and regressions.

## Ownership

QA lead; developers own automation; security owns security test evidence.

## Write

- Test strategy (types, coverage targets, environments, data, CI integration)
- Test cases traced to acceptance criteria
- Coverage / performance / security scan results (CI artifacts OK if linked)
- Bug triage conventions and severity SLAs

## Definition of Done (MVP)

- [ ] Strategy approved
- [ ] Must-have acceptance criteria covered
- [ ] Coverage gates understood (hard vs advisory)
- [ ] Security findings triaged

## Mistakes

- Tests that exist only as tribal knowledge
- Performance “feels fine” without baseline numbers

## Use

- Trace cases to stories from [`templates/user-story.md`](../templates/user-story.md)
- Folder guide: `docs/internal/testing/README.md` (structural)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
