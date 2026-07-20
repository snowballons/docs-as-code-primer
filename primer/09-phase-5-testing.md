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

### Coverage gate policy examples

A coverage gate is a **decision rule**: does this change pass or fail based on test coverage? Three common policies:

| Policy | What it means | When to use |
|--------|---------------|-------------|
| **Informational** | Coverage reported in CI but never blocks a merge | Early-stage projects, prototypes, or teams building coverage culture |
| **Advisory** | Coverage below threshold triggers a PR comment but is non-blocking — team decides | Majority of projects; maintains awareness without blocking velocity |
| **Hard gate** | CI fails if coverage drops below threshold | Compliance-sensitive systems (PCI-DSS, SOC 2, HIPAA); core shared libraries |

Example policy statement in `docs/internal/testing/test-strategy.md`:

```text
## Coverage gates

| Metric | Threshold | Gate type | Scope |
|--------|-----------|-----------|-------|
| Line coverage | ≥ 80% | Advisory | New code only (diff coverage) |
| Branch coverage | ≥ 70% | Advisory | New code only |
| Critical path coverage | 100% | Hard | Export flow, cancellation flow |
| API endpoint coverage | 100% | Hard | Integration tests per OpenAPI path |
```

Document exceptions per PR, not per policy.

## Definition of Done (MVP)

- [ ] Strategy approved
- [ ] Must-have acceptance criteria covered
- [ ] Coverage gates understood (hard vs advisory)
- [ ] Security findings triaged

## Mistakes

- Tests that exist only as tribal knowledge
- Performance “feels fine” without baseline numbers

## Check yourself

1. Your QA lead says "we have tests." What three dimensions should the test strategy document to make this actionable?
2. An auditor asks for evidence that the "cancel export before processing" requirement was tested. Where should the trace live?
3. Your team says "performance is fine" after every release but has never documented a load profile. What's the risk?

## Use

- Templates: [`templates/test-strategy.md`](../templates/test-strategy.md), [`templates/test-case.md`](../templates/test-case.md), [`templates/user-story.md`](../templates/user-story.md) (traceability)
- Folder guide: `docs/internal/testing/` (structural)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
