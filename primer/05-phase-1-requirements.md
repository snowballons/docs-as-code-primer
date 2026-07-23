---
title: "Phase 1 — User & Business Requirements"
description: "| | | |--|--| | **Phase** | 1 | | **Primary path** | `docs/internal/requirements/` |"
---

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

### Functional requirement writing pattern

A functional requirement is a **single testable statement** about system behavior. Write them as:

```text
The <system> shall <action> <object> [under <condition>].
```

Then trace each to a test case ID.

| Role | Format | Example |
|------|--------|---------|
| FR (terse) | `shall <action> <object>` | "The export service shall reject CSV files exceeding 100 MB." |
| FR (conditional) | `shall <action> <object> when <condition>` | "The export service shall queue a webhook notification when a scheduled export completes." |
| Acceptance criterion | `Given <precondition> When <trigger> Then <outcome>` | "Given an export with 500,000 rows, when the user requests CSV format, then the service returns a download link within 30 s." |

Follow this with NFRs (separate template) and user stories (Given/When/Then for features, not system functions).

#### Bad → good (functional requirement)

| Bad | Good |
|-----|------|
| "The system should handle exports well." | "The export service shall process CSV exports of up to 1M rows within 30 s under nominal warehouse load." |
| "Users can cancel exports." | "The export service shall cancel a PENDING export within 5 s of receiving a cancellation request. EXPORTING exports shall cancel only after the current row batch completes." |

### Persona guidance

A persona is a **decision-making tool**, not a demographic sketch. Structure every persona around:

- **Goal** — what they're trying to accomplish (one sentence)
- **Pain points** — what makes it hard today (3–5 items)
- **Behavior patterns** — how they interact with systems (tools, frequency, constraints)
- **Success criteria** — how they know it worked

Demographics (job title, technical level) matter only when they affect behavior. "Sarah, 32, likes dogs and hiking" is noise.

#### Bad → good (persona)

| Bad | Good |
|-----|------|
| "Sarah is 32, works in marketing, likes dogs and hiking." | "Sarah: enterprise admin at a 500-person SaaS company. Her goal is to export account data for quarterly audits without filing an eng ticket. Pain points: current CSV tool times out over 10K rows; she can't schedule recurring exports; error messages are opaque. Behaviour: works in browser, uses the product weekly, will retry twice before emailing support." |
| "Bob, engineer, technical" (one-liner) | "Bob: platform engineer at the same company. Goal: integrate export API into internal dashboards. Pain points: API auth docs reference a deprecated endpoint; rate limits undocumented; sandbox env credentials expire weekly." |

### Journey map guidance

A journey map shows the stages a user goes through to achieve a goal. Each stage has:

- **Stage** — logical step (not UI page)
- **User actions** — what they do
- **Touchpoints** — system, UI, API, email
- **Emotions** — 😊 frustrated? confused? delighted?
- **Pain points** — specific friction
- **Opportunities** — what could be better

Start with the persona's goal, then list 5–7 stages from start to completion. Keep to one persona per journey map.

#### Bad → good (journey map)

| Bad | Good |
|-----|------|
| "Export → Wait → Download" (3 stages, no detail) | "1. Authenticate → 2. Select export scope → 3. Choose format → 4. Initiate export → 5. Monitor progress → 6. Download results → 7. Verify data" with per-stage actions, touchpoints, emotions, pain points, and time estimates |
| Journey map in a slide deck that no one updates | Mermaid sequence diagram (or equivalent) in `docs/internal/requirements/journey-maps/` with a date and version |

### Bad → good (NFR)

| Bad | Good |
|-----|------|
| “We want fast page loads.” | “p95 HTML TTFB < 300ms on production P75 hardware for the 90th-percentile catalog page.” |
| “Exports should be fast.” | “Export jobs for ≤ 1M rows complete in < 30s under nominal warehouse load.” |

### Backlog prioritization (MoSCoW)

Every requirement belongs to one of four buckets:

| Bucket | Label | What it means | Who decides |
|--------|-------|---------------|-------------|
| **Must** | MVP | Without this, the release has no value. Non-negotiable for go-live. | Product Owner + Sponsor sign-off |
| **Should** | Important | High-value but not critical. Include if capacity allows; defer without renegotiating scope. | Product Owner (feasibility check from Tech Lead) |
| **Could** | Nice-to-have | Low-risk, low-cost additions. Only include after all Musts and Shoulds are covered. | Tech Lead (cost estimate) |
| **Won't** | Explicitly excluded | Documented to prevent scope creep. Review at each milestone. | Sponsor |

**Rules:**

- Must = MVP. If everything is Must, nothing is Must.
- Should and Could are ordered within each bucket.
- Won't is as important as Must — it defines what the team is *not* doing.
- Revisit at each phase gate; items can move between buckets as context changes.

#### Bad → good (backlog)

| Bad | Good |
|-----|------|
| "Everything is P1" (40 items) with no scope definition | 5 Must, 8 Should, 12 Could, 10 Won't — each with a one-line rationale |
| Backlog exists only in the team's heads or a shared doc that predates the project | Backlog in `docs/internal/requirements/backlog.md` with MoSCoW buckets, last-reviewed date, and a link to the issue tracker |
| "We'll add it in v2" (no further detail) | Won't items have a rationale and a "revisit at" milestone |

## Definition of Done (MVP)

- [ ] Must-have stories have acceptance criteria
- [ ] NFRs are measurable
- [ ] Tech Lead reviewed Must-haves for feasibility
- [ ] Docs under `docs/internal/requirements/`

## Mistakes

- Specifying UI chrome instead of need
- “Should be fast” without a number
- Ignoring NFRs until after launch

## Check yourself

1. An engineer writes: "The export should be fast." What three questions should you ask?
2. Your product manager insists on 47 user stories for the MVP. What's your response?
3. You have a persona file that describes "Sarah, 32, who likes dogs and hiking." Why is this a problem?

## Use

- Templates: [`templates/user-story.md`](/templates/user-story/), [`templates/nfr.md`](/templates/nfr/), [`templates/persona.md`](/templates/persona/), [`templates/functional-requirements.md`](/templates/functional-requirements/), [`templates/user-journey.md`](/templates/user-journey/)
- Examples: [`export-csv.md`](/examples/acme-export-platform/internal/requirements/user-stories/export-csv/), [`non-functional.md`](/examples/acme-export-platform/internal/requirements/non-functional/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
