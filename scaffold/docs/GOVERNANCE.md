# Scaffold documentation governance

How to treat files under `docs/` after you copy this scaffold into your repository.

## File classes

| Class | What it is | What you do |
|-------|------------|-------------|
| **Structural README** | `README.md` in a folder describing purpose, audience, owner, phase | **Keep.** Update owners/paths to match your org. Do not delete unless you remove the whole folder. |
| **Replace-me stub** | Thin starter content (e.g. charter `vision.md`) marked Draft | **Replace** with real content using the mapped template. |
| **Template copy** | Files you create from repo `templates/` | **Add** when the phase starts; do not invent a parallel structure. |
| **Placeholder (`.gitkeep`)** | Keeps empty dirs in Git | **Keep** until the first real file arrives; then delete `.gitkeep`. |
| **Generated / CI artifacts** | e.g. coverage reports | **Publish from CI** or link out; do not hand-maintain forever. |

## Stub policy

1. Folder `README.md` files are **structural**, not examples. They answer “what belongs here?”
2. They are **not** required reading after onboarding — [`../../FIRST_WEEK.md`](../../FIRST_WEEK.md) lists what to fill first.
3. Do **not** pre-fill every folder with fictional product prose in the scaffold. Filled samples live in [`../../examples/acme-export-platform/`](../../examples/acme-export-platform/) so you can copy patterns without deleting Acme from your product repo.
4. If a structural README feels noisy, you may shorten it — but keep purpose + stream + link to the [canonical phase map](../../appendix/phase-folder-map.md).

## Charter stubs

Split files under `internal/charter/` map 1:1 to sections of [`templates/vision-charter.md`](../../templates/vision-charter.md). See the charter table in the [phase → folder map](../../appendix/phase-folder-map.md).

## When you reorganize

1. Update the canonical map in your fork (`appendix/phase-folder-map.md` if you vendored it, or a `docs/META/phase-folder-map.md` you maintain).
2. Update `AGENTS.md` source-of-truth table.
3. Prefer redirects or “moved to” notes over silent deletes for the first release cycle.

## Adding a new doc type

1. Decide stream: internal / user / shared ([content governance](../../primer/14-content-governance.md)).
2. Place under the phase folder from the canonical map.
3. Add or extend a template if the shape will repeat.
4. Link the template from the folder README’s “Next” section.

## Related

- [Canonical phase → folder map](../../appendix/phase-folder-map.md)
- [Scaffold README](../README.DOCS.md)
- [First week pack](../../FIRST_WEEK.md)
