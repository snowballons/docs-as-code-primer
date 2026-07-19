# Phase 8 — Maintenance & Evolution

| | |
|--|--|
| **Phase** | 8 |
| **Primary path** | `docs/both` |

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

## Cadence (suggested)

- **Per release:** user changelog; API quickstart smoke
- **Monthly:** spot-check getting started + sample feature pages
- **Quarterly:** runbook accuracy / game day
- **Annually:** architecture vs reality audit

Template: [`templates/deprecation-notice.md`](../templates/deprecation-notice.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
