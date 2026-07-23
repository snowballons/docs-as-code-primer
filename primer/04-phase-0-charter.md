---
title: "Phase 0 — Project Vision & Charter"
description: "| | | |--|--| | **Phase** | 0 | | **Primary path** | `docs/internal/charter/` |"
---
# Phase 0 — Project Vision & Charter

| | |
|--|--|
| **Phase** | 0 |
| **Primary path** | `docs/internal/charter/` |

## Purpose

Answer *why this exists* before requirements harden: problem, audience, success metrics, scope boundaries.

## Ownership

Product Owner / sponsor primary; Tech Lead reviews; formal sign-off before Phase 1.

## Write

- Vision statement (2–4 working sentences, not a slogan)
- KPIs with baseline and target
- In-scope and **out-of-scope**
- Stakeholders + RACI
- Constraints and assumptions (assumptions are risks until validated)
- Initial risk register

Split across scaffold files using the charter table in [`appendix/phase-folder-map.md`](/appendix/phase-folder-map/).

### RACI example

```text
# docs/internal/charter/stakeholders.md

| Activity | Product Owner | Tech Lead | Eng Team | Security | Sponsor |
|----------|:---:|:---:|:---:|:---:|:---:|
| Define vision | A | R | C | - | C |
| Approve scope | R | C | I | C | A |
| Write KPIs | A | R | C | - | C |
| Risk decisions | C | R | C | A | I |
| Sign off charter | I | C | I | C | A |
```

(R = responsible, A = accountable, C = consulted, I = informed; single-A per row.)

### Risk register example

```text
# docs/internal/charter/risk-register.md

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|------|:---:|:---:|------------|-------|
| 1 | Export of >1M rows exceeds default timeout | Medium | High | Document configurable `WORKER_COUNT` env var; set a reasonable default |
| 2 | Tenant billing data contains PII not covered by current retention policy | Low | Critical | Add PII field annotation spec before Phase 1; security review gate in Phase 3 DoD |
| 3 | New format (Parquet) requires dependency the team hasn't used | Medium | Medium | Spike in Phase 2; include in module spec as risk mitigator |
| 4 | API rate limits not communicated to users before launch | High | Medium | Include in user getting-started; smoke-test with a new tenant before GA |
| 5 | Single region deployment without DR plan | Low | Critical | Add DR doc to Phase 6 scope; reference in architecture constraints |
```

> Likelihood: Low/Medium/High. Impact: Low/Medium/High/Critical. Revisit at each phase gate.

### Bad → good (vision)

| Bad | Good |
|-----|------|
| “We’re building the future of data.” | “Self-service export so enterprise admins download account data without filing eng tickets.” |
| KPIs: “Improve customer success.” | “Cut export-related support tickets 60% within 3 months of launch (baseline 120/mo).” |
| Scope lists only features | Scope lists **out-of-scope** items that block creep |

## Definition of Done (MVP)

- [ ] Vision approved by sponsor
- [ ] KPIs measurable
- [ ] Out-of-scope listed
- [ ] RACI agreed
- [ ] Committed under `docs/internal/charter/`

## Mistakes

- Marketing pitch instead of team working definition
- Skipping out-of-scope
- Never revisiting the charter at milestones

## Check yourself

1. Your team lead says "we'll do the vision in a kick-off slide deck — not in a doc." What's the risk?
2. Which of these is a measurable KPI: "improve customer success" vs "cut export-related support tickets 60% within 3 months"?
3. You wrote a vision statement that your sponsor loves. Six months later, a new engineer asks "why does this exist." Where do they look?

## Use

- Template: [`templates/vision-charter.md`](/templates/vision-charter/)
- Example: [`examples/acme-export-platform/internal/charter/vision.md`](/examples/acme-export-platform/internal/charter/vision/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
