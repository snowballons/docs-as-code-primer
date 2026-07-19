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

## Definition of Done (MVP)

- [ ] Rollback documented
- [ ] Runbook exists for each production alert you page on
- [ ] SLOs defined and measured
- [ ] DR at least tabletop-tested before go-live

## Use

- Template: [`templates/runbook.md`](../templates/runbook.md)
- Example: [`export-queue-backlog.md`](../examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
