---
title: "Changelog"
---

# Changelog

## Export Platform v1.2.0 — 2024-03-15

### Added

- Scheduled exports: configure recurring daily, weekly, or monthly CSV exports from the dashboard.
  - [Tutorial: Schedule automated exports](/examples/acme-export-platform/user/tutorials/schedule-automated-exports/)
- Webhook delivery for export notifications: receive a POST to your endpoint when exports complete.
  - [API reference: Webhooks](/examples/acme-export-platform/user/api-reference/overview/#webhooks)

### Changed

- Export processing time reduced by ~40% for datasets under 500k rows (worker pool increased from 2 to 4).
- Download link expiry extended from 12 hours to 24 hours.

### Fixed

- CSV exports with special characters in cell values no longer produce misaligned columns.
- Scheduled exports now correctly handle daylight saving time transitions.

### Deprecated

- The legacy `GET /v1/exports/poll` endpoint is deprecated. Use webhook delivery or `GET /v1/exports/{id}` instead.
  - Migration guide: [Upgrading to webhook delivery](/examples/acme-export-platform/user/tutorials/schedule-automated-exports/#step-4-choose-delivery-method)
