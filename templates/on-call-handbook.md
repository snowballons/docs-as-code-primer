---
title: "On-call handbook"
description: "> The handbook is what a new team member reads before their first shift — and what an experienced operator skims when context-switching at 2am."
---
# On-call handbook

> The handbook is what a new team member reads before their first shift — and what an experienced operator skims when context-switching at 2am.

## Who we are

| | |
|--|--|
| **Team** | |
| **Services supported** | |
| **On-call schedule** | |
| **Primary contact method** | |
| **Escalation path** | |

## Before your shift

- [ ] Confirm you have access to: dashboards, logs, alerts, incident channels
- [ ] Read any new runbooks since your last shift
- [ ] Check for ongoing incidents or maintenance windows
- [ ] Know who to escalate to for each service tier

## During your shift

### Alert response SLA

| Severity | Response time | Update frequency |
|----------|--------------|-----------------|
| SEV-1 | 15 min | Every 30 min |
| SEV-2 | 30 min | Every 60 min |
| SEV-3 | 4 hours | Daily |
| SEV-4 | Next business day | N/A |

### Acknowledging an alert

1. Ack within the SLA window.
2. Check the runbook for the symptom (see `docs/internal/operations/runbooks/`).
3. If no runbook exists or it's stale, triage with standard tools and file a follow-up to write it.
4. Post in the incident channel: service, symptom, severity, estimated impact.

### If you need help

| For this | Contact |
|----------|---------|
| Runbook exhausted | Service owner |
| Security suspicion | Security team (#security) |
| Data loss risk | DBA / platform team |

## Standard tools

| Tool | URL / access | What it's for |
|------|-------------|---------------|
| | | |
| | | |
| | | |

## Handover

- [ ] Summarise ongoing incidents in the handover doc
- [ ] Flag incomplete investigations
- [ ] Confirm next on-call is awake and acknowledged the handover

## After your shift

- [ ] File runbook improvements for anything that was missing or wrong
- [ ] Update the handbook if any tool or contact changed
- [ ] Log any "first time" issues you hit — they are the next rota's risk

## Related

- Runbook index:
- Incident retrospective template:
- Escalation matrix:
- Dashboard collection:
