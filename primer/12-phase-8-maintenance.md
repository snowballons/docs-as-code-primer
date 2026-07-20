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

### Bad → good (evolution)

| Bad | Good |
|-----|------|
| User changelog = git log | Plain-language what changed for users and whether action is required |
| Remove API with one sprint notice | Deprecation notice + date + replacement + migration guide (policy window) |
| Silently edit an accepted ADR | New ADR supersedes the old one |


## Cadence (suggested)

- **Per release:** user changelog; API quickstart smoke
- **Monthly:** spot-check getting started + sample feature pages
- **Quarterly:** runbook accuracy / game day
- **Annually:** architecture vs reality audit

## Use

- Template: [`templates/deprecation-notice.md`](../templates/deprecation-notice.md)
- Map: [`appendix/phase-folder-map.md`](../appendix/phase-folder-map.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
