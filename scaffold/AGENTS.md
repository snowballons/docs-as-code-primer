# AGENTS.md

Guidance for AI coding agents working in a repository that uses this Docs-as-Code scaffold.

## Humans first

- Stub policy: `docs/GOVERNANCE.md`
- Upstream kit paths (primer, templates, examples, first-week pack): `docs/KIT.md`
- Do not invent `../primer/...` links from inside `docs/` — they break after the scaffold is copied

## Source of truth

| Need | Look here |
|------|-----------|
| Why the project exists | `docs/internal/charter/` |
| Requirements | `docs/internal/requirements/` |
| Architecture & ADRs | `docs/internal/architecture/`, `docs/internal/decisions/` |
| API contracts (canonical) | `docs/internal/system-design/api-specs/` |
| Module/service design | `docs/internal/system-design/services/` |
| How to run/develop | `docs/internal/development/`, root `README.md` |
| Ops / incidents | `docs/internal/operations/` |
| Customer/user help | `docs/user/` |
| Shared definitions | `docs/shared/glossary.md` |
| Stub / folder policy | `docs/GOVERNANCE.md` |
| Upstream teaching index | `docs/KIT.md` |

## Rules

1. Prefer existing Markdown and OpenAPI sources over inventing APIs, fields, or behaviors.
2. When code changes user-visible behavior, update `docs/user/` in the same change (or leave a clear follow-up linked in the PR).
3. When code changes internal behavior, update the relevant `docs/internal/` pages.
4. Never copy sensitive internal content (threat models, infra credentials, unfixed issues, candid limitation notes) into `docs/user/`.
5. Do not duplicate glossary or shared concepts; link or include from `docs/shared/`.
6. Prefer Mermaid in Markdown for new engineering diagrams.
7. ADRs are append-only: supersede with a new ADR; do not rewrite accepted history silently.
8. For template/chapter guidance, open `docs/KIT.md` and use the upstream kit — do not guess file layouts.

## Doc update heuristic

```text
Did this change affect behavior, contracts, ops, or onboarding?
├── No → docs N/A (state why in the PR)
└── Yes
    ├── User-visible? → docs/user/ (+ changelog if needed)
    ├── Builder/operator? → docs/internal/
    └── Shared term/diagram? → docs/shared/
```

## Optional machine index

If present, use `llms.txt` as an index of documentation entry points. See `llms.txt.example`.
