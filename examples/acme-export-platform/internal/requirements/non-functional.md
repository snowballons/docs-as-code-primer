# Non-functional requirements — Acme Export Platform (sample)

Vague NFRs are not NFRs. Targets below are illustrative for the example product.

## Performance

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| NFR-PERF-1 | Export job completion for datasets ≤ 1M rows | < 30 seconds end-to-end under nominal warehouse load | Job `created_at` → `completed_at` in metrics |
| NFR-PERF-2 | `POST /v1/exports` accept latency | p95 < 300ms | API APM |

## Reliability & availability

| ID | Requirement | Target | Measurement |
|----|-------------|--------|-------------|
| NFR-REL-1 | Export API monthly availability | 99.9% | Synthetic + ingress success rate |
| NFR-REL-2 | Queue oldest-message age (business hours) | < 10 minutes at steady state | `ExportQueueAgeHigh` alert metric |

## Security & compliance

| ID | Requirement | Target / standard | Notes |
|----|-------------|-------------------|-------|
| NFR-SEC-1 | Entitlement check before export create | Deny without billing entitlement | Billing is SSoT |
| NFR-SEC-2 | Download URLs | Time-limited, authz-bound | No permanent public buckets |

## Bad → good (illustration)

| Bad | Good |
|-----|------|
| “Exports should be fast.” | NFR-PERF-1: < 30s for ≤ 1M rows under nominal load |
| “The API should be reliable.” | NFR-REL-1: 99.9% monthly availability |
