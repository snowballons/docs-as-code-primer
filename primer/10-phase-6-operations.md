---
title: "Phase 6 — Deployment & Operations"
description: "| | | |--|--| | **Phase** | 6 | | **Primary path** | `docs/internal/operations/` |"
---

# Phase 6 — Deployment & Operations

| | |
|--|--|
| **Phase** | 6 |
| **Primary path** | `docs/internal/operations/` |

## Purpose

Someone who did not build the system can deploy, operate, and recover it — including at 2am.

## Ownership

DevOps/SRE lead; on-call validates runbooks (game days).

## Write

- CI/CD stages, promotions, rollback, hotfix path
- IaC overview and environment hierarchy
- Monitoring: dashboards, alerts, first responses, log/trace access
- **Runbooks by symptom** (not only by component folder)
- SLOs and error-budget policy
- Disaster recovery (RTO/RPO, backups, restore steps)
- On-call handbook

### Runbook shape (matches template)

Each runbook should include:

| Section | Purpose |
|---------|---------|
| Summary | Symptom, severity, service(s), dashboard, alert name |
| Symptoms | What alert/users/metrics show |
| Probable causes | Ordered list |
| Diagnosis steps | Exact commands |
| Remediation | Per-cause steps + verification |
| Escalation | Who/when |
| Post-incident | Report + follow-ups |
| Last tested | Date, environment, result |

### Bad → good (ops)

| Bad | Good |
|-----|------|
| Runbooks nested only under service names | Symptom entry points (`high-error-rate.md`) that on-call can find at 2am |
| “Restart the pod” as the whole runbook | Diagnosis → per-cause remediation → verify → escalation → last tested |
| SLO: “be highly available” | “99.9% monthly availability; error budget policy when burned” |

### Runbook game-day cadence

"Test your runbooks" is not actionable. Here is a concrete schedule:

| Type | Environment | Who | Cadence | Pass criteria |
|------|-------------|-----|---------|---------------|
| **Tabletop** | Meeting room, no live system | On-call + SRE lead | Monthly, or whenever a runbook is created or updated | Every step is unambiguous; no "we'd figure it out" |
| **Live game-day** | Staging or prod-like | On-call + SRE + observer | Quarterly for critical-path runbooks | Runbook executed verbatim without outside help; recovery in < RTO |
| **Chaos** | Staging | SRE + eng team | Biannual for systems with 99.9%+ SLO | Alert → diagnosis → remediation within SLO burn budget |

**To run a game-day:**

1. Pick a runbook the team hasn't exercised recently (check `Last tested` field).
2. Observer (not the player) reads the runbook aloud while the player follows it.
3. Observer logs every deviation: missing step, wrong command, unclear phrasing, env difference.
4. After recovery, file a PR against the runbook with all deviations addressed.
5. Update `Last tested` field.

**What to test first:**

- Runbooks for the pager's top-3 most frequent alerts
- DR runbooks (RTO/RPO verification)
- On-call handover / escalation path

## Definition of Done (MVP)

- [ ] Rollback documented
- [ ] Runbook exists for each production alert you page on
- [ ] SLOs defined and measured
- [ ] DR at least tabletop-tested before go-live

## Check yourself

1. An on-call engineer at 2am sees "high error rate on exports." The runbook folder is organized by component name (api-server, worker, redis). Why is this a problem?
2. Your runbook says "restart the pod." What sections from the primer template are missing?
3. Your team's SLO is "99.9% available" with no error budget policy. What decisions can't be made without one?

## Use

- Templates: [`templates/runbook.md`](/templates/runbook/), [`templates/slo.md`](/templates/slo/), [`templates/on-call-handbook.md`](/templates/on-call-handbook/), [`templates/dr-plan.md`](/templates/dr-plan/)
- Examples: [`slos.md`](/examples/acme-export-platform/internal/operations/slos/), [`export-queue-backlog.md`](/examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
