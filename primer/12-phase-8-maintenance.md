---
title: "Phase 8 — Maintenance & Evolution"
description: "| | | |--|--| | **Phase** | 8 | | **Primary path** | both streams |"
---

# Phase 8 — Maintenance & Evolution

| | |
|--|--|
| **Phase** | 8 |
| **Primary path** | both streams |

## Purpose

Keep docs true as the system changes. Stale docs are liabilities.

## Continuously maintain

| Artifact | Stream |
|----------|--------|
| Technical changelog | Internal |
| User changelog | User |
| Migration guides | User (and ops notes internal) |
| Deprecation notices | User |
| New ADRs superseding old | Internal |
| Lessons learned / incidents | Internal |
| Health reviews | Both |

### Internal changelog pattern

The internal changelog serves **engineers and operators**, not users. Use it to track:

| Category | What to include | Example entry |
|----------|----------------|---------------|
| Architecture/design | ADR decisions, module changes, dependency swaps | "ADR-012: switched export queue from Redis to RabbitMQ — see adr-012-export-queue-rabbitmq.md" |
| Ops/infra | Environment changes, config migrations, deployment changes | "Staging RDS upgraded from PostgreSQL 15 to 16 (2026-03-15); no impact on prod" |
| Deprecations (internal) | Features/modules being removed, with migration path | "Legacy CSV export endpoint `/v1/export-legacy` targeted for removal 2026-Q3 — migrate to `/v2/exports` (see migration-guide-csv-v2.md)" |
| Dependency updates | Major version bumps affecting build or runtime | "Go upgraded from 1.21 to 1.22 (2026-02-01); see go-1.22-migration-notes.md for breaking changes" |
| Test/infra changes | CI pipeline changes, test framework changes | "Integration tests migrated from Dockertest to Testcontainers (2026-01-20)" |

**Publishing cadence:** quarterly, with ad-hoc entries for breaking changes. Each quarter's changelog is a single `.md` file or a dated entry in `CHANGELOG_INTERNAL.md`.

An entry looks like:

> **2026-Q1** (2026-01-01 – 2026-03-31)
>
> - **Architecture:** ADR-012: export queue Redis → RabbitMQ. Consumer code unchanged; rebuild required for new `amqp` package.
> - **Ops:** Prod deploy switched from blue-green to canary (2026-02-10). See deploy-pipeline-canary.md.
> - **Deprecation:** `POST /v1/export-legacy` deprecated; migration window closes 2026-Q3.

### Bad → good (evolution)

| Bad | Good |
|-----|------|
| User changelog = git log | Plain-language what changed for users and whether action is required |
| Remove API with one sprint notice | Deprecation notice + date + replacement + migration guide (policy window) |
| Silently edit an accepted ADR | New ADR supersedes the old one |
| Internal changelog = git log of merged PRs | 4–10 curated entries per quarter: architecture, ops, deprecations, dependency updates, test/infra |

## Cadence (suggested)

- **Per release:** user changelog; API quickstart smoke
- **Monthly:** spot-check getting started + sample feature pages
- **Quarterly:** runbook accuracy / game day
- **Annually:** architecture vs reality audit

## Health review checklists

Copy these into your team's recurring review issue template.

### Monthly (15 min)

- [ ] 3 most-viewed user pages: still accurate? Still the right answer?
- [ ] 1 internal runbook: steps still match current UI / CLI / API?
- [ ] Open PRs with `docs:` label: any stale > 1 sprint?
- [ ] CI docs workflow has not been red this month

### Quarterly (1 h)

- [ ] Getting-started guide run through on clean machine — still works?
- [ ] 3 sample feature pages reviewed for accuracy vs current UI
- [ ] Runbook game day: pick one runbook, execute it verbatim, log gaps
- [ ] User changelog: last 3 releases formatted consistently?
- [ ] Deprecation notices: all active ones still show correct dates?
- [ ] Internal changelog published for the quarter
- [ ] ADR index scanned: any silent supersessions caught?

### Annual (half-day)

- [ ] Architecture audit: context diagram vs actual deployed topology
- [ ] Every ADR in `decisions/` still reflects current stance — supersede where it doesn't
- [ ] All user feature pages: fit for purpose audit (see Phase 7 quality bar)
- [ ] Backup/restore procedures tested from docs
- [ ] Glossary terms reviewed and pruned
- [ ] link-check CI has not accumulated exemptions
- [ ] First Week pack: `FIRST_WEEK.md` guidance still matches team practice

## Check yourself

1. An engineer says "the old API endpoint is deprecated — we removed it last sprint." Users report broken integrations. What was missing?
2. Your team has been silently editing accepted ADRs when decisions change. Why is this worse than writing a new ADR?
3. You haven't run a runbook in 9 months. At what point does the primer consider your ops docs untrustworthy?

## Use

- Templates: [`templates/deprecation-notice.md`](/templates/deprecation-notice/), [`templates/migration-guide.md`](/templates/migration-guide/), [`templates/incident-retrospective.md`](/templates/incident-retrospective/), [`templates/user-changelog.md`](/templates/user-changelog/), [`templates/internal-changelog.md`](/templates/internal-changelog/)
- Map: [`appendix/phase-folder-map.md`](/appendix/phase-folder-map/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
