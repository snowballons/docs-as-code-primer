---
title: "Content governance"
description: "Governance prevents drift between what the system does and what the docs say."
---
# Content governance

Governance prevents drift between what the system does and what the docs say.

## Decision order

When placing new content, ask in order:

1. **Sensitive?** (security controls/absences, exploits, infra, finances, candid weaknesses) → **internal only**
2. **Implementation detail?** (schemas, deploy steps, service mesh internals) → **internal**
3. **Needed for a user goal?** → **user**
4. **Same definition/diagram for both?** → **shared**
5. **Derived from internal for external?** → internal canonical; user curated excerpt

## Flowchart

```text
Outside engineering team?
├── No → internal/
└── Yes
    ├── Sensitive? → internal/
    └── No
        ├── Also exists internally?
        │   ├── Can derive? → derive from internal
        │   └── Else → create both + plan reuse
        └── Applies equally to both? → shared/ else user/
```

## Before/after

**Before** — no governance:

```text
Engineer writes a design doc on the architecture.
Six months later: the architecture changed, the doc didn't.
Nobody knows whether the doc is current or stale.
New engineers treat all docs with suspicion.
```

**After** — governance in place:

```text
Every doc has a last-reviewed date and owner.
Architecture PRs include diagram updates; reviewers check accuracy.
Monthly: runbooks are tested in a game day.
Quarterly: health review flags stale docs before they cause incidents.
```

## Review standards

| Stream | Review for | Suggested turnaround |
|--------|------------|----------------------|
| Internal | Accuracy, completeness, consistency | 24–48 hours for most changes; schedule a meeting for major architecture |
| User | Accuracy, clarity, tone, task completion | 48–72 hours; higher editorial bar |

Internal: polish is secondary to correctness. User: accuracy **and** readability are gates.

### When to escalate

- An internal doc contains a security-sensitive detail that could affect the user stream → security review
- A user doc makes a promise the system doesn't keep → engineering review before publishing
- An architecture decision has no ADR → stop and write one before proceeding

## Drift-prevention DoD

Every PR that touches code should be checked against this list. Not every item applies every time — but if none applies, the change likely has no doc impact and can move forward.

| Check | Applies if | Action |
|-------|------------|--------|
| Architecture changed? | System design, dependencies, deployment topology | Update C4 diagrams and affected ADRs |
| API surface changed? | New/modified endpoint, schema change, header change | Update OpenAPI spec + user API reference |
| Behaviour changed? | Existing feature works differently | Update feature doc + user changelog |
| New feature added? | New capability shipped | Feature doc + tutorial + changelog entry |
| Dependency added? | New service, library, infrastructure | Update architecture docs, add ADR |
| Ops procedure changed? | Deploy, rollback, monitoring, runbooks | Update runbooks, test on staging |
| UX flow changed? | UI or workflow differs from existing docs | Update getting-started and affected feature docs |
| Deprecation started? | Feature marked for removal | Deprecation notice + migration guide + timeline |
| Earlier doc out of date? | During review, found stale content | File a doc issue or fix in the same PR |

The goal: **no undocumented change reaches production.** Not every PR needs a doc change — but every PR should consider it explicitly.

## Reuse patterns

1. Single source, multiple renderings (OpenAPI)
2. Shared includes / snippets (glossary)
3. Audience front matter filters (optional advanced)
4. Derive user docs from approved internal design

## Maintenance cadence

| Frequency | Activity | Owner |
|-----------|----------|-------|
| Per release | User changelog; API quickstart smoke | Eng + writer |
| Monthly | Spot-check getting started + sample feature pages | Rotating |
| Quarterly | Runbook game day; architecture vs reality audit | SRE + architect |
| Annually | Full doc health review; maturity level assessment | Team lead |

## Check yourself

1. An engineer merges a PR that changes the export API response format. The OpenAPI spec is updated, but the user API reference page still shows the old format. Which drift-prevention check was missed?
2. Your team has a quarterly architecture review. The C4 diagrams haven't changed in three quarters — but the system has. What governance process broke down?
3. A new compliance requirement says "all internal design docs must be auditable for two years." What does this mean for your archival and deletion practices?

## Paths

- Canonical map: [`appendix/phase-folder-map.md`](/appendix/phase-folder-map/)
- Stub policy: [`scaffold/docs/GOVERNANCE.md`](../scaffold/docs/GOVERNANCE.md)

Next: [Anti-patterns](/primer/anti-patterns/)
