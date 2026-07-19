# Tooling map

Opinionated starting map — not an awesome list. Prefer structure and habits over tool churn.

| Need | Starter choices |
|------|-----------------|
| Writing format | Markdown / MDX |
| Diagrams | Mermaid (default); draw.io for polished one-offs |
| Internal site | MkDocs Material or Docusaurus |
| Public site | Docusaurus, MkDocs, or hosted Git-sync (Mintlify/GitBook) |
| API reference render | Redoc, Scalar, or vendor API docs from OpenAPI |
| OpenAPI lint | Spectral |
| Markdown lint | markdownlint |
| Link check | lychee |
| Prose lint | Vale (optional; separate internal vs user styles) |
| Review / versioning | Git + GitHub/GitLab PRs |
| CI | GitHub Actions (scaffold includes a starter) |

## Selection hints

- **Small eng-heavy team:** MkDocs or Docusaurus + this scaffold
- **Writers + eng:** hosted Git-sync with writers' editor UX, still keep `internal/user/shared`
- **API product:** OpenAPI SSoT + curated user reference is mandatory

See recipes under [`../recipes/`](../recipes/).
