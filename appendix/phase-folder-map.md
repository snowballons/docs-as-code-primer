# Phase → folder map (canonical)

> **This is the canonical map.** Other docs should link here instead of redefining paths.
> Adopters: after copying the scaffold, this map still applies under your repo’s `docs/`.

## Streams

| Path | Stream | Audience |
|------|--------|----------|
| `docs/internal/` | Internal | Builders and operators |
| `docs/user/` | User-facing | Customers, end users, API consumers |
| `docs/shared/` | Shared | Both (single source of truth for reused facts) |

## Phases

| Phase | Name | Primary location | Stream |
|-------|------|------------------|--------|
| 0 | Project Vision & Charter | `docs/internal/charter/` | Internal |
| 1 | User & Business Requirements | `docs/internal/requirements/` | Internal |
| 2 | Architecture & System Design | `docs/internal/architecture/` | Internal |
| 2 | Architecture Decision Records | `docs/internal/decisions/` | Internal |
| 3 | Detailed System Design | `docs/internal/system-design/` | Internal |
| 3 | OpenAPI (canonical) | `docs/internal/system-design/api-specs/` | Internal |
| 4 | Implementation documentation | `docs/internal/development/` | Internal |
| 5 | Testing & QA | `docs/internal/testing/` | Internal |
| 6 | Deployment & Operations | `docs/internal/operations/` | Internal |
| 6 | Runbooks | `docs/internal/operations/runbooks/` | Internal |
| 7 | Getting started / features / tutorials | `docs/user/getting-started/`, `features/`, `tutorials/` | User |
| 7 | Consumer API reference | `docs/user/api-reference/` | User |
| 7 | Troubleshooting | `docs/user/troubleshooting/` | User |
| 8 | User changelog / migrations / deprecations | `docs/user/changelog/` | User |
| 8 | Retrospectives / lessons learned | `docs/internal/retrospectives/` | Internal |
| 8 | ADR updates | `docs/internal/decisions/` (new ADR supersedes old) | Internal |
| 9 | Retirement plan | `docs/internal/charter/` (e.g. `retirement.md`) | Internal |
| 9 | User data migration / export guide | `docs/user/` | User |
| Ongoing | Glossary | `docs/shared/glossary.md` | Shared |
| Ongoing | Shared diagrams / API concepts | `docs/shared/diagrams/`, `docs/shared/api-concepts/` | Shared |

## Charter file mapping (Phase 0)

Scaffold splits the charter into files. Map from [`templates/vision-charter.md`](../templates/vision-charter.md):

| Template section | Scaffold file |
|------------------|---------------|
| Vision statement + KPIs | `docs/internal/charter/vision.md` |
| Scope (in / out) | `docs/internal/charter/scope.md` |
| Stakeholders & RACI | `docs/internal/charter/stakeholders.md` |
| Constraints + Assumptions | `docs/internal/charter/constraints-assumptions.md` |
| Initial risk register | `docs/internal/charter/risk-register.md` |

You may keep one combined charter file instead; if you do, replace the split stubs and update this map in your fork.

## Template index (by phase)

| Phase | Template |
|-------|----------|
| 0 | [`templates/vision-charter.md`](../templates/vision-charter.md) |
| 1 | [`templates/user-story.md`](../templates/user-story.md), [`templates/nfr.md`](../templates/nfr.md), [`templates/persona.md`](../templates/persona.md) |
| 2 | [`templates/adr.md`](../templates/adr.md) |
| 3 | [`templates/module-spec.md`](../templates/module-spec.md), [`templates/frontend-architecture.md`](../templates/frontend-architecture.md) |
| 4 | [`templates/contribution-guide.md`](../templates/contribution-guide.md) |
| 5 | [`templates/test-strategy.md`](../templates/test-strategy.md) |
| 6 | [`templates/runbook.md`](../templates/runbook.md), [`templates/slo.md`](../templates/slo.md), [`templates/on-call-handbook.md`](../templates/on-call-handbook.md) |
| 7 | [`templates/feature-user-doc.md`](../templates/feature-user-doc.md), [`templates/getting-started.md`](../templates/getting-started.md), [`templates/tutorial.md`](../templates/tutorial.md), [`templates/troubleshooting.md`](../templates/troubleshooting.md) |
| 8 | [`templates/deprecation-notice.md`](../templates/deprecation-notice.md), [`templates/migration-guide.md`](../templates/migration-guide.md), [`templates/incident-retrospective.md`](../templates/incident-retrospective.md) |

## Related

- [First week pack](../FIRST_WEEK.md) — what to fill first
- [Scaffold usage](../scaffold/README.DOCS.md) — kit-repo copy instructions
- [Stub policy](../scaffold/docs/GOVERNANCE.md) — copied with scaffold
- [Upstream index for product repos](../scaffold/docs/KIT.md) — post-copy safe path names
