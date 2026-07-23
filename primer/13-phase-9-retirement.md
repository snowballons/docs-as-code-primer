---
title: "Phase 9 — Retirement & Archival"
description: "| | | |--|--| | **Phase** | 9 | | **Primary path** | both streams |"
---

# Phase 9 — Retirement & Archival

| | |
|--|--|
| **Phase** | 9 |
| **Primary path** | both streams |

## Purpose

End systems as carefully as you launch them.

## Write

- Sunsetting plan and communication timeline
- Data export / migration guide for users
- Knowledge transfer for undocumented quirks
- Archive docs read-only — do not delete history needed for compliance or learning

### Bad → good (retirement)

| Bad | Good |
|-----|------|
| Turn off prod; tell users later | Sunsetting timeline + comms before cutover |
| Delete the docs repo | Archive read-only for compliance and learning |
| “Export your data somehow” | Step-by-step migration/export guide in `docs/user/` |

### Archival policy template

When a system or feature is retired, archive its docs — don't delete them:

| What to keep | Where | Retention | Why |
|-------------|-------|-----------|-----|
| Architecture docs + ADRs | `docs/archive/<system>/` | Indefinite | Audit trail for decisions; new systems learn from old |
| Runbooks | `docs/archive/<system>/operations/` | Indefinite | Post-mortem reference; incident patterns repeat |
| User migration guide | `docs/user/migrations/` | Until migration window closes | Users need time to move |
| OpenAPI specs | `docs/archive/<system>/api-specs/` | Indefinite | Archived clients may still need to reference |
| KT notes | `docs/archive/<system>/retirement-kt.md` | 1 year post-retirement | Knowledge transfer for future investigations |
| Compliance evidence | Per compliance policy | Per retention schedule | Legal/audit requirement |

**What to delete:** Setup guides, outdated tutorials, internal debug notes, PR template checklists that reference the retired system.

**Archive process:**

1. Move files under `docs/` → `docs/archive/<system>/` (preserves relative links if possible, or add a redirect note).
2. Add an `ARCHIVE.md` at the archive root with date retired, owner, and a one-paragraph summary of why.
3. Update `docs/GOVERNANCE.md` to note the archived system.
4. Update the internal changelog (see Phase 8) with a retirement entry.

## Placement

- Plan and KT → internal (`docs/internal/charter/` or dedicated retirement note)
- User migration / export instructions → `docs/user/`

## Check yourself

1. Your team decides to sunset an old feature. The only notice is a Slack message. What three audiences are left in the dark?
2. After decommissioning a service, the team wants to delete the entire docs folder to "clean up." What should they keep and why?
3. A user asks "how do I export my data before the feature is removed." Where should this live, and what's missing if no such doc exists?

## Use

- Templates: [`templates/retirement-kt.md`](/templates/retirement-kt/), [`templates/knowledge-transfer.md`](/templates/knowledge-transfer/), [`templates/archival-policy.md`](/templates/archival-policy/)
- Map: [`appendix/phase-folder-map.md`](/appendix/phase-folder-map/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
