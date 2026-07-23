---
title: "SLO / error budget: [Service name]"
description: "> SLOs are a shared vocabulary between engineering and product about how reliable the service needs to be — and what happens when it isn't."
---

# SLO / error budget: [Service name]

> SLOs are a shared vocabulary between engineering and product about how reliable the service needs to be — and what happens when it isn't.

## Service overview

| | |
|--|--|
| **Service** | |
| **Tier** | Critical / Important / Best-effort |
| **Owner** | |
| **Dependencies** | |

## SLIs (Service Level Indicators)

| SLI | Definition | Measurement | Source |
|-----|-----------|-------------|--------|
| Availability | % of successful requests / total requests | | |
| Latency (p50) | | | |
| Latency (p95) | | | |
| Latency (p99) | | | |
| Throughput | | | |
| Correctness | | | |
| Freshness | | | |

## SLO targets

| SLI | Target (rolling window) | Window | Burn rate alert |
|-----|------------------------|--------|----------------|
| | | 30d | |
| | | 30d | |

## Error budget

| | |
|--|--|
| **Monthly budget** | 100% - SLO target = available error budget |
| **Budget consumed** | Tracked in [dashboard / tool] |
| **Budget consumed YTD** | |

### When the budget is burning

| Burn rate | Action |
|-----------|--------|
| < 50% / month | Normal ops |
| 50–75% / month | Review; defer non-critical changes |
| > 75% / month | Freeze feature work until budget recovers or SLO is renegotiated |

## Exclusions

What does NOT count toward the SLO:

- Pre-production environments
- Planned maintenance with [N]h notice
- Client-side / network errors outside our control

## Related

- Monitoring dashboard:
- Alert rules:
- Runbooks:
- Incident retrospective:
