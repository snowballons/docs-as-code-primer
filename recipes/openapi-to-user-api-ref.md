---
title: "Recipe: OpenAPI → user API reference"
---
# Recipe: OpenAPI → user API reference

## Rule

Canonical spec lives in:

`docs/internal/system-design/api-specs/*.yaml`

User reference lives in:

`docs/user/api-reference/`

## Pipeline sketch

1. Lint internal specs with Spectral in CI.
2. Generate or update consumer pages (Redoc, Scalar, Speakeasy/Fern, or custom MDX).
3. Add hand-written overview: auth, pagination, errors, quickstart — see the Acme example.
4. Strip internal-only operations and `x-internal` annotations from the public artifact.

## Do not

Maintain a second handwritten list of endpoints that can drift from the YAML.
