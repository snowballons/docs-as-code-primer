---
title: "Runbook: Export queue backlog"
---
# Runbook: Export queue backlog

## Summary

| | |
|--|--|
| **Symptom** | Export jobs remain `queued` / `running` beyond SLO; alert `ExportQueueAgeHigh` |
| **Severity** | SEV-2 (SEV-1 if enterprise deadline impact widespread) |
| **Service(s)** | export-api, export-worker |
| **Dashboard** | `https://internal.example/grafana/d/export-ops` (placeholder) |

## Symptoms

- Alert: queue oldest message age > 10 minutes
- Users report "export still processing" for small datasets
- Worker CPU low while queue depth rising (consumer failure) **or** worker CPU saturated (capacity)

## Probable causes

1. Workers crashed or scaled to zero
2. Downstream warehouse slowness / connection exhaustion
3. Poison messages blocking a partition/shard
4. Sudden legitimate spike (end of month)

## Diagnosis steps

1. Open export-ops dashboard; note queue depth, age, worker count, error rate.
2. Check worker deployments healthy: `kubectl get pods -l app=export-worker` (example).
3. Inspect recent worker logs for warehouse timeouts vs panic loops.
4. Sample one stuck `job_id` from admin tools; confirm state transitions.

## Remediation

### Cause 1 — Workers down

1. Restore desired replica count.
2. Confirm queue age decreases within 5 minutes.
3. If crash-loop: roll back to last known good image.

### Cause 2 — Warehouse slowness

1. Check warehouse status / active queries.
2. Shed non-critical load if playbook allows.
3. Enable degraded mode: reject new large exports with clear user error (feature flag).

### Cause 3 — Poison messages

1. Move failing job to dead-letter.
2. Reprocess remainder.
3. File incident with job payload type (no PII in ticket body).

### Cause 4 — Spike

1. Scale workers temporarily.
2. Communicate status page if customer-visible delay exceeds policy.

## Escalation

| If | Then |
|----|------|
| No improvement in 15 minutes | Page export on-call primary |
| Data corruption suspected | Page data platform + stop workers |

## Post-incident

- [ ] Retrospective filed
- [ ] Update this runbook with new failure mode if needed

## Last tested

| Date | Environment | Tester | Result |
|------|-------------|--------|--------|
| 2026-06-01 | staging game day | A. Rivera | Pass — scaled workers recovered age SLO |
