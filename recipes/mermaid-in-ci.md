---
title: "Recipe: Mermaid in CI"
description: "Keep diagrams as text; fail the build if they cannot render (optional hardening)."
---

# Recipe: Mermaid in CI

Keep diagrams as text; fail the build if they cannot render (optional hardening).

## Minimal approach (recommended for MVP)

Rely on your docs site generator to render Mermaid at build time (`mkdocs build --strict`, Docusaurus build). If the site build fails on bad fences, that is enough.

## Optional: mermaid-cli pre-render

```bash
npm i -D @mermaid-js/mermaid-cli
```

```bash
# example: render all .mmd files to SVG
find docs -name '*.mmd' -print0 | xargs -0 -I{} mmdc -i {} -o {}.svg
```

Commit SVGs only if you must support hosts that cannot render Mermaid. Prefer live render when possible so diffs stay textual.

## PR habit

Change architecture? Update the Mermaid source in the **same PR**.
