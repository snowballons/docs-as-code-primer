---
title: "Recipe: Dual publish — internal + user site"
description: "Publish internal docs to a private site and user docs to a public site from the same repository."
---
# Recipe: Dual publish — internal + user site

Publish internal docs to a private site and user docs to a public site from the same repository.

## When to split

One site is the right default. Split when:

1. **Review cadence diverges** — internal changes need quick merges; user changes need editorial review
2. **Access requirements differ** — internal must be private; user must be public
3. **Team ownership splits** — engineering owns internal; a writer/PM owns user

## Approach: two MkDocs configs

### Directory structure

```text
docs/
├── internal/        ← internal-only content
├── user/            ← user-facing content
└── shared/          ← included by both (glossary, safe diagrams)
mkdocs.internal.yml ← builds internal site
mkdocs.user.yml     ← builds user site
```

### mkdocs.internal.yml

```yaml
site_name: Project Docs (Internal)
theme:
  name: material
docs_dir: docs
nav:
  - Home: index.md
  - Internal:
      - Charter: internal/charter/vision.md
      - Architecture: internal/architecture/context-diagram.md
      - Operations: internal/operations/runbooks/
  - Shared:
      - Glossary: shared/glossary.md
markdown_extensions:
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
```

### mkdocs.user.yml

```yaml
site_name: Product Docs
theme:
  name: material
docs_dir: docs
nav:
  - Home: index.md
  - User:
      - Getting started: user/getting-started/quickstart.md
      - Features: user/features/scheduled-exports.md
      - API reference: user/api-reference/overview.md
  - Shared:
      - Glossary: shared/glossary.md
markdown_extensions:
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
```

### Build commands

```bash
# Internal site
mkdocs build --strict -f mkdocs.internal.yml -d site-internal

# User site
mkdocs build --strict -f mkdocs.user.yml -d site-user
```

## CI: two workflows

Create two workflow files:

**`.github/workflows/internal-docs.yml`** — triggers on `docs/internal/**` and `docs/shared/**`:

```yaml
name: Internal Docs
on:
  push:
    branches: [main]
    paths:
      - 'docs/internal/**'
      - 'docs/shared/**'
      - 'mkdocs.internal.yml'
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.x'
      - run: pip install mkdocs-material
      - run: mkdocs build --strict -f mkdocs.internal.yml -d site-internal
      - uses: peaceiris/actions-gh-pages@v3
        with:
          deploy_key: ${{ secrets.INTERNAL_DEPLOY_KEY }}
          publish_dir: ./site-internal
          external_repository: your-org/internal-docs
```

**`.github/workflows/user-docs.yml`** — triggers on `docs/user/**` and `docs/shared/**`:

Same pattern but deploys to a public repository or Cloudflare Pages.

## URL pattern

```text
Internal: docs-internal.example.com   (private, SSO-protected)
User:     docs.example.com            (public)
```

## Git branch variant

If you prefer one workflow with branch-based routing:

```yaml
name: Docs
on:
  push:
    branches: [main, docs-internal, docs-user]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install mkdocs-material
      - run: |
          if [ "${{ github.ref_name }}" = "docs-user" ]; then
            mkdocs build --strict -f mkdocs.user.yml -d site
          else
            mkdocs build --strict -f mkdocs.internal.yml -d site
          fi
```

## Related

- [MkDocs end-to-end recipe](/recipes/mkdocs-e2e/)
- [CI and quality gates](/primer/ci-and-quality-gates/)
- [Content governance](/primer/content-governance/)
