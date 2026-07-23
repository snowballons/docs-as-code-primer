---
title: "Docs-as-Code Primer"
description: "**Structure, phases, and templates for documentation that ships with your code.**"
---

# Docs-as-Code Primer

**Structure, phases, and templates for documentation that ships with your code.**

Internal docs for engineers. User docs for customers. Shared truth in between.  
Copy the kit. Follow the phases. Keep docs in the PR.

This is a **primer + project structure kit** — not an awesome list, not a hosted docs platform, not a full engineering handbook. It is a portable operating system for documentation.

---

## Start here (pick one)

| Path | Who it's for | Go to |
|------|----------------|-------|
| **First week pack** | Copy scaffold, fill the minimum set fast | [`FIRST_WEEK.md`](/FIRST_WEEK/) |
| **Use the scaffold** | Structure, stub policy, CI | [`scaffold/README.DOCS.md`](scaffold/README.DOCS.md) |
| **Read the primer** | Judgment before (or while) adopting | [`LEARNING_PATH.md`](/LEARNING_PATH/) |
| **See the example** | Filled samples (Acme Export Platform) | [`examples/acme-export-platform/`](examples/acme-export-platform/) |

**Canonical phase → folder map:** [`appendix/phase-folder-map.md`](/appendix/phase-folder-map/)  
**After copy into a product repo:** set `KIT_URL` in `docs/KIT.md` (ships with the scaffold).

```text
                    ┌─────────────────────────┐
                    │   Docs-as-Code Primer   │
                    │   (judgment + phases)   │
                    └───────────┬─────────────┘
                                │ informs
                                ▼
┌──────────────┐      ┌─────────────────────┐      ┌──────────────┐
│  Templates   │ ───► │  Project scaffold   │ ◄─── │   Recipes    │
│  (shape)     │      │  internal/user/shared│      │  (publish)   │
└──────────────┘      └──────────┬──────────┘      └──────────────┘
                                 │ copy into
                                 ▼
                      ┌─────────────────────┐
                      │   Your real repo    │
                      └─────────────────────┘
```

---

## What you get

1. **Primer** — what to write, when, for whom, and how to keep it alive (Phases 0–9 + two-audience rules).
2. **Scaffold** — a copy-paste `docs/` tree: `internal/`, `user/`, `shared/`, plus starter CI and `AGENTS.md`.
3. **Templates** — ADR, runbook, charter, module spec, deprecation notice, and more.
4. **Example** — Acme Export Platform with filled samples.
5. **Recipes** — wire MkDocs, Docusaurus, or Mintlify later; structure first, site generator second.

---

## Non-negotiable rules

1. **Docs are code** — Git, pull requests, CI checks, versioned with the product.
2. **Two audiences, one repo** — `/docs/internal`, `/docs/user`, `/docs/shared`.
3. **Never leak internal content** into user docs without deliberate curation.
4. **Never maintain the same fact in two places** without a reuse mechanism.
5. **Definition of Done includes docs** — update docs in the same change when behavior changes.
6. **Diagrams as code by default** — Mermaid for living engineering diagrams.

---

## Phase map

Phases overlap. Phase 8 never ends. Use them as a mental model, not a bureaucracy.

Full phase → folder → template index: **[`appendix/phase-folder-map.md`](/appendix/phase-folder-map/)**.

---

## Repo layout

```text
docs-as-code-primer/
├── README.md                 ← you are here
├── FIRST_WEEK.md             ← adoption path after copy
├── LEARNING_PATH.md          ← ordered path through the primer
├── CONTRIBUTING.md
├── LICENSE
├── primer/                   ← teaching layer
├── scaffold/                 ← copy into your project
├── templates/                ← fill-in-the-blank artifacts
├── examples/                 ← one worked product
├── recipes/                  ← how to publish / wire tools
└── appendix/                 ← glossary, tooling map, phase→folder map
```

Scaffold tree view (copied into your project):

```text
docs/                         ← copy scaffold/docs/ into your repo
├── internal/                 ← engineers, ops, compliance
│   ├── charter/              ← vision, scope, stakeholders, risks
│   ├── requirements/         ← user stories, functional, NFRs
│   ├── architecture/         ← context, container, C4 diagrams
│   ├── decisions/            ← ADRs (append-only)
│   ├── system-design/        ← services, APIs, DB schemas, security
│   ├── development/          ← how to build, test, deploy
│   └── operations/           ← runbooks, SLOs, monitoring, DR
├── user/                     ← customers, support
│   ├── getting-started/      ← quickstart, tutorial
│   ├── guides/               ← how-to, feature docs
│   └── api-reference/        ← generated or curated API docs
└── shared/                   ← both audiences
    ├── glossary.md           ← single source of term definitions
    └── diagrams/             ← reusable Mermaid files
```

---

## What this is not

- An awesome list of every documentation tool
- A replacement for Confluence/CCMS in regulated enterprise publishing
- A SaaS or static site generator
- A general “how to run your company” handbook

See [docs/comparison.md](/docs/comparison/) to understand how this primer relates to Write the Docs, Google Tech Writing, Diataxis, C4 Model, adr-tools, and other documentation resources.

## When this kit may hurt

- **No engineers / no Git workflow** — the overhead of PRs and folders will slow you down; use a simpler handbook tool until you have DocOps capacity.
- **One-off disposable prototype** — a single README may be enough; adopt the scaffold when the system will live.
- **Heavy regulated authoring needing CCMS features first** — you can still use Git backends later; do not force this tree alone if your compliance tooling cannot ingest it yet.

---

## License

MIT — see [LICENSE](LICENSE).
