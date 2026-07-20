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

## Placement

- Plan and KT → internal (`docs/internal/charter/` or dedicated retirement note)
- User migration / export instructions → `docs/user/`

## Check yourself

1. Your team decides to sunset an old feature. The only notice is a Slack message. What three audiences are left in the dark?
2. After decommissioning a service, the team wants to delete the entire docs folder to "clean up." What should they keep and why?
3. A user asks "how do I export my data before the feature is removed." Where should this live, and what's missing if no such doc exists?

## Use

- Templates: [`templates/retirement-kt.md`](../templates/retirement-kt.md), [`templates/knowledge-transfer.md`](../templates/knowledge-transfer.md), [`templates/archival-policy.md`](../templates/archival-policy.md)
- Map: [`appendix/phase-folder-map.md`](../appendix/phase-folder-map.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
