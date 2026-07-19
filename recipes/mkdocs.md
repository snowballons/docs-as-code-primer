# Recipe: MkDocs Material

Publish the scaffold Markdown with MkDocs when you want a simple internal or public site.

## 1. Install

```bash
pip install mkdocs-material
```

## 2. Minimal `mkdocs.yml` (illustrative)

```yaml
site_name: Project Docs
theme:
  name: material
docs_dir: docs
nav:
  - Home: index.md
  - Internal:
      - Charter: internal/charter/vision.md
  - User:
      - Quickstart: user/getting-started/quickstart.md
  - Glossary: shared/glossary.md
markdown_extensions:
  - pymdownx.superfences:
      custom_fences:
        - name: mermaid
          class: mermaid
          format: !!python/name:pymdownx.superfences.fence_code_format
```

Add a `docs/index.md` landing page that links to internal vs user entry points.

## 3. Build

```bash
mkdocs serve
mkdocs build --strict
```

## Notes

- For true two-site publishing, run two MkDocs configs (internal vs user) or one site with access control at the host layer.
- Keep OpenAPI rendering via a plugin or separate Redoc/Scalar step.
