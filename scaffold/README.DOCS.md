# Using the scaffold

Copy this folder’s contents into your project when you want a Docs-as-Code structure on day one.

**Start here after copy:** [`../FIRST_WEEK.md`](../FIRST_WEEK.md)  
**Canonical paths:** [`../appendix/phase-folder-map.md`](../appendix/phase-folder-map.md)  
**Stub policy:** [`docs/GOVERNANCE.md`](docs/GOVERNANCE.md)

## What to copy

From `scaffold/`, copy into your repository root (or adjust paths to match your monorepo):

```text
docs/                    → your repo docs/
.github/workflows/docs.yml
.github/PULL_REQUEST_TEMPLATE.md   (merge with yours if you already have one)
AGENTS.md
.markdownlint.json
llms.txt.example         → rename/adapt to llms.txt when ready
```

You do **not** need a static site generator to start. The scaffold is plain Markdown.

Default CI: Markdown lint + link check. Optional Spectral / Mermaid jobs are commented in `docs.yml` — enable when ready ([primer: CI](../primer/16-ci-and-quality-gates.md)).

## Directory model

```text
docs/
├── GOVERNANCE.md ← stub policy (how to treat READMEs vs replace-me files)
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

**Do not maintain a second map here.** Use [`../appendix/phase-folder-map.md`](../appendix/phase-folder-map.md).

## How to fill it

1. Follow [`../FIRST_WEEK.md`](../FIRST_WEEK.md) for the minimum file set.
2. Use templates from [`../templates/`](../templates/) (indexed in the phase map).
3. Put runbooks under `operations/runbooks/` **by symptom** (e.g. `high-error-rate.md`).
4. Keep OpenAPI under `internal/system-design/api-specs/`; derive consumer docs under `user/api-reference/`.
5. Enable the workflow; uncomment Spectral when specs exist.

## Greenfield vs retrofit

**Greenfield:** copy the tree, follow the first-week pack, leave unused folders as structural READMEs.

**Retrofit:** do not boil the ocean. Map existing docs into this tree. Move the top critical families first (architecture, ADRs, runbooks, API, getting started).

## Publishing

Structure first. When you are ready to publish, see [`../recipes/`](../recipes/).

## Related primer chapters

- [Two audiences](../primer/02-two-audiences.md)
- [Content governance](../primer/14-content-governance.md)
- [CI and quality gates](../primer/16-ci-and-quality-gates.md)
- [Agent-ready docs](../primer/17-agent-ready-docs.md)
