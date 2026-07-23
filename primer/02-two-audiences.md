---
title: "Two audiences"
description: "A single documentation stream rarely serves both engineers and customers well."
---

# Two audiences

A single documentation stream rarely serves both engineers and customers well.

| | Internal | User-facing |
|--|----------|-------------|
| **Readers** | Developers, architects, SREs, QA, auditors | End users, API consumers, customers, partners |
| **Needs** | Depth, honesty, operational detail | Goals, clarity, safe publishing |
| **Tone** | Technical jargon OK; candid trade-offs OK | Audience-appropriate; curated |
| **Updates** | Frequent; accuracy over polish | Curated; rough thrash erodes trust |
| **Access** | Private / authenticated | Public or customer-authenticated |

## Three folders

```text
docs/
├── internal/   # builders & operators
├── user/       # product consumers
└── shared/     # glossary, safe high-level diagrams, shared concepts
```

## Two non-negotiable rules

1. **Never let internal content reach user docs without deliberate curation.**
2. **Never maintain the same fact in two places without a reuse mechanism.**

## Check yourself

1. A new hire asks "how does the export system work." Your internal architecture doc has every trade-off and known failure mode. Your user doc says "exports run in the background." Both are accurate. Which do you share, and why?
2. Your glossary defines "export" in both `docs/internal/` and `docs/user/`. After six months, the definitions say different things. Which non-negotiable rule was violated?
3. An engineer suggests putting architecture diagrams in the user-facing docs because "it's the same system." What's the risk?

## Derive, don't duplicate

Example: OpenAPI YAML in `internal/system-design/api-specs/` is canonical. Consumer API reference under `user/api-reference/` is curated from it (examples, auth guide, no internal annotations).

Next: [Phases overview](/primer/phases-overview/) · [Content governance](/primer/content-governance/)
