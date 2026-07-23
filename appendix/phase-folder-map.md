---
title: "Phase → folder map (canonical)"
description: "> **This is the canonical map.** Other docs should link here instead of redefining paths. > Adopters: after copying the scaffold, this map still applies under your repo’s `docs/`."
---
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

Scaffold splits the charter into files. Map from [`templates/vision-charter.md`](/templates/vision-charter/):

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
| 0 | [`templates/vision-charter.md`](/templates/vision-charter/) |
| 1 | [`templates/user-story.md`](/templates/user-story/), [`templates/nfr.md`](/templates/nfr/), [`templates/persona.md`](/templates/persona/), [`templates/user-journey.md`](/templates/user-journey/), [`templates/functional-requirements.md`](/templates/functional-requirements/) |
| 2 | [`templates/adr.md`](/templates/adr/), [`templates/c4-architecture-outline.md`](/templates/c4-architecture-outline/), [`templates/cross-cutting-concerns-checklist.md`](/templates/cross-cutting-concerns-checklist/) |
| 3 | [`templates/module-spec.md`](/templates/module-spec/), [`templates/frontend-architecture.md`](/templates/frontend-architecture/), [`templates/db-schema-migration.md`](/templates/db-schema-migration/), [`templates/sequence-diagram-page.md`](/templates/sequence-diagram-page/), [`templates/state-machine-page.md`](/templates/state-machine-page/), [`templates/security-threat-model.md`](/templates/security-threat-model/) |
| 4 | [`templates/contribution-guide.md`](/templates/contribution-guide/) |
| 5 | [`templates/test-strategy.md`](/templates/test-strategy/), [`templates/test-case.md`](/templates/test-case/) |
| 6 | [`templates/runbook.md`](/templates/runbook/), [`templates/slo.md`](/templates/slo/), [`templates/on-call-handbook.md`](/templates/on-call-handbook/), [`templates/dr-plan.md`](/templates/dr-plan/) |
| 7 | [`templates/feature-user-doc.md`](/templates/feature-user-doc/), [`templates/getting-started.md`](/templates/getting-started/), [`templates/tutorial.md`](/templates/tutorial/), [`templates/troubleshooting.md`](/templates/troubleshooting/) |
| 8 | [`templates/deprecation-notice.md`](/templates/deprecation-notice/), [`templates/migration-guide.md`](/templates/migration-guide/), [`templates/incident-retrospective.md`](/templates/incident-retrospective/), [`templates/user-changelog.md`](/templates/user-changelog/), [`templates/internal-changelog.md`](/templates/internal-changelog/) |
| 9 | [`templates/retirement-kt.md`](/templates/retirement-kt/), [`templates/knowledge-transfer.md`](/templates/knowledge-transfer/), [`templates/archival-policy.md`](/templates/archival-policy/) |

## Related

- [First week pack](/FIRST_WEEK/) — what to fill first
- [Scaffold usage](../scaffold/README.DOCS.md) — kit-repo copy instructions
- [Stub policy](../scaffold/docs/GOVERNANCE.md) — copied with scaffold
- [Upstream index for product repos](../scaffold/docs/KIT.md) — post-copy safe path names
