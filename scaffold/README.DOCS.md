# Using the scaffold

Copy this folder’s contents into your project when you want a Docs-as-Code structure on day one.

## What to copy

From `scaffold/`, copy into your repository root (or adjust paths to match your monorepo):

```text
docs/                    → your repo docs/
.github/workflows/docs.yml
.github/PULL_REQUEST_TEMPLATE.md   (merge with yours if you already have one)
AGENTS.md
llms.txt.example         → rename/adapt to llms.txt when ready
```

You do **not** need a static site generator to start. The scaffold is plain Markdown.

## Directory model

```text
docs/
├── internal/     # engineers, SREs, auditors — private / access-controlled
├── user/         # customers, API consumers — public or customer-facing
└── shared/       # glossary, high-level diagrams, shared concepts
```

| Stream | Optimize for | Update style |
|--------|--------------|--------------|
| Internal | Accuracy, honesty, operational depth | Fast; polish secondary |
| User | Goals, clarity, safety to publish | Curated; higher editorial bar |
| Shared | Single source of truth for reused facts | Change once; both pipelines consume |

## Phase → folder map

| Phase | Location |
|-------|----------|
| 0 Charter | `docs/internal/charter/` |
| 1 Requirements | `docs/internal/requirements/` |
| 2 Architecture | `docs/internal/architecture/` + `docs/internal/decisions/` |
| 3 Detailed design | `docs/internal/system-design/` |
| 4 Implementation | `docs/internal/development/` (+ root/package READMEs) |
| 5 Testing | `docs/internal/testing/` |
| 6 Operations | `docs/internal/operations/` |
| 7 User docs | `docs/user/` |
| 8 Evolution | both streams (changelogs, ADR updates, retrospectives) |
| 9 Retirement | primarily internal; user migration notices as needed |
| Ongoing shared | `docs/shared/` |

## How to fill it

1. Start with Phase 0 stubs under `internal/charter/`.
2. Use templates from the parent repo’s [`../templates/`](../templates/) (or copy `templates/` into your repo).
3. Put runbooks under `operations/runbooks/` **by symptom** (e.g. `high-error-rate.md`), not only by service name.
4. Keep OpenAPI sources under `internal/system-design/api-specs/`; derive consumer API docs under `user/api-reference/`.
5. Enable [`.github/workflows/docs.yml`](.github/workflows/docs.yml) and fix lint/link failures.

## Greenfield vs retrofit

**Greenfield:** copy the tree, leave unused folders, fill Phase 0–2 before implementation hardens.

**Retrofit:** do not boil the ocean. Map existing docs into this tree. Move the top critical families first (architecture, ADRs, runbooks, API, getting started).

## Publishing

Structure first. When you are ready to publish, see [`../recipes/`](../recipes/).

## Related primer chapters

- [Two audiences](../primer/02-two-audiences.md)
- [Content governance](../primer/14-content-governance.md)
- [CI and quality gates](../primer/16-ci-and-quality-gates.md)
- [Agent-ready docs](../primer/17-agent-ready-docs.md)
