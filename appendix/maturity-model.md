---
title: "Documentation maturity model"
description: "A framework for assessing where your team is and what to aim for next. Based on the practices in this kit."
---

# Documentation maturity model

A framework for assessing where your team is and what to aim for next. Based on the practices in this kit.

## Levels

### Level 0 — Chaos

| Dimension | Characteristics |
|-----------|----------------|
| Storage | Confluence, Google Docs, Slack, READMEs with no central index |
| Ownership | Nobody owns docs. Written by whoever had time. |
| Review | No review. Docs are written after the fact or not at all. |
| Accuracy | Unknown. Architecture diagrams from 2022 may or may not be current. |
| Internal vs user | One stream. Internal candid notes leak to customers; user docs read like API reference. |
| Automation | None. Broken links ship silently. |

**You're here if:** You can't find the architecture overview in 5 minutes. A new engineer takes a week to get productive.

**Next step:** Copy the scaffold. Follow `FIRST_WEEK.md` Day 0 to copy `scaffold/` into your repo.

### Level 1 — Scaffold

| Dimension | Characteristics |
|-----------|----------------|
| Storage | Git-based. `docs/internal/`, `docs/user/`, `docs/shared/` exist. |
| Ownership | Team-level. Docs are in the PR. |
| Review | PR template includes doc checklist. Docs are reviewed alongside code. |
| Accuracy | Key docs exist but may be sparse. Architecture diagrams exist. |
| Internal vs user | Split enforced by folder structure. Shared glossary exists. |
| Automation | Markdownlint + link check in CI. |

**You're here if:** Docs live in Git, links are checked in CI, and a new engineer can find the architecture overview.

**Next step:** Fill Phase 0 (charter) and Phase 1 (personas, user stories). Use `FIRST_WEEK.md`.

### Level 2 — Discipline

| Dimension | Characteristics |
|-----------|----------------|
| Storage | All phases 0–6 practiced. ADRs written before major decisions. |
| Ownership | Docs are a first-class deliverable in every sprint. |
| Review | Dedicated doc review for user-facing content. Internal review is accuracy-only. |
| Accuracy | Runbooks are tested (game days). Quarterly health reviews catch drift. |
| Internal vs user | Dual standards: internal is candid, user is curated. Derived content pattern in use. |
| Automation | Vale with dual style packages (internal vs user). Mermaid validated in CI. OpenAPI lint enabled. |

**You're here if:** Every PR considers docs, new engineers get productive in one day, and on-call trusts the runbooks.

**Next step:** Set up dual pipelines, add user changelog, schedule health reviews.

### Level 3 — Platform

| Dimension | Characteristics |
|-----------|----------------|
| Storage | Dual pipelines publish internal and user docs independently. |
| Ownership | Doc health is reviewed monthly. Doc debt is tracked alongside code debt. |
| Review | Automated quality gates enforce audience-appropriate tone, reading level, and terminology. |
| Accuracy | Automated drift detection flags stale docs. Monthly health reviews are routine. |
| Internal vs user | MCP or agent hooks expose docs to tools. Internal changelog feeds user changelog. |
| Automation | End-to-end: lint → link check → spell/Vale → strict build → publish. Agent-accessible via llms.txt and AGENTS.md. |

**You're here if:** Documentation is a first-class artifact, as automated as tests. Agents can retrieve accurate context without hallucination.

**Next step:** Extend to external contributors, publish maturity score publicly.

## Progression

```text
Level 0 ──scaffold──→ Level 1 ──phases──→ Level 2 ──platform──→ Level 3
  Chaos      |        Scaffold     |       Discipline    |       Platform
             |                     |                     |
     Copy scaffold,           Fill Phases 0–6,     Dual pipelines,
     add CI,                 test runbooks,        agent hooks,
     split audiences         dual style lint       health automation
```

## Assessment checklist

| Question | Level 0 | Level 1 | Level 2 | Level 3 |
|----------|---------|---------|---------|---------|
| Docs in Git? | ❌ | ✅ | ✅ | ✅ |
| CI checks links? | ❌ | ✅ | ✅ | ✅ |
| Internal/user split? | ❌ | ✅ | ✅ | ✅ |
| ADRs written? | ❌ | 🔜 | ✅ | ✅ |
| Runbooks tested? | ❌ | ❌ | ✅ | ✅ |
| Vale dual styles? | ❌ | ❌ | ✅ | ✅ |
| Dual pipelines? | ❌ | ❌ | 🔜 | ✅ |
| Agent hooks? | ❌ | ❌ | ❌ | ✅ |
| Monthly health review? | ❌ | ❌ | ✅ | ✅ |

## Related

- [CI and quality gates](/primer/ci-and-quality-gates/)
- [Content governance](/primer/content-governance/)
