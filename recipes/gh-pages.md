---
title: "Recipe: Deploy to GitHub Pages"
description: "Publish your MkDocs or Docusaurus site via GitHub Pages."
---

# Recipe: Deploy to GitHub Pages

Publish your MkDocs or Docusaurus site via GitHub Pages.

## Prerequisites

- GitHub repository with docs scaffold
- CI workflow (this recipe extends it)

## MkDocs → GitHub Pages

Add a deploy step to your existing docs workflow:

```yaml
name: Docs
on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'mkdocs.yml'
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: '3.x'
      - run: pip install mkdocs-material
      - run: mkdocs build --strict
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./site
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Docusaurus → GitHub Pages

```yaml
name: Docs
on:
  push:
    branches: [main]
    paths:
      - 'docs/**'
      - 'docusaurus.config.js'
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    defaults:
      run:
        working-directory: site  # adjust if Docusaurus in subdir
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./site/build
      - id: deployment
        uses: actions/deploy-pages@v4
```

## Custom domain

1. Add a `CNAME` file to your `docs/` or `static/` folder with your domain (e.g., `docs.example.com`)
2. Configure the DNS record at your registrar
3. Set the domain in your repository Settings → Pages

## Internal vs public

For a single public site, use the workflow above.

For dual publish (internal private + user public):

- User site → GitHub Pages on the main repository (public)
- Internal site → deploy to a private repository's Pages or use Cloudflare Pages with access policy

See [dual publish recipe](/recipes/dual-publish/).

## See also

- [Dual publish recipe](/recipes/dual-publish/)
- [MkDocs end-to-end recipe](/recipes/mkdocs-e2e/)
