---
title: "Architecture overview (C4)"
---
# Architecture overview (C4)

## Level 1 — System context

```mermaid
C4Context
  Person(user, "User", "Description")
  System(system, "System Name", "Description")
  Rel(user, system, "Uses")
```

**Scope:** The system boundary. External actors and systems only.

**When to use:** Always. Every system needs a context diagram.

## Level 2 — Container diagram

```mermaid
C4Container
  Person(user, "User")
  Container_Boundary(system, "System Name") {
    Container(web, "Web App", "Language", "Description")
    Container(api, "API", "Language", "Description")
    ContainerDb(db, "Database", "Technology", "Description")
  }
  Rel(user, web, "Uses", "HTTPS")
  Rel(web, api, "Calls", "gRPC")
  Rel(api, db, "Reads/Writes", "SQL")
```

**Scope:** The high-level technical building blocks (services, databases, queues, caches). Each deployable unit.

**When to use:** Always. The container view is the most useful single diagram for onboarding and operations.

## Level 3 — Component diagram

| Use Component diagram | Do NOT use Component diagram |
|---|---|
| Service has 3+ internal modules with distinct responsibilities | Single-module service with no internal structure |
| Complex orchestration logic worth documenting | Trivial CRUD wrapper |
| Component-level failure modes need explicit modelling | Internal structure is obvious from the code |

**One diagram per container that needs it.** Most containers do not need Level 3 in the docs.

## Decisions

Key architecture decisions should link to ADRs:

| Decision | ADR |
|----------|-----|
| | ADR-NNN |
| | ADR-NNN |

## Related

- ADRs: [`docs/internal/decisions/`](../docs/internal/decisions/)
- Cross-cutting concerns: [`templates/cross-cutting-concerns-checklist.md`](/templates/cross-cutting-concerns-checklist/)
- Sequence diagrams: [`templates/sequence-diagram-page.md`](/templates/sequence-diagram-page/)
