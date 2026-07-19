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

## Definition of Done (MVP)

- [ ] Getting started tested with someone new to the product
- [ ] Features in the release documented
- [ ] API quickstart works in a clean environment
- [ ] Changelog entry written

Template: [`templates/feature-user-doc.md`](../templates/feature-user-doc.md)

## Mistakes

- Publishing engineer-centric prose unchanged
- Raw OpenAPI dump as "API docs"

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
