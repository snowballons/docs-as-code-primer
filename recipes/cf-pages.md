---
title: "Recipe: Deploy to Cloudflare Pages"
description: "Publish your MkDocs or Docusaurus site via Cloudflare Pages, with optional access policy for internal docs."
---

# Recipe: Deploy to Cloudflare Pages

Publish your MkDocs or Docusaurus site via Cloudflare Pages, with optional access policy for internal docs.

## Prerequisites

- Cloudflare account
- GitHub repository connected to Cloudflare Pages
- docs scaffold in the repository

## Setup (Cloudflare dashboard)

1. Go to Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git
2. Select your repository
3. Configure build settings:

### MkDocs

| Setting | Value |
|---------|-------|
| Build command | `pip install mkdocs-material && mkdocs build --strict` |
| Build output directory | `site` |

### Docusaurus

| Setting | Value |
|---------|-------|
| Build command | `npm ci && npm run build` |
| Build output directory | `build` |
| Root directory (advanced) | `site` if Docusaurus in subdirectory |

4. Deploy

## Access policy (internal docs)

For private internal docs, add an access policy:

1. Cloudflare Dashboard → Pages → your site → Settings → Access Policy
2. Add policy → "Allow members of your Cloudflare Zero Trust organization"
3. Deploy internal docs to `docs-internal.example.com` with access policy
4. Deploy user docs to `docs.example.com` with no access policy

## Dual publish with Cloudflare

For a single repository publishing both internal and user sites:

### Option A: Two Cloudflare Pages projects

One project per site, with different build triggers (path filters). See [dual publish recipe](/recipes/dual-publish/) for the CI approach.

### Option B: One project with branch-based routing

```text
Internal: internal-docs.example.com  → branch: main    → build for internal
User:     docs.example.com           → branch: user    → build for user
```

Set branch build controls in Project Settings → Builds.

## Preview deployments

Cloudflare Pages builds a preview URL for every PR branch. Configure:

```text
Preview: https://<hash>.<project>.pages.dev
```

Useful for reviewing doc changes before merging.

## Related

- [GitHub Pages recipe](/recipes/gh-pages/)
- [Dual publish recipe](/recipes/dual-publish/)
- [MkDocs end-to-end recipe](/recipes/mkdocs-e2e/)
