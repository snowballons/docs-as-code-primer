---
title: "Phase 3 — Detailed System Design"
description: "| | | |--|--| | **Phase** | 3 | | **Primary path** | `docs/internal/system-design/` |"
---
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

- Module/service specs: responsibility, interface, dependencies, state, concurrency, **error model**, **observability** (metrics/logs/traces)
- Schema + migration strategy (including rollback / zero-downtime policy)
- OpenAPI 3.x as contract (happy path **and** errors, examples)
- Sequence diagrams for multi-component flows
- State machines for lifecycle entities
- Security design detail (threat model summary, encryption, validation)
- Frontend architecture if applicable — use [`templates/frontend-architecture.md`](/templates/frontend-architecture/)

### Migration strategy patterns

Schema changes and data migrations are the most common source of incidents in phased rollouts. Document **three paths** for every migration:

| Pattern | When | Key doc sections |
|---------|------|------------------|
| Expand-contract (aka parallel run) | Backward-compatible schema change | Expand phase (old + new coexist), migrate data, verify, contract phase (drop old), rollback = abort contract |
| Blue-green / feature flags | New index, new table, or new service | Toggle name, health check before cutover, traffic drain window, rollback = toggle off |
| Backfill job | New required field or derived data | Idempotency key, batch size, resume-from-checkpoint on failure, row count verification |

Any migration doc in `docs/internal/system-design/services/` should include:

- **Before and after** state (textual or diagram)
- **Readiness check** — how to know the new state is safe before removing the old
- **Rollback** — exact steps to undo, not "revert the PR"
- **Zero-downtime** — is the migration safe to run while live traffic serves? If not, what downtime window is acceptable?

#### Bad → good (migration doc)

| Bad | Good |
|-----|------|
| "Add the `region` column, backfill with a migration, deploy" | Expand phase: add column as nullable; backfill job processes in batches of 1,000 with checkpoint cursor; contract phase: add NOT NULL and update queries — see `docs/internal/system-design/services/user-export-migration-v2.md` |
| "Rollback: revert the migration" | Rollback: (1) deploy old code, (2) run `ROLLBACK_MIGRATION_V2.sql` which marks new column for drop, (3) wait 1 h for lingering writes, (4) run `DROP_COLUMN_V2.sql` — total < 5 min stale data risk |

### Bad → good (design docs)

| Bad | Good |
|-----|------|
| OpenAPI with 200-only responses | Document 4xx/5xx with schemas and examples |
| “The export service talks to the DB” | Module spec: owns / does not own, deps + failure modes, error model, observability |
| State rules only in code | Explicit state machine: states, transitions, triggers, side effects |

## OpenAPI rule

Canonical specs live in `docs/internal/system-design/api-specs/`. User API docs are **derived**, not a second hand-maintained truth.

## Definition of Done (MVP)

- [ ] Specs for significant modules
- [ ] OpenAPI linted in CI (enable the commented Spectral job in scaffold `docs.yml` once specs exist, or equivalent)
- [ ] Sequences for critical flows
- [ ] Threat model reviewed for sensitive systems

## Check yourself

1. Your OpenAPI spec documents every 200 response but no error codes. What's the risk to the integrator?
2. A sequence diagram shows 4 services and 9 steps for a single export. What's missing if there are no error paths or retries shown?
3. Your team writes "the export job can be pending, processing, completed, or failed" in a code comment. What artifact does the primer recommend instead?

## Use

- Templates: [`templates/module-spec.md`](/templates/module-spec/), [`templates/frontend-architecture.md`](/templates/frontend-architecture/), [`templates/db-schema-migration.md`](/templates/db-schema-migration/), [`templates/sequence-diagram-page.md`](/templates/sequence-diagram-page/), [`templates/state-machine-page.md`](/templates/state-machine-page/), [`templates/security-threat-model.md`](/templates/security-threat-model/)
- Examples: [`export-service.md`](/examples/acme-export-platform/internal/system-design/services/export-service/), [`database/schema.md`](/examples/acme-export-platform/internal/system-design/database/schema/), [`security-design.md`](/examples/acme-export-platform/internal/system-design/security-design/), [`export-api.yaml`](../examples/acme-export-platform/internal/system-design/api-specs/export-api.yaml)
- Recipe: [`recipes/openapi-to-user-api-ref.md`](/recipes/openapi-to-user-api-ref/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
