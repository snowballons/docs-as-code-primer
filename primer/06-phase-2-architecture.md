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

### ADR shape (matches template)

Each ADR must include: **Status**, **Date**, **Context**, **Decision**, **Alternatives considered**, **Consequences** (and references). Status is Proposed → Accepted → Deprecated / Superseded. Never delete an accepted ADR; supersede it.

## Definition of Done (MVP)

- [ ] Context + container diagrams as diagram-as-code (Mermaid or equivalent)
- [ ] Cross-cutting concerns written, not bullet-waved
- [ ] At least one ADR per major technology choice
- [ ] Security review of auth/data sections

## Mistakes

- Pretty diagrams that rot
- ADRs without alternatives
- Treating architecture as a one-time PDF

## Use

- Template: [`templates/adr.md`](../templates/adr.md)
- Examples: [`context-diagram.md`](../examples/acme-export-platform/internal/architecture/context-diagram.md), [`adr-001-queue-for-exports.md`](../examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
