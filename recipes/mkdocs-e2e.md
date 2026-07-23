---
title: "Recipe: Scaffold → MkDocs site in 15 minutes"
description: "End-to-end walkthrough: copy the scaffold, wire MkDocs, and see a live site with internal + user + shared docs."
---
# Recipe: Scaffold → MkDocs site in 15 minutes

End-to-end walkthrough: copy the scaffold, wire MkDocs, and see a live site with internal + user + shared docs.

## Time breakdown

| Step | Time |
|------|------|
| Copy scaffold | 2 min |
| Install MkDocs | 3 min |
| Create `mkdocs.yml` | 5 min |
| Write landing page | 3 min |
| Build & verify | 2 min |
| **Total** | **15 min** |

## 1. Copy the scaffold

```bash
# From your project root
cp -r path/to/docs-as-code-primer/scaffold/* .
cp path/to/docs-as-code-primer/scaffold/.github . -r
cp path/to/docs-as-code-primer/scaffold/.markdownlint.json .
cp path/to/docs-as-code-primer/scaffold/.gitignore .
```

If you're using this kit as a template (GitHub "Use this template"), the scaffold is already at the root.

## 2. Install MkDocs with Material theme

```bash
pip install mkdocs-material
# Verify
mkdocs --version
```

## 3. Create `mkdocs.yml`

Place this at your project root:

```yaml
site_name: Project Docs
theme:
  name: material
docs_dir: docs
nav:
  - Home: index.md
  - Internal:
      - Charter: internal/charter/vision.md
      - Architecture: internal/architecture/context-diagram.md
      - Operations: internal/operations/runbooks/
  - User:
      - Getting started: user/getting-started/quickstart.md
      - Features: user/features/
  - Shared:
      - Glossary: shared/glossary.md
markdown_extensions:
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
```

Adjust the nav paths to match your actual files. You can start with a flat nav and add hierarchy later.

## 4. Write a landing page

Create `docs/index.md`:

```markdown
# Project documentation

Welcome to the project documentation.

## For team members

- [Vision & charter](internal/charter/vision.md)
- [Architecture overview](internal/architecture/context-diagram.md)
- [Runbooks](internal/operations/runbooks/)

## For users

- [Getting started](user/getting-started/quickstart.md)
- [API reference](user/api-reference/overview.md)

## Shared

- [Glossary](shared/glossary.md)
```

## 5. Build and verify

```bash
# Live preview
mkdocs serve

# Strict build (catches broken links, bad Mermaid syntax)
mkdocs build --strict
```

Open `http://localhost:8000` — you have a docs site.

## What next

| Timeframe | Action |
|-----------|--------|
| Same day | Add CI: `mkdocs build --strict` in GitHub Actions |
| This week | Fill Phase 0 charter, Phase 1 personas |
| This month | Add runbooks, user feature docs, shared glossary |

## See also

- [MkDocs recipe](/recipes/mkdocs/) (detailed config options)
- [Docusaurus recipe](/recipes/docusaurus/) (alternative SSG)
- [CI and quality gates](/primer/ci-and-quality-gates/)
