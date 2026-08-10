# Using the scaffold

> **This file lives in the Docs-as-Code Primer repository** (next to `FIRST_WEEK.md`, `primer/`, `templates/`).  
> It is **not** part of the copy set. After copy, use `docs/KIT.md` and `docs/GOVERNANCE.md` inside the product repo.

Copy the scaffold into your project when you want a Docs-as-Code structure on day one.

**After copy:** [`../FIRST_WEEK.md`](../FIRST_WEEK.md)  
**Canonical paths (kit repo):** [`../appendix/phase-folder-map.md`](../appendix/phase-folder-map.md)  
**Copied into product repos:** `docs/GOVERNANCE.md`, `docs/KIT.md`

## What to copy

From `scaffold/`, copy into your repository root (or adjust paths for a monorepo):

```text
docs/                              → your repo docs/   (includes GOVERNANCE.md + KIT.md)
.github/workflows/docs.yml
.github/PULL_REQUEST_TEMPLATE.md   (merge if you already have one)
AGENTS.md
.markdownlint.json
llms.txt.example                   → rename/adapt to llms.txt when ready
```

Do **not** expect `../primer/...` or `../FIRST_WEEK.md` to resolve inside the product repo. Upstream teaching paths are listed in `docs/KIT.md` (set `KIT_URL` there).

You do **not** need a static site generator to start. The scaffold is plain Markdown.

Default CI: Markdown lint + link check. Optional Spectral / Mermaid jobs are commented in `docs.yml` — enable when ready (kit: [`../primer/16-ci-and-quality-gates.md`](../primer/16-ci-and-quality-gates.md)).

## Directory model

```text
docs/
├── KIT.md        ← upstream reference policy (post-copy safe)
├── GOVERNANCE.md ← stub policy
├── internal/     # builders & operators
├── user/         # product consumers
└── shared/       # glossary, shared diagrams/concepts
```

| Stream | Optimize for | Update style |
|--------|--------------|--------------|
| Internal | Accuracy, honesty, operational depth | Fast; polish secondary |
| User | Goals, clarity, safety to publish | Curated; higher editorial bar |
| Shared | Single source of truth for reused facts | Change once; both pipelines consume |

## Phase → folder map

**Kit repo canonical map:** [`../appendix/phase-folder-map.md`](../appendix/phase-folder-map.md)  
**Product repo:** see `docs/KIT.md` (upstream path names) or vendor a copy of the map.

## How to fill it

1. Follow [`../FIRST_WEEK.md`](../FIRST_WEEK.md).
2. Use upstream `templates/` (indexed in the phase map / `docs/KIT.md`).
3. Put runbooks under `operations/runbooks/` **by symptom**.
4. Keep OpenAPI under `internal/system-design/api-specs/`; derive consumer docs under `user/api-reference/`.
5. Enable the workflow; uncomment Spectral when specs exist.

## Greenfield vs retrofit

**Greenfield:** copy the tree, follow the first-week pack, leave unused folders as structural READMEs.

**Retrofit:** map existing docs into this tree. Move critical families first (architecture, ADRs, runbooks, API, getting started).

## Publishing

Structure first. Kit recipes: [`../recipes/`](../recipes/).

## Related (kit repo only — these links work here)

- [Two audiences](../primer/02-two-audiences.md)
- [Content governance](../primer/14-content-governance.md)
- [CI and quality gates](../primer/16-ci-and-quality-gates.md)
