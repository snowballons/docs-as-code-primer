---
title: "Phase 2 — Architecture & System Design"
description: "| | | |--|--| | **Phase** | 2 | | **Primary path** | `docs/internal/architecture/` + `docs/internal/decisions/` |"
---
# Phase 2 — Architecture & System Design

| | |
|--|--|
| **Phase** | 2 |
| **Primary path** | `docs/internal/architecture/` + `docs/internal/decisions/` |

## Purpose

Make the technical blueprint and its **trade-offs** explicit. New engineers should start here; on-call should trust the container view.

## Ownership

Architect / principal engineer; security reviews auth and data protection; ADRs need explicit acceptance (not silent consensus).

## Write

- C4 Level 1 (context) and Level 2 (containers); Level 3 only where non-obvious
- Data architecture (types, sensitivity, retention, consistency) — not full column lists yet
- Integration architecture and failure modes
- Cross-cutting: authn/z, logging, observability, errors, resilience, caching, config/secrets
- ADRs for significant decisions
- Scaling and cost estimate assumptions

### Cost / scaling estimate pattern

Document assumptions early — they become constraints when wrong. Template:

```text
## Scaling estimates

| Dimension | Current estimate | When to revisit | Trigger |
|-----------|-----------------|-----------------|---------|
| Peak throughput | 100 export jobs/min | Load test > 50% of estimate | Perf test in Phase 5 |
| Storage (RDS) | 2 GB / 90 days | Monthly growth > 10% | Monitoring alert |
| Storage (S3) | 500 GB / quarter | Monthly growth > 15% | Monitoring alert |
| Worker pool | 4–8 instances | Queue depth > 1000 for > 5 min | Runbook trigger |

## Cost assumptions

| Resource | Estimated monthly cost | Confidence | Notes |
|----------|----------------------|------------|-------|
| RDS db.r6g.large | $350 | Medium | 500 GB storage; Multi-AZ doubles this |
| S3 standard | $45 | High | Export artifacts; 90-day lifecycle to Glacier |
| EC2 (workers) | $240 | Low | Spot instances; 4 × c6g.large at $0.06/h |
```

Pin confidence levels to a reason so reviewers can challenge assumptions.

### C4 level guidance

C4 has four levels. The primer mandates Level 1 and Level 2 for every project. Level 3 is situational.

| Level | Name | Shows | Always? | Mermaid equivalent |
|-------|------|-------|---------|-------------------|
| 1 | Context | The system as a black box + users + external dependencies (SaaS, databases, downstream APIs) | ✅ Yes | `C4Context` or `flowchart LR` |
| 2 | Containers | The deployable units inside your system: services, databases, job workers, caches, queues | ✅ Yes | `C4Container` or `flowchart` with swimlanes |
| 3 | Components | Major classes/modules *inside* one container | ⚠️ Only when a container is large enough that new engineers can't navigate it from code alone | `C4Component` or package-level `classDiagram` |
| 4 | Code | Detailed class/interface design | ❌ No — use inline docstrings or module specs (Phase 3) | N/A (code) |

**When Level 3 is worth it:**

- A container has 15+ source files or 5+ packages with non-obvious dependencies
- Multiple teams contribute to the same container
- The container has a plugin/extension architecture
- Auditors or compliance require a dependency graph

**When Level 3 is overkill:**

- The container is a small CLI tool (< 5 files)
- A module spec (Phase 3 template) already describes the internals
- The code is well-structured and the team is stable

Keep all C4 diagrams as diagram-as-code (Mermaid or draw.io XML) in Git, changed in the same PR as the architecture.

### ADR shape (matches template)

Each ADR must include: **Status**, **Date**, **Context**, **Decision**, **Alternatives considered**, **Consequences** (and references). Status follows this lifecycle:

```text
         ┌─────────┐
         │ Proposed│
         └────┬────┘
              │ reviewed & accepted
              ▼
         ┌─────────┐
         │ Accepted│─────────────────────────┐
         └─────────┘                         │
              │                              │
              │ decision reversed            │ no longer relevant
              ▼                              ▼
         ┌───────────┐              ┌─────────────┐
         │ Superseded│              │  Deprecated │
         └───────────┘              └─────────────┘
```

- **Never delete or edit an Accepted ADR.** Write a new ADR that supersedes it — the old one stays as historical record.
- A superseding ADR links to the one it replaces in its **Context** section and sets the old ADR's status to **Superseded**.
- A deprecated ADR is still accurate but no longer actionable (e.g., a feature that was built and is now legacy).

Example supersession chain in `docs/internal/decisions/`:

```text
ADR-001: Use Redis for export queues (2024-01) — Accepted
ADR-012: Use RabbitMQ for export queues (2025-06) — supersedes ADR-001
```

ADR-012's Context section would open with: "Supersedes ADR-001. Queue volume has grown beyond Redis's capacity; RabbitMQ provides better back-pressure and persistence guarantees for the current workload."

### Bad → good (ADR)

| Bad | Good |
|-----|------|
| “We chose Postgres.” | Context + alternatives (MySQL, Dynamo) + rationale + consequences |
| Delete old ADR when reversing | Write ADR-0NN superseding ADR-0MM; keep history |
| Diagram updated in Figma only | Mermaid (or equivalent) in Git, changed in the same PR as the design |

## Definition of Done (MVP)

- [ ] Context + container diagrams as diagram-as-code (Mermaid or equivalent)
- [ ] Cross-cutting concerns written, not bullet-waved
- [ ] At least one ADR per major technology choice
- [ ] Security review of auth/data sections

## Mistakes

- Pretty diagrams that rot
- ADRs without alternatives
- Treating architecture as a one-time PDF

## Check yourself

1. A new engineer asks "why did we choose Postgres over DynamoDB?" Where should they look?
2. Your C4 context diagram shows one box for "Export Service." An ops engineer asks what runs inside. What's the next level to provide?
3. You find an accepted ADR from 2022 that says "use Redis for queues." In 2025, the team switched to RabbitMQ. What should exist in the docs?

## Use

- Templates: [`templates/adr.md`](/templates/adr/), [`templates/c4-architecture-outline.md`](/templates/c4-architecture-outline/), [`templates/cross-cutting-concerns-checklist.md`](/templates/cross-cutting-concerns-checklist/)
- Examples: [`context-diagram.md`](/examples/acme-export-platform/internal/architecture/context-diagram/), [`container-diagram.md`](/examples/acme-export-platform/internal/architecture/container-diagram/), [`adr-001-queue-for-exports.md`](/examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports/)

---

[Phases overview](/primer/phases-overview/) · [Learning path](/LEARNING_PATH/)
