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

### Bad → good (QA docs)

| Bad | Good |
|-----|------|
| “We’ll test thoroughly.” | Test strategy with types, owners, coverage targets, environments |
| Acceptance criteria with no cases | Each Must-have criterion has a traced test case ID |
| “Perf looks fine on my laptop” | Baseline benchmark with load profile, tool, and stored results |

## Definition of Done (MVP)

- [ ] Strategy approved
- [ ] Must-have acceptance criteria covered
- [ ] Coverage gates understood (hard vs advisory)
- [ ] Security findings triaged

## Mistakes

- Tests that exist only as tribal knowledge
- Performance “feels fine” without baseline numbers

## Use

- Templates: [`templates/test-strategy.md`](../templates/test-strategy.md), [`templates/user-story.md`](../templates/user-story.md) (traceability)
- Folder guide: `docs/internal/testing/` (structural)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
