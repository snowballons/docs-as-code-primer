# Documentation kit references

This `docs/` tree follows the **Docs-as-Code Primer** structure (`internal/` · `user/` · `shared/`).

## Reference policy (read this once)

| Kind | Where it lives | How to link |
|------|----------------|-------------|
| **In-repo** | Paths under *this* project's `docs/` | Normal relative Markdown links (must resolve after copy) |
| **Upstream kit** | The Docs-as-Code Primer repository (teaching chapters, templates, examples, first-week pack) | **Do not** use `../primer/...` style links from copied files — they break after copy. Point here, or use the upstream URL below. |

After you copy the scaffold into your product repo, only **in-repo** links are expected to work in GitHub.

## Upstream kit location

Set this to your clone or the public GitHub URL when you publish:

```text
KIT_URL=https://github.com/EXAMPLE/docs-as-code-primer
```

Until you set a real URL, treat upstream paths as files inside that repository.

## Upstream map (names only)

| Need | Upstream path |
|------|-----------------|
| First week pack | `FIRST_WEEK.md` |
| Learning path | `LEARNING_PATH.md` |
| Canonical phase → folder → template map | `appendix/phase-folder-map.md` |
| Stub / folder policy (same as in-repo) | `scaffold/docs/GOVERNANCE.md` → copied to `docs/GOVERNANCE.md` |
| Templates | `templates/` |
| Worked example | `examples/acme-export-platform/` |
| Publish recipes | `recipes/` |

### Primer chapters by phase

| Phase | Upstream chapter |
|-------|------------------|
| Concepts | `primer/01-what-is-docs-as-code.md`, `primer/02-two-audiences.md`, `primer/03-phases-overview.md` |
| 0 | `primer/04-phase-0-charter.md` |
| 1 | `primer/05-phase-1-requirements.md` |
| 2 | `primer/06-phase-2-architecture.md` |
| 3 | `primer/07-phase-3-detailed-design.md` |
| 4 | `primer/08-phase-4-implementation.md` |
| 5 | `primer/09-phase-5-testing.md` |
| 6 | `primer/10-phase-6-operations.md` |
| 7 | `primer/11-phase-7-user-docs.md` |
| 8 | `primer/12-phase-8-maintenance.md` |
| 9 | `primer/13-phase-9-retirement.md` |
| Governance | `primer/14-content-governance.md` |
| Diagrams | `primer/15-diagrams-as-code.md` |
| CI | `primer/16-ci-and-quality-gates.md` |
| Agents | `primer/17-agent-ready-docs.md` |
| Anti-patterns | `primer/18-anti-patterns.md` |

### Templates by phase

| Phase | Upstream template |
|-------|-------------------|
| 0 | `templates/vision-charter.md` |
| 1 | `templates/user-story.md`, `templates/nfr.md` |
| 2 | `templates/adr.md` |
| 3 | `templates/module-spec.md` |
| 6 | `templates/runbook.md` |
| 7 | `templates/feature-user-doc.md` |
| 8 | `templates/deprecation-notice.md` |

## Optional: vendor upstream into this repo

If you want clickable paths without leaving the product repo, copy any of `templates/`, `appendix/phase-folder-map.md`, or `FIRST_WEEK.md` into this repository and document where you put them. Update links only after those files exist here.

## Related in-repo

- Stub policy: [`GOVERNANCE.md`](GOVERNANCE.md)
- Streams: [`internal/`](internal/), [`user/`](user/), [`shared/`](shared/)
