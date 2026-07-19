# CI and quality gates

## What the scaffold ships (default)

The starter workflow ([`scaffold/.github/workflows/docs.yml`](../scaffold/.github/workflows/docs.yml)) **enables by default**:

1. Markdown lint (`markdownlint`)
2. Link check (`lychee`)

That is the minimum DocOps bar for week 1 ([`FIRST_WEEK.md`](../FIRST_WEEK.md)).

## What the scaffold includes but leaves off until you need it

The same workflow file contains **commented optional jobs**:

| Optional job | When to enable | Ties to |
|--------------|----------------|---------|
| Spectral OpenAPI lint | When `docs/internal/system-design/api-specs/` has YAML/JSON | Phase 3 DoD |
| Mermaid CLI render check | When you keep `.mmd` files and want CI validation beyond site build | Diagrams-as-code |

Also recommended later (not in the starter file yet):

- Spellcheck (`cspell`) or Vale (prefer **separate** internal vs user style packages)
- Strict docs site build (`mkdocs build --strict` / Docusaurus build) as the usual Mermaid check
- Dual pipelines (internal vs user path filters) when review cadence diverges

## Aligning claims with automation

| Primer expectation | Starter CI | Your action |
|--------------------|------------|-------------|
| Docs reviewed in PRs | PR template checklist | Use the template |
| Links/lint | On by default | Keep failing the build |
| OpenAPI linted | Commented Spectral job | Uncomment when specs exist |
| Diagrams valid | Optional mmdc **or** site `--strict` | Pick one before Phase 2 hardens |

Do not claim “full DocOps” in your team README until Spectral (if you have APIs) and a publish/strict build path are actually on.

## Path filters (later)

- `docs/internal/**` or `docs/shared/**` → internal site pipeline
- `docs/user/**` or `docs/shared/**` → user site pipeline

MVP may keep one workflow; split when one stream’s review blocks the other.

## Related

- [Tooling map](../appendix/tooling-map.md)
- [Mermaid recipe](../recipes/mermaid-in-ci.md)
- [OpenAPI → user API recipe](../recipes/openapi-to-user-api-ref.md)
