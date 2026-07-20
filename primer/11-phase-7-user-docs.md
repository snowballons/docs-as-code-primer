# Phase 7 — User & End-User Documentation

| | |
|--|--|
| **Phase** | 7 |
| **Primary path** | `docs/user/` |

## Purpose

Help people outside engineering succeed with the product. For many users, docs *are* the product.

## Ownership

Technical writer or PM with eng support; non-technical clarity review recommended.

## Write

- Getting started: minimum path to first value
- Feature docs from **user goals**
- Tutorials for real scenarios
- Consumer API reference (curated from OpenAPI; auth, examples, errors as concepts)
- Troubleshooting seeded from support/QA
- User-facing changelog

### Bad → good (API docs)

| Bad | Good |
|-----|------|
| Paste raw OpenAPI / Swagger UI only | Overview + auth + mental model + examples; generate endpoint reference from the same OpenAPI |
| “POST /v1/exports accepts from/to” | “Create an export job, poll until completed, then download” with a sequence diagram |

## Definition of Done (MVP)

- [ ] Getting started tested with someone new to the product
- [ ] Features in the release documented
- [ ] API quickstart works in a clean environment
- [ ] Changelog entry written

## Use

- Templates: [`templates/getting-started.md`](../templates/getting-started.md), [`templates/feature-user-doc.md`](../templates/feature-user-doc.md), [`templates/tutorial.md`](../templates/tutorial.md), [`templates/troubleshooting.md`](../templates/troubleshooting.md)
- Examples: [`quickstart.md`](../examples/acme-export-platform/user/getting-started/quickstart.md), [`overview.md`](../examples/acme-export-platform/user/api-reference/overview.md)
- Recipe: [`recipes/openapi-to-user-api-ref.md`](../recipes/openapi-to-user-api-ref.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
