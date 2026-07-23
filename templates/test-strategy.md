---
title: "Test strategy: [Project name]"
description: "> A test strategy is a shared contract between dev, QA, and product — not a test plan that quotes ticket titles. It answers: who tests what, at what level, against which bar, and how we know we're don"
---
# Test strategy: [Project name]

> A test strategy is a shared contract between dev, QA, and product — not a test plan that quotes ticket titles. It answers: who tests what, at what level, against which bar, and how we know we're done.

## Scope

What is in scope for this strategy:

What is out of scope:

## Testing levels

| Level | Who owns | What we test | Tool / framework | CI stage | Coverage target |
|-------|----------|-------------|-----------------|----------|----------------|
| Unit | | | | | |
| Integration | | | | | |
| Component/UI | | | | | |
| End-to-end | | | | | |
| Performance | | | | | |
| Security | | | | | |

## Traceability

Requirements and acceptance criteria link to test cases:

- NFRs map to performance / security tests
- Must-have user stories map to one or more test cases
- Each test case has a unique ID referenced in the strategy

## Environments

| Environment | Purpose | Data | Deploy method | Who manages |
|-------------|---------|------|--------------|-------------|
| Local | | | | |
| CI | | | | |
| Staging | | | | |
| Production | | | | |

## Data strategy

- Test data sources and fixtures
- Seeding / resetting between runs
- Production data anonymisation for non-prod environments

## CI integration

- Tests run on every PR to relevant paths
- Full suite runs nightly or pre-release
- [N] minute timeout per stage
- Gate policy: coverage % hard vs advisory

## Acceptance criteria

- Must-have stories: tested and passing
- No SEV-1 / SEV-2 bugs in scope
- Performance baselines met (see NFR table)
- Security scan: no critical or high findings

## Out of scope (this release)

- ...

## Related documents

- NFRs:
- Test cases:
- Bug triage policy:
- Security scan results:
