# Docs-as-Code Primer

**Structure, phases, and templates for documentation that ships with your code.**

Internal docs for engineers. User docs for customers. Shared truth in between.  
Copy the kit. Follow the phases. Keep docs in the PR.

This is a **primer + project structure kit** — not an awesome list, not a hosted docs platform, not a full engineering handbook. It is a portable operating system for documentation.

---

## Start here (pick one)

| Path | Who it's for | Go to |
|------|----------------|-------|
| **Use the scaffold** | New or existing repo; you want structure today | [`scaffold/README.DOCS.md`](scaffold/README.DOCS.md) |
| **Read the primer** | You want judgment before (or while) adopting | [`LEARNING_PATH.md`](LEARNING_PATH.md) |
| **See the example** | You want filled samples for one fictional product | [`examples/acme-export-platform/`](examples/acme-export-platform/) |

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

## Phase map (quick view)

| Phase | Name | Primary stream |
|-------|------|----------------|
| 0 | Project Vision & Charter | Internal |
| 1 | User & Business Requirements | Internal |
| 2 | Architecture & System Design | Internal |
| 3 | Detailed System Design | Internal |
| 4 | Implementation & Code Documentation | Internal |
| 5 | Testing & Quality Assurance | Internal |
| 6 | Deployment & Operations | Internal |
| 7 | User & End-User Documentation | User-facing |
| 8 | Maintenance & Evolution | Both |
| 9 | Retirement & Archival | Both |

Phases overlap. Phase 8 never ends. Use them as a mental model, not a bureaucracy.

---

## Repo layout

```text
docs-as-code-primer/
├── README.md                 ← you are here
├── LEARNING_PATH.md          ← ordered path through the primer
├── CONTRIBUTING.md
├── LICENSE
├── primer/                   ← teaching layer
├── scaffold/                 ← copy into your project
├── templates/                ← fill-in-the-blank artifacts
├── examples/                 ← one worked product
├── recipes/                  ← how to publish / wire tools
└── appendix/                 ← glossary, tooling map
```

---

## What this is not

- An awesome list of every documentation tool
- A replacement for Confluence/CCMS in regulated enterprise publishing
- A SaaS or static site generator
- A general “how to run your company” handbook

---

## License

MIT — see [LICENSE](LICENSE).
