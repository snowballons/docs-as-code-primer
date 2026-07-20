# Scaffold documentation governance

How to treat files under `docs/` after you copy this scaffold into your repository.

## File classes

| Class | What it is | What you do |
|-------|------------|-------------|
| **Structural README** | `README.md` in a folder describing purpose, audience, owner, phase | **Keep.** Update owners/paths to match your org. Do not delete unless you remove the whole folder. |
| **Replace-me stub** | Thin starter content (e.g. charter `vision.md`) marked Draft | **Replace** with real content using the mapped upstream template (see [`KIT.md`](KIT.md)). |
| **Example stub** | `example-*.md` with placeholder fields (e.g. `example-runbook.md`) | **Replace or delete** when your own content goes in that folder. |
| **Template copy** | Files you create from the upstream `templates/` kit | **Add** when the phase starts; do not invent a parallel structure. |
| **Placeholder (`.gitkeep`)** | Keeps empty dirs in Git | **Keep** until the first real file arrives; then delete `.gitkeep`. |
| **Generated / CI artifacts** | e.g. coverage reports | **Publish from CI** or link out; do not hand-maintain forever. |

## Reference policy

Copied `docs/` files must only use **in-repo** relative links (paths that exist in *this* product repository).

Teaching chapters, templates, examples, and the first-week pack live in the **upstream Docs-as-Code Primer** kit. They are listed in [`KIT.md`](KIT.md) — not linked via `../primer/...` (those paths break after copy).

## Stub policy

1. Folder `README.md` files are **structural**, not product examples. They answer “what belongs here?”
2. They are **not** required reading after onboarding — follow the upstream `FIRST_WEEK.md` (see [`KIT.md`](KIT.md)).
3. Do **not** pre-fill every folder with fictional product prose in the scaffold. Filled samples live upstream under `examples/acme-export-platform/`.
4. Select folders include **example stubs** (`example-*.md`) — thin placeholder files with fields you fill in. These are a starting point, not real content. Replace or delete them when you add your own files.
5. If a structural README feels noisy, you may shorten it — but keep purpose + stream + a pointer to [`KIT.md`](KIT.md) / this file.

## Charter stubs

Split files under `internal/charter/` map 1:1 to sections of upstream `templates/vision-charter.md`. Mapping table: upstream `appendix/phase-folder-map.md` (see [`KIT.md`](KIT.md)).

| Stub file | Upstream template section |
|-----------|---------------------------|
| `vision.md` | Vision statement + KPIs |
| `scope.md` | Scope |
| `stakeholders.md` | Stakeholders & RACI |
| `constraints-assumptions.md` | Constraints + Assumptions |
| `risk-register.md` | Initial risk register |

## When you reorganize

1. Keep an in-repo note of your phase → folder map (optional: vendor `appendix/phase-folder-map.md` into this repo).
2. Update `AGENTS.md` (repo root) source-of-truth table.
3. Prefer redirects or “moved to” notes over silent deletes for the first release cycle.

## Adding a new doc type

1. Decide stream: internal / user / shared (upstream `primer/14-content-governance.md` — see [`KIT.md`](KIT.md)).
2. Place under the phase folder from the canonical map.
3. Add or extend a template if the shape will repeat.
4. Link in-repo resources from the folder README; list upstream template names via [`KIT.md`](KIT.md).

## Related in-repo

- [`KIT.md`](KIT.md) — upstream reference policy and path index
- [`README.md`](README.md) — docs root
- [`internal/`](internal/) · [`user/`](user/) · [`shared/`](shared/)
