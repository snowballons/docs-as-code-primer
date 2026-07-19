# CI and quality gates

Minimum viable DocOps (included in the scaffold):

1. Markdown lint
2. Link check
3. (Recommended next) OpenAPI lint with Spectral
4. (Recommended next) Spellcheck / Vale with separate internal vs user styles

## Starter workflow

See [`scaffold/.github/workflows/docs.yml`](../scaffold/.github/workflows/docs.yml).

## Path filters

Prefer independent deployability:

- Changes under `docs/internal/**` or `docs/shared/**` → internal site pipeline
- Changes under `docs/user/**` or `docs/shared/**` → user site pipeline

MVP may use one workflow; split when review cadence diverges.

## Quality bar

Broken links and invalid OpenAPI fail the build. Tone/style warnings can start non-blocking, then tighten.
