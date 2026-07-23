---
title: "Archival policy"
---

# Archival policy

## Scope

This policy covers documentation for systems, features, and components that have been retired, decommissioned, or superseded.

## Retention periods

| Artifact | Retention | Rationale |
|----------|-----------|-----------|
| ADRs | Permanent | Historical record of decisions |
| Architecture docs | 3 years after system retirement | Reference for future architecture |
| Runbooks | 1 year after system retirement | May inform future system design |
| User docs | 1 year after last supported version | User migration period |
| API specs | 2 years after deprecation | Integration reference |
| Incident reports | Per compliance requirements | Audit and legal |
| Source code | Per repo policy | Repository archival |

## What to archive (not delete)

- ADRs and design decisions
- Architecture diagrams (C4 context, containers)
- API specifications
- Migration guides
- Incident retrospectives (compliance-relevant)
- Compliance-related documentation

## What to delete

- Drafts and WIP documents
- Outdated runbooks for decommissioned systems (after retention)
- Temporary notes and debugging logs
- Deprecated user docs (after migration window closes)

## Archival format

- Mark documents as read-only
- Move to `docs/archive/` folder
- Add header: `> **Archived:** YYYY-MM-DD. This document is historical and may not reflect the current system.`
- Remove from active search indexes and navigation

## Responsibilities

| Role | Duty |
|------|------|
| Engineering manager | Trigger archival review after system retirement |
| Tech writer / PM | Execute archival within one sprint of retirement |
| Legal / compliance | Specify retention requirements for regulated data |

## Related

- Internal changelog: [`templates/internal-changelog.md`](/templates/internal-changelog/)
- Retirement KT: [`templates/retirement-kt.md`](/templates/retirement-kt/)
