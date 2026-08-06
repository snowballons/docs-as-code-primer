---
title: "Glossary"
description: "Terms used across this repository. Single source of truth — link here instead of redefining."
---

# Glossary

Terms used across this repository. Single source of truth — link here instead of redefining.

| Term | Definition |
|------|------------|
| **ADR** | Architecture Decision Record — a short document capturing a significant architectural decision, its context, alternatives considered, and consequences. Status lifecycle: Proposed → Accepted → Superseded / Deprecated. Never deleted. |
| **Agent-ready docs** | Structured, stable, machine-friendly documentation entry points for AI coding agents — stable paths, `AGENTS.md`, `llms.txt`, and machine-readable contracts (OpenAPI, JSON Schema). |
| **Archival policy** | A documented rule for what to keep, where, and for how long when a system or feature is retired. |
| **Backfill job** | A data migration that populates a new field or table from existing data, typically run while the service is live. Requires idempotency, batch sizing, and a resume-from-checkpoint strategy. |
| **C4 model** | A four-level diagram framework: Level 1 Context (system as black box), Level 2 Container (deployable units), Level 3 Component (internals of one container), Level 4 Code. The primer mandates Levels 1 and 2 for every project. |
| **Canonical** | The single authoritative source for a fact or definition. All other references derive from or link to it — never redefine it. |
| **Causal motion** | (Motion doctrine) A motion design principle: every move must perform a narrative purpose. Not applicable to documentation. |
| **Charter** | A Phase 0 artifact answering *why this project exists*: vision statement, KPIs, in/out-of-scope, RACI, constraints, assumptions, and initial risk register. |
| **Content governance** | The policies and practices that prevent documentation from drifting from reality: ownership, review cadence, Definition of Done, and reuse rules. |
| **Cross-cutting concerns** | System-wide aspects that affect every component: authentication/authorisation, logging, observability, error handling, resilience, caching, config, and secrets management. Documented once in Phase 2. |
| **Curated** | Content derived from an internal canonical source and edited for an external audience — removing sensitive details, adding examples, and framing from user goals rather than system internals. |
| **Definition of Done (DoD)** | A shared checklist that a change must satisfy before it is considered complete. The primer's DoD includes a doc-update requirement for every behaviour change. |
| **Derived content** | User-facing documentation produced by editing, excerpting, or reformatting internal canonical content — e.g. a consumer API reference derived from an OpenAPI spec. Never a separate hand-maintained truth. |
| **Diagrams as code** | Diagrams authored as text (e.g. Mermaid, draw.io XML) and committed to Git, so they diff, review, and stay in sync with code changes. |
| **DocOps** | The CI/CD, review, and publishing operations applied to documentation — linting, link checking, style enforcement, site builds, and deployment. |
| **Docs as Code** | Authoring, reviewing, testing, and releasing documentation with software engineering discipline: Git, pull requests, CI checks, and versioning alongside the product. |
| **Documentation debt** | Docs that are missing, stale, or inaccurate relative to the current system. Tracked alongside code debt; accrues faster when AI tools accelerate code production. |
| **Documentation drift** | The gap between what the docs say and what the system does. Prevented by the drift-prevention DoD checklist and health reviews. |
| **DR plan** | Disaster Recovery plan — documents RTO, RPO, backup procedures, restore steps, and the tested recovery path. |
| **Expand-contract** | A migration pattern for backward-compatible schema changes: expand (add new column/table alongside old), migrate data, verify, then contract (remove old). Allows zero-downtime deployment. |
| **Functional requirement** | A single testable statement about system behaviour in the form "The system shall [action] [object] [under condition]." Must be traceable to a test case. |
| **Game day** | A scheduled exercise where on-call engineers execute a runbook verbatim against a staging or production environment to verify it works and identify gaps. |
| **Health review** | A scheduled audit of documentation accuracy — monthly (spot-check), quarterly (runbook game day, getting-started test), or annual (full architecture vs reality audit). |
| **IaC** | Infrastructure as Code — infrastructure defined in version-controlled files (Terraform, Pulumi, CloudFormation) rather than configured manually. |
| **Internal documentation** | Deep, candid docs for builders and operators — covers failure modes, trade-offs, known footguns, and operational procedures. Not safe to publish to users without deliberate curation. |
| **Journey map** | A Phase 1 artifact showing the stages a user goes through to achieve a goal, with per-stage actions, touchpoints, emotions, pain points, and opportunities. One persona per map. |
| **KPI** | Key Performance Indicator — a measurable metric with a baseline and target used to judge whether a project objective is being achieved. |
| **Knowledge transfer (KT)** | A Phase 9 document capturing undocumented system knowledge before a team member leaves or a system is retired. |
| **llms.txt** | A concise plain-text index file at the repo root that LLM coding assistants read at inference time to discover entry points, key concepts, and placement rules. |
| **Maturity model** | A four-level framework (Chaos → Scaffold → Discipline → Platform) for assessing where a team's documentation practice stands and what to invest in next. |
| **Micro-ADR** | A lightweight decision record captured as an inline comment or commit message body for small, reversible, single-module decisions. Promoted to a full ADR when the decision becomes cross-cutting. |
| **MoSCoW** | A backlog prioritisation method: Must (MVP, non-negotiable), Should (high-value, deferrable), Could (nice-to-have), Won't (explicitly excluded). Every requirement belongs to one bucket. |
| **Module spec** | A Phase 3 artifact describing a service or module's responsibility, interface, dependencies, state, concurrency model, error model, and observability hooks. |
| **NFR** | Non-Functional Requirement — a constraint on system quality with a **numeric** target: performance (p95 < 300 ms), reliability (99.9% uptime), security (TLS 1.2+), accessibility (WCAG 2.1 AA). |
| **OpenAPI** | A machine-readable API contract format (YAML or JSON). Canonical specs live in `docs/internal/system-design/api-specs/`. Consumer API reference is derived from it — never a second hand-maintained truth. |
| **Persona** | A Phase 1 decision-making tool built around goal, pain points, behaviour patterns, and success criteria. Demographics only matter when they affect behaviour. |
| **Phase** | One of ten documentation lifecycle stages (0–9) mapped to the software development lifecycle — from charter through retirement. Phases overlap; they are a mental model, not a waterfall gate. |
| **Primer** | The opinionated teaching layer in this repository (`primer/`) — 19 chapters covering judgment, phases, and practices. |
| **RACI** | Responsibility assignment matrix — Responsible (does the work), Accountable (single owner), Consulted (input before decision), Informed (notified of outcome). One Accountable per row. |
| **RAG** | Retrieval-Augmented Generation — an AI pattern where a model retrieves relevant documents at inference time to ground its responses. Well-structured docs improve RAG accuracy. |
| **Runbook** | A Phase 6 operational document organised by **symptom** (what the responder sees), not by component. Contains diagnosis steps, per-cause remediation, escalation path, and a `Last tested` date. |
| **Scaffold / kit** | The copy-paste `docs/` folder structure and starter CI automation in `scaffold/` — the deployable output of the primer's methodology. |
| **Shared content** | Single-source artifacts (glossary, high-level diagrams, shared concepts) referenced by both internal and user streams. Lives in `docs/shared/`. |
| **SLO** | Service Level Objective — a target availability or performance commitment (e.g. 99.9% monthly uptime) with an associated error-budget policy. |
| **Spectral** | An OpenAPI linting tool. The scaffold includes a commented Spectral CI job to enable when the first OpenAPI spec lands. |
| **SSG** | Static Site Generator — a tool (MkDocs, Docusaurus, Mintlify) that renders Markdown content into a browsable website. Structure and content come first; the SSG is a publishing concern. |
| **SSoT** | Single Source of Truth — the one authoritative location for a given fact. All references point to it; the fact is never redefined elsewhere. |
| **State machine** | A Phase 3 artifact explicitly listing the states, transitions, triggers, and side effects for a lifecycle entity (e.g. an export job: pending → processing → completed / failed / cancelled). |
| **Stub** | A structural placeholder file in the scaffold (`README.md` describing purpose, or a thin `example-*.md`) that the adopter replaces with real content. Never fictional product prose. |
| **User-facing documentation** | Curated, goal-oriented docs for product consumers — customers, API integrators, partners. Accuracy and readability are both gates. |
| **Vale** | A prose linter that enforces writing style rules. Supports different rule sets for internal (accuracy, terminology) vs user (tone, reading level, no jargon) docs from a single CI job. |
| **Vision statement** | A 2–4 sentence working definition of the project: what it is, who it is for, what problem it solves. Not a marketing tagline. The team's shared reference, not the sponsor's slide deck. |
