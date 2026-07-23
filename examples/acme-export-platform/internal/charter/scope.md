---
title: "Scope: Acme Export Platform v2"
---
# Scope: Acme Export Platform v2

## In scope

| Area | Detail |
|------|--------|
| Export data sources | Dashboard reports, raw event logs, audit trail |
| Export formats | CSV, JSON, Parquet (Enterprise) |
| Delivery methods | Download, email, webhook |
| Scheduling | One-time, recurring (daily/weekly/monthly) |
| Authentication | API key + OAuth 2.0 for webhook callbacks |
| Retention | 30-day file storage with configurable expiry |

## Out of scope

- Real-time streaming exports (Kafka connector is a separate project)
- Cross-organisation export consolidation
- In-browser data transformation before export
- Export to third-party BI tools (Tableau, PowerBI) — provide CSV/Parquet instead
- Backfill exports for deleted data
