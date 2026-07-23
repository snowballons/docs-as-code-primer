---
title: "User story: Export usage data as CSV"
description: "**As an** enterprise administrator, **I want** to download my organisation's usage data as a CSV, **so that** I can import it into our internal reporting tool."
---
# User story: Export usage data as CSV

**As an** enterprise administrator,  
**I want** to download my organisation's usage data as a CSV,  
**so that** I can import it into our internal reporting tool.

## Priority

Must

## Acceptance criteria

1. **Given** I am an authenticated enterprise admin, **when** I open Data → Export, **then** I can choose CSV, JSON, or XLSX.
2. **Given** I submit an export for a valid date range ≤ 24 months, **when** the job completes, **then** I receive an email with a download link within 5 minutes for datasets ≤ 1M rows.
3. **Given** I open the download link within its validity window, **when** I download the file, **then** the file is complete and opens without corruption errors.

## Notes / constraints

- v1 excludes custom SQL and streaming export (see charter scope).

## Traceability

- Requirement IDs: FR-EXPORT-1
- NFRs: NFR-PERF-1, NFR-REL-1
- Feature docs: `docs/user/getting-started/quickstart.md`
