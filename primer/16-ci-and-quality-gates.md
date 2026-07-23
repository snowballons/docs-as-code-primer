---
title: "CI and quality gates"
description: "Automation enforces what process cannot. The scaffold ships a minimal CI workflow; this chapter explains how to grow it."
---

# CI and quality gates

Automation enforces what process cannot. The scaffold ships a minimal CI workflow; this chapter explains how to grow it.

## What the scaffold ships (default)

The starter workflow ([`scaffold/.github/workflows/docs.yml`](../scaffold/.github/workflows/docs.yml)) **enables by default**:

1. Markdown lint (`markdownlint`)
2. Link check (`lychee`)

That is the minimum DocOps bar for week 1 ([`FIRST_WEEK.md`](/FIRST_WEEK/)). Every team should turn these on day one.

## What the scaffold includes but leaves off until you need it

The same workflow file contains **commented optional jobs**:

| Optional job | When to enable | Ties to |
|--------------|----------------|---------|
| Spectral OpenAPI lint | When `docs/internal/system-design/api-specs/` has YAML/JSON | Phase 3 DoD |
| Mermaid CLI render check | When you keep `.mmd` files and want CI validation beyond site build | Diagrams-as-code |

Also recommended later (not in the starter file yet):

- Spellcheck (`cspell`) or Vale
- Strict docs site build (`mkdocs build --strict` / Docusaurus build) as the usual Mermaid check
- Dual pipelines (internal vs user path filters) when review cadence diverges

### Vale: dual-style linting

Vale supports writing different rules for internal and user docs from the same CI job. This is the killer feature that spellcheck-only tools cannot match.

| Style package | Applies to | Checks |
|---------------|------------|--------|
| `Internal` | `docs/internal/**`, `docs/shared/**` | Technical accuracy, consistent terminology, no blocked words |
| `User` | `docs/user/**` | Accessibility language, consistent tone, reading level, no jargon |

**Setup pattern** (in `.vale.ini`):

```ini
StylesPath = .vale/styles

[*.md]
BasedOnStyles = Internal

[docs/user/**]
BasedOnStyles = User
```

One CI job runs Vale against all docs paths; the path filter selects the right rules. This catches problems like "internal trade-off leak verbatim into user docs" or "jargon term used without definition in user-facing content."

### Dual pipeline split

One workflow is the right default. Split when:

1. **Review cadence diverges** — internal changes need quick merges (accuracy over polish); user changes need editorial review (48–72h)
2. **Publishing targets differ** — internal docs deploy to a private site; user docs deploy to a public domain
3. **Team ownership splits** — engineering owns internal; a writer or PM owns user

**Concrete split pattern** (in `.github/workflows/`):

```yaml
# internal-docs.yml — triggers on docs/internal/** and docs/shared/**
# Checks: markdownlint, lychee, cspell (internal dictionary), Vale (Internal style)
# Deploys to: internal-docs.example.com

# user-docs.yml — triggers on docs/user/** and docs/shared/**
# Checks: markdownlint, lychee, cspell (user dictionary), Vale (User style), strict build
# Deploys to: docs.example.com
```

The scaffold ships one combined workflow. Copy and split when the pain of shared review outweighs the complexity of two pipelines.

## Before/after

**Before** — manual, unreliable:

```text
Engineer: "I fixed the link in the README."
Reviewer: "Did you check the other five pages that link to that page?"
Engineer: "...no."
The broken link ships. A customer hits a 404 in the getting-started guide.
```

**After** — automated quality gates:

```text
PR pushed.
CI runs:
  ✓ markdownlint — no formatting issues
  ✓ lychee — all 47 links resolve, the fixed link is confirmed
  ✓ cspell — no new typos
  ✓ Vale (User style) — reading level is within range
  ✓ Mermaid syntax — diagrams valid
PR can merge. Reviewer focuses on accuracy, not formatting.
```

## Aligning claims with automation

| Primer expectation | Starter CI | Your action |
|--------------------|------------|-------------|
| Docs reviewed in PRs | PR template checklist | Use the template |
| Links/lint | On by default | Keep failing the build |
| OpenAPI linted | Commented Spectral job | Uncomment when specs exist |
| Diagrams valid | Optional mmdc **or** site `--strict` | Pick one before Phase 2 hardens |
| Audience-appropriate tone | Not yet included | Add Vale when user docs exist |
| No stale content | Not automatable | Governance + manual health reviews |

Do not claim “full DocOps” in your team README until Spectral (if you have APIs) and a publish/strict build path are actually on.

## Path filters (when splitting)

- `docs/internal/**` or `docs/shared/**` → internal site pipeline
- `docs/user/**` or `docs/shared/**` → user site pipeline

MVP may keep one workflow; split when one stream's review blocks the other.

## Check yourself

1. Your CI checks links and lint. An engineer checks in OpenAPI YAML with a schema error. Does your CI catch it?
2. Your user docs contain the phrase "simply export your data" — but Vale's style guide flags "simply" as a weasel word. What needs to exist for this to be caught automatically?
3. Your team has one docs CI pipeline. Internal reviews take 24 hours. User reviews take 72 hours. A critical deploy is blocked because the pipeline is shared. What does the primer recommend?

## Related

- [Tooling map](/appendix/tooling-map/)
- [Mermaid recipe](/recipes/mermaid-in-ci/)
- [OpenAPI → user API recipe](/recipes/openapi-to-user-api-ref/)
