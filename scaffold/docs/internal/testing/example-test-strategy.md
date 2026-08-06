# Test strategy: [Project name]

> Starter stub. Replace with your team's strategy before Phase 5 is complete.
> See upstream `templates/test-strategy.md` for the full template and
> `primer/09-phase-5-testing.md` for guidance on coverage gates, security
> evidence, and QA doc conventions.

## Scope

**In scope:**

-

**Out of scope:**

-

## Testing levels

| Level | Owner | Tool / framework | CI stage | Coverage target | Gate type |
|-------|-------|-----------------|----------|----------------|-----------|
| Unit | | | PR | | Advisory |
| Integration | | | PR | | Advisory |
| End-to-end | | | Pre-release | | Advisory |
| Performance | | | Pre-release | | Hard |
| Security (SAST) | | | PR | | Hard |

> Gate types: **Hard** = CI fails below threshold. **Advisory** = PR comment, non-blocking.
> Document exceptions per PR, not per policy.

## Environments

| Environment | Purpose | Data | Who manages |
|-------------|---------|------|-------------|
| Local | Dev iteration | Fixtures / seeds | Each developer |
| CI | Per-PR fast feedback | Fixtures | CI runner |
| Staging | Pre-release smoke | Anonymised copy | DevOps |

## Data strategy

- Test fixtures location:
- Seed / reset mechanism:
- Production data handling:

## CI integration

- Test command:
- Coverage report location:
- Nightly / pre-release gate:

## Traceability

Must-have requirements → acceptance criteria → test case IDs.
See `test-cases/` for individual test cases.

## Acceptance criteria (release gate)

- [ ] All Must-have acceptance criteria have passing test cases
- [ ] No SEV-1 or SEV-2 open bugs in scope
- [ ] Performance baselines met (see NFR table)
- [ ] Security scan: no critical or high findings in production dependencies

## Related

- NFRs: `../requirements/non-functional.md`
- Test cases: `test-cases/`
- Coverage reports: `coverage-reports/`
- Security scan results: `security-scan-results/`
- Upstream template: `templates/test-strategy.md` (see `../../KIT.md`)
- Upstream example: `examples/acme-export-platform/` (see `../../KIT.md`)
