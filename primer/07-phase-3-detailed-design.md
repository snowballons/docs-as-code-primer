# Phase 3 — Detailed System Design

| | |
|--|--|
| **Phase** | 3 |
| **Primary path** | `docs/internal/system-design/` |

## Purpose

Bridge architecture and code: enough detail that another engineer can implement or review correctly — without dictating syntax.

## Ownership

Senior module owners; peer review; runs **in parallel** with early implementation.

## Write

- Module/service specs (responsibility, interface, deps, state, errors)
- Schema + migration strategy (including rollback / zero-downtime policy)
- OpenAPI 3.x as contract (happy path **and** errors, examples)
- Sequence diagrams for multi-component flows
- State machines for lifecycle entities
- Security design detail (threat model summary, encryption, validation)
- Frontend architecture if applicable

## OpenAPI rule

Canonical specs live in `docs/internal/system-design/api-specs/`. User API docs are **derived**, not a second hand-maintained truth.

## Definition of Done (MVP)

- [ ] Specs for significant modules
- [ ] OpenAPI linted in CI (Spectral or equivalent)
- [ ] Sequences for critical flows
- [ ] Threat model reviewed for sensitive systems

Template: [`templates/module-spec.md`](../templates/module-spec.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
