---
title: "Documentation as Code — Two-Version Strategy"
description: "> **This document is Part 2 of 2.** > It defines *where* documentation lives, *who* it is for, and how Internal and User-Facing documentation are structured, maintained, and published as two coordinat"
---
# Documentation as Code — Two-Version Strategy

> **This document is Part 2 of 2.**
> It defines *where* documentation lives, *who* it is for, and how Internal and User-Facing documentation are structured, maintained, and published as two coordinated but distinct outputs from the same source process.
> Part 1 (`docs-phases-complete.md`) defines *what* to document and *when*, organised by project phase.
> The two documents must be read together. Every content decision in this guide references the phases defined in Part 1.

---

## Why Two Versions Are Necessary

A single documentation repository serving a single audience is the natural starting point for most projects. It is also the natural source of the most common documentation failure: a system where technical depth makes user guides inaccessible, and user-friendliness requirements make the internal documentation too shallow to be useful to engineers.

The engineers who build and maintain the system need documentation that is honest, deep, and fast to update. They need architectural trade-offs recorded candidly, debugging tips preserved even when embarrassing, and operational runbooks detailed enough to execute at 3am without Googling every step. They need the freedom to write "this approach was a mistake and we have not fixed it yet" without that sentence appearing in a customer portal.

The users, API consumers, customers, and non-technical stakeholders need documentation that is polished, task-oriented, and written in their language. They need to know how to accomplish their goals — not how the system was built, what it is struggling with internally, or what the engineering team would do differently with hindsight.

These are incompatible requirements for a single document. Trying to serve both audiences with one documentation stream produces something that serves neither adequately: too technical for users, too sanitised for engineers.

The two-version approach resolves this cleanly. One stream for internal technical audiences. One stream for external users. Separate content, separate publishing pipelines, separate review processes, separate access controls — but a shared repository structure, shared conventions, shared tooling, and a shared content reuse layer that prevents the two streams from drifting out of alignment with each other.

---

## Defining the Two Versions

### Internal Documentation

Internal documentation is the complete technical record of the system. It exists to serve the people who build, operate, and maintain it. It should be:

- **Comprehensive**: Include everything that helps someone understand, build, or operate the system.
- **Honest**: Record trade-offs, known issues, and mistakes. A sanitised internal document that omits the messy reality is misleading and dangerous.
- **Fast to update**: Optimise for accuracy over polish. A rough-but-accurate update committed within hours is better than a polished-but-delayed update committed after a week of editorial review.
- **Private or access-controlled**: Internal documentation may contain architectural decisions that competitors could exploit, operational procedures that could be used to attack the system, references to internal tooling and infrastructure, and candid assessments of known limitations.

Internal documentation maps directly to Phases 0 through 6, and the internal portions of Phases 7 through 9, as defined in Part 1.

### User-Facing Documentation

User-facing documentation is the curated, public (or customer-accessible) record of what the system does from the perspective of someone using it. It exists to serve end users, API consumers, customers, and non-technical stakeholders. It should be:

- **Goal-oriented**: Structured around what users want to accomplish, not around how the system is built.
- **Clear and accessible**: Written for the target audience's technical level. Avoid jargon unless the audience is technical (e.g., an API reference for developers) and it is necessary.
- **Polished**: Reviewed for tone, style, and clarity. Subject to a higher editorial standard than internal documentation.
- **Safe to publish**: Contains no internal secrets, no sensitive architecture details, no candid commentary on known weaknesses that could embarrass the organisation.
- **Versioned with product releases**: User-facing documentation reflects the current released version of the product, not the development branch.

User-facing documentation maps primarily to Phase 7, and the user-facing portions of Phase 8, as defined in Part 1.

---

## Audience Analysis

Understanding who reads what is the foundation of the two-version strategy. Every content decision — where something lives, how it is written, how technical it is, how frequently it is updated — should follow from a clear understanding of the audience.

| Characteristic | Internal Audience | User-Facing Audience |
|----------------|-------------------|----------------------|
| **Who they are** | Developers, architects, SREs, QA engineers, new team members, security auditors | End users, customers, API developers, partners, non-technical stakeholders |
| **What they need** | Deep technical understanding, operational capability, implementation context | Goal achievement, task completion, conceptual understanding |
| **Technical level** | High. Can read code, understand infrastructure diagrams, interpret stack traces | Variable. May range from highly technical (API consumers) to entirely non-technical (business users) |
| **What they do with docs** | Build features, debug issues, onboard to the codebase, execute operational procedures | Learn the product, complete tasks, troubleshoot problems, integrate via API |
| **What frustrates them** | Inaccurate docs, missing detail, sanitised docs that hide the messy reality | Overwhelming technical detail, jargon without explanation, docs organised around engineering structure rather than user goals |
| **Update tolerance** | Comfortable with frequent, rough updates | Expect a stable, polished experience. Frequent rough updates erode trust. |
| **Access** | Private — internal network, authenticated portal, or private repository | Public or customer-authenticated portal |

---

## Repository Architecture

The repository structure is the physical implementation of the two-version strategy. It must be clear, consistent, and enforce the separation of concerns between the two documentation streams while enabling content reuse where appropriate.

### Full Repository Structure

```text
/docs/
│
├── internal/                          # Technical documentation — private
│   │
│   ├── charter/                       # Phase 0: Project Vision & Charter
│   │   ├── vision.md                  # Vision statement and business objectives
│   │   ├── scope.md                   # In-scope / out-of-scope definitions
│   │   ├── stakeholders.md            # Stakeholder registry and RACI matrix
│   │   ├── constraints-assumptions.md # Documented constraints and assumptions
│   │   └── risk-register.md           # Initial risk register
│   │
│   ├── requirements/                  # Phase 1: User & Business Requirements
│   │   ├── functional.md              # Functional requirements
│   │   ├── non-functional.md          # NFRs: performance, security, availability, etc.
│   │   ├── personas/                  # User persona documents
│   │   │   ├── persona-enterprise-admin.md
│   │   │   └── persona-api-developer.md
│   │   ├── user-journeys/             # Journey maps per persona
│   │   └── backlog.md                 # Prioritised requirements backlog (MoSCoW)
│   │
│   ├── architecture/                  # Phase 2: Architecture & System Design
│   │   ├── context-diagram.md         # C4 Level 1 — system context
│   │   ├── container-diagram.md       # C4 Level 2 — containers and technologies
│   │   ├── component-diagrams/        # C4 Level 3 — internal components (selective)
│   │   ├── data-architecture.md       # Data model, flows, retention, sensitivity
│   │   ├── integration-architecture.md # All external system integrations
│   │   ├── cross-cutting-concerns.md  # Auth, logging, observability, resilience
│   │   ├── security-architecture.md   # Threat model, data classification, controls
│   │   └── scaling-cost-estimates.md  # Infrastructure sizing and cost projections
│   │
│   ├── decisions/                     # ADRs — Architecture Decision Records
│   │   ├── adr-template.md            # Template for new ADRs
│   │   ├── adr-001-database-choice.md
│   │   ├── adr-002-message-broker.md
│   │   └── adr-NNN-[title].md         # One file per decision
│   │
│   ├── system-design/                 # Phase 3: Detailed System Design
│   │   ├── services/                  # Per-service design specifications
│   │   │   ├── export-service.md
│   │   │   └── notification-service.md
│   │   ├── database/
│   │   │   ├── schema.md              # Complete database schema documentation
│   │   │   └── migration-strategy.md  # Migration approach and rollback procedures
│   │   ├── api-specs/                 # OpenAPI specifications (source of truth)
│   │   │   ├── export-api.yaml        # Internal OpenAPI spec with all annotations
│   │   │   └── admin-api.yaml
│   │   ├── sequence-diagrams/         # Mermaid sequence diagrams per flow
│   │   │   ├── authentication-flow.md
│   │   │   ├── export-processing-flow.md
│   │   │   └── notification-flow.md
│   │   ├── state-machines/            # State machines for stateful entities
│   │   └── security-design.md         # Threat model, encryption, input validation
│   │
│   ├── development/                   # Phase 4: Implementation documentation
│   │   ├── local-setup.md             # Complete local development environment guide
│   │   ├── contribution-guide.md      # How to contribute — PR process, conventions
│   │   ├── code-style.md              # Code conventions not enforced by linting
│   │   ├── architecture-overview.md   # Summary of codebase structure for new joiners
│   │   └── debugging-guide.md         # Common debugging approaches and known issues
│   │
│   ├── testing/                       # Phase 5: Testing & QA
│   │   ├── test-strategy.md           # Overall testing approach and coverage targets
│   │   ├── test-cases/                # Test case documents per feature/module
│   │   ├── coverage-reports/          # Auto-generated; published by CI
│   │   ├── performance-benchmarks/    # Benchmark results with test conditions
│   │   └── security-scan-results/     # SAST, dependency, DAST results
│   │
│   ├── operations/                    # Phase 6: Deployment & Operations
│   │   ├── deployment.md              # CI/CD pipeline, deployment procedures
│   │   ├── infrastructure.md          # IaC overview, environment hierarchy
│   │   ├── monitoring.md              # Dashboards, metrics, alerting
│   │   ├── slos.md                    # Service Level Objectives and error budget policy
│   │   ├── runbooks/                  # One file per operational scenario
│   │   │   ├── high-error-rate.md
│   │   │   ├── database-connection-exhaustion.md
│   │   │   ├── export-queue-backlog.md
│   │   │   └── full-outage-recovery.md
│   │   ├── disaster-recovery.md       # Full DR plan
│   │   └── on-call-handbook.md        # Guide for on-call engineers
│   │
│   └── retrospectives/                # Phase 8: Lessons learned, incident reports
│       ├── incident-YYYY-MM-DD-title.md
│       └── release-retrospectives/
│
├── user/                              # User-facing documentation — public/customer
│   │
│   ├── getting-started/               # Phase 7: Onboarding
│   │   ├── quickstart.md              # Zero-to-first-success guide
│   │   ├── prerequisites.md           # What you need before starting
│   │   └── account-setup.md           # Account creation and initial configuration
│   │
│   ├── features/                      # Phase 7: Feature documentation
│   │   ├── data-export.md             # How to use the data export feature
│   │   ├── team-management.md
│   │   └── notifications.md
│   │
│   ├── tutorials/                     # Phase 7: Task-based walkthroughs
│   │   ├── schedule-automated-exports.md
│   │   ├── integrate-export-api-python.md
│   │   └── configure-team-permissions.md
│   │
│   ├── api-reference/                 # Phase 7: Consumer API reference
│   │   ├── overview.md                # API concepts, auth, rate limiting, errors
│   │   ├── quickstart.md              # Make your first API call
│   │   └── reference/                 # Generated from internal OpenAPI specs
│   │       ├── export-api.md          # Curated, consumer-facing endpoint reference
│   │       └── webhooks.md
│   │
│   ├── troubleshooting/               # Phase 7: Problem resolution
│   │   ├── common-errors.md           # Error codes with causes and resolutions
│   │   ├── export-issues.md
│   │   └── api-integration-issues.md
│   │
│   └── changelog/                     # Phase 8: User-facing release notes
│       ├── 2026-07.md
│       └── 2026-04.md
│
└── shared/                            # Content reused in both streams
    ├── glossary.md                    # Canonical definitions of all terms
    ├── diagrams/                      # Shared diagrams (context diagrams, etc.)
    │   ├── system-context.mermaid
    │   └── data-flow.mermaid
    └── api-concepts/                  # Shared API concept explanations
        ├── pagination.md
        └── error-codes-reference.md
```

### Directory Design Principles

**The internal and user directories are siblings, not nested.** They are separate concerns and should never be parents of each other. A developer browsing the documentation structure should immediately understand that `/docs/internal/` and `/docs/user/` are two separate publishing targets.

**The shared directory is the content reuse layer.** Any content that would otherwise be duplicated across both streams — a glossary of terms, a high-level system context diagram, canonical descriptions of error codes — lives in `/docs/shared/`. Both publishing pipelines pull from this source. When the glossary changes, it changes everywhere.

**The decisions directory is flat.** ADRs are numbered sequentially. They are never deleted, only superseded. The numbering must be stable — once `adr-017` is written, it is always `adr-017` regardless of what changes happen to surrounding ADRs.

**The operations/runbooks directory is organised by symptom, not by component.** An on-call engineer experiencing a high error rate should find the `high-error-rate.md` runbook immediately. Organising by component (e.g., `/runbooks/export-service/`, `/runbooks/database/`) forces the responder to diagnose before they can find the runbook, which is backwards.

---

## Phase-to-Version Mapping

Every document produced across the ten phases maps to a specific location in this repository structure. This table is the bridge between Part 1 (what to write and when) and Part 2 (where it lives and who it reaches).

| Phase | Phase Name | Primary Location | Version | Access |
|-------|------------|-----------------|---------|--------|
| 0 | Project Vision & Charter | `/docs/internal/charter/` | Internal | Private |
| 1 | User & Business Requirements | `/docs/internal/requirements/` | Internal | Private |
| 2 | Architecture & System Design | `/docs/internal/architecture/` | Internal | Private |
| 2 | Architecture Decision Records | `/docs/internal/decisions/` | Internal | Private |
| 3 | Detailed System Design | `/docs/internal/system-design/` | Internal | Private |
| 3 | OpenAPI Specs (source) | `/docs/internal/system-design/api-specs/` | Internal | Private |
| 4 | Implementation Documentation | `/docs/internal/development/` | Internal | Private |
| 4 | Repository READMEs | Root and package-level `README.md` files | Internal | Private |
| 5 | Testing & QA | `/docs/internal/testing/` | Internal | Private |
| 6 | Deployment & Operations | `/docs/internal/operations/` | Internal | Private |
| 7 | Getting Started | `/docs/user/getting-started/` | User-Facing | Public |
| 7 | Feature Documentation | `/docs/user/features/` | User-Facing | Public |
| 7 | Tutorials | `/docs/user/tutorials/` | User-Facing | Public |
| 7 | Consumer API Reference | `/docs/user/api-reference/` | User-Facing | Public |
| 7 | Troubleshooting | `/docs/user/troubleshooting/` | User-Facing | Public |
| 8 | Internal Changelog | `/docs/internal/` or `CHANGELOG-internal.md` | Internal | Private |
| 8 | User Changelog | `/docs/user/changelog/` | User-Facing | Public |
| 8 | Migration Guides | `/docs/user/changelog/migrations/` | User-Facing | Public |
| 8 | ADR Updates | `/docs/internal/decisions/` (new ADR superseding old) | Internal | Private |
| 8 | Deprecation Notices | `/docs/user/changelog/deprecations/` | User-Facing | Public |
| 8 | Lessons Learned | `/docs/internal/retrospectives/` | Internal | Private |
| 9 | Retirement Plan | `/docs/internal/charter/retirement.md` | Internal | Private |
| 9 | Data Migration Guide | `/docs/user/` (final user-facing doc) | User-Facing | Public |
| Ongoing | Glossary | `/docs/shared/glossary.md` | Both | Both |
| Ongoing | Shared Diagrams | `/docs/shared/diagrams/` | Both | Both |

---

## Content Governance: What Belongs Where

The most common failure point in a two-version system is content that ends up in the wrong place: internal details leaking into user docs, or user-facing docs being so sanitised that they end up being created as a separate effort from the internal docs rather than derived from them.

### The Decision Framework

When deciding where a piece of content belongs, ask these questions in order:

**1. Is it sensitive?**
If the content contains: architectural decisions a competitor could exploit, security controls or their absence, known vulnerabilities or unfixed issues, internal infrastructure details, financial or operational data, or candid assessments of limitations — it belongs in **Internal Documentation only**. Do not publish it externally in any form, including heavily paraphrased summaries.

**2. Is it technical implementation detail?**
If the content describes: how the system is built (not just what it does), database schemas, deployment procedures, service-to-service communication, error handling internals, or code-level design decisions — it belongs in **Internal Documentation**. Users do not need to know how the export pipeline works internally; they need to know how to trigger an export and interpret the results.

**3. Is it needed to accomplish a user goal?**
If the content helps a user, customer, or API consumer: understand the product, complete a task, configure an integration, troubleshoot a problem, or plan their use of the system — it belongs in **User-Facing Documentation**. Write it from the user's perspective, not the system's.

**4. Is it a definition, diagram, or concept that applies equally to both audiences?**
If the content is a term definition, a high-level architecture diagram, or a conceptual explanation that both engineers and users benefit from — it belongs in **Shared Content**. Publish it once; reference it from both documentation streams.

**5. Is it content derived from internal documentation for external audiences?**
Some internal documents have a user-facing counterpart. The internal OpenAPI spec is the source; the consumer API reference is the derived, curated output. The internal threat model is confidential; the user-facing security overview is derived from it. The internal architecture document is private; a high-level "how the platform works" overview may be appropriate for users. Maintain the internal version as canonical and derive the external version from it.

### Content That Belongs in Internal Docs Only

- All Phase 0 through Phase 6 content
- Architecture Decision Records
- Database schemas and migration strategies
- Sequence diagrams showing internal service interactions
- Threat models and security control details
- Deployment and operational procedures
- Monitoring and alerting configurations
- Incident reports and post-mortems
- Known bugs and their workarounds (until publicly fixed)
- Performance benchmark results from internal infrastructure
- Team retrospectives and lessons learned

### Content That Belongs in User-Facing Docs Only

- Getting started and onboarding guides
- Feature documentation written from a user-goal perspective
- Tutorials for real-world user scenarios
- The consumer-facing API reference
- User-facing troubleshooting guides
- The user-facing changelog
- Deprecation notices and migration guides
- SLA commitments and uptime/availability disclosures

### Content That Lives in Shared

- The glossary of terms used across both systems
- High-level context diagrams (system boundary, major integrations at a named level)
- Canonical error code reference (the code, its plain-English meaning, and resolution)
- API concepts applicable to all consumers: pagination, rate limiting, authentication overview

---

## Content Reuse: Preventing Duplication Without Losing Separation

The greatest practical risk in a two-version system is duplication — the same information maintained in two places, diverging over time, until a user reads a different answer to the same question than an engineer does. Content reuse is the technical mechanism that prevents this.

### Strategy 1: Single-Source, Multiple Renderings

The OpenAPI specification is the clearest example of this pattern. A single OpenAPI YAML file lives in `/docs/internal/system-design/api-specs/`. From this single source:

- The internal documentation site renders it with full annotations, internal notes, and implementation details.
- The external API reference strips internal annotations and adds consumer-friendly language, code examples, and conceptual introductions, then renders via Redoc or Scalar.
- CI validates the spec on every PR, ensuring that both rendered versions are always in sync with the same source.

Apply this pattern wherever possible. The canonical information lives in one place. Publishing pipelines decide how to render it for each audience.

### Strategy 2: MDX Components and Shared Includes

If using Docusaurus or a similar MDX-based documentation system, create shared MDX components or snippet files for content that appears in both streams.

The glossary is the canonical example. The glossary lives in `/docs/shared/glossary.md`. When the internal documentation renders a term, it pulls from this file. When the user-facing documentation renders a tooltip or inline definition, it pulls from the same file. A change to a glossary definition propagates to both documentation streams automatically.

Similarly, a shared `/docs/shared/api-concepts/pagination.md` file can be referenced in both the internal API design guide and the user-facing API reference without being duplicated.

### Strategy 3: Build-Time Filtering via Front Matter Tags

For content that is similar but not identical between internal and user-facing documentation, use front matter tags to control what appears in each build. A Docusaurus or MkDocs plugin can be configured to include or exclude pages based on an `audience` tag:

```yaml
---
title: Export API Overview
audience: [internal, external]  # Included in both builds
---
```

```yaml
---
title: Export Service — Internal Architecture
audience: [internal]  # Included in internal build only
---
```

```yaml
---
title: Getting Started with the Export API
audience: [external]  # Included in external build only
---
```

This approach works well for content that shares a broad topic but requires different levels of detail or different framing per audience. The risk is that it requires discipline — every page must have its audience tag, and the filtering logic must be tested.

### Strategy 4: Derive External Content from Internal Content

Rather than maintaining user-facing documentation in parallel with internal documentation, derive it. After the internal design document for a feature is written and reviewed, a technical writer (or an AI-assisted drafting workflow) produces the user-facing documentation from it. The internal document is the source of truth; the external document is the approved, curated excerpt.

This approach requires a clear workflow: the internal document is the gate. User-facing documentation cannot be published for a feature until the internal design documentation for that feature has been reviewed and approved. This ensures that the user-facing docs are always grounded in a verified internal source.

---

## Publishing Pipelines

The two documentation streams require two publishing pipelines. They share tooling and conventions but produce separate, independently deployable outputs.

### Internal Documentation Pipeline

**Trigger**: Every merge to the main branch that includes changes in `/docs/internal/` or `/docs/shared/`.

**Build steps**:

1. Validate Markdown formatting and front matter structure
2. Run Vale prose linting against internal style guide
3. Run lychee (link checker) against all internal documents
4. Lint all OpenAPI specs with Spectral against the internal ruleset
5. Render all Mermaid diagrams and validate they produce valid output
6. Build the internal documentation site
7. Run automated accessibility checks (WCAG AA) on the rendered site
8. Deploy to the internal documentation portal (access-controlled)

**Access control**: Deployed behind authentication. Accessible only to authenticated team members. Hosted on internal infrastructure or a private cloud deployment.

**URL structure**: `docs.internal.yourcompany.com`

### User-Facing Documentation Pipeline

**Trigger**: Every merge to the main branch that includes changes in `/docs/user/` or `/docs/shared/`. Additionally triggered on product release tags.

**Build steps**:

1. Validate Markdown formatting and front matter structure
2. Run Vale prose linting against external style guide (stricter tone and clarity rules than internal)
3. Run lychee against all external documents, including external links
4. Generate consumer-facing API reference from internal OpenAPI specs (stripping internal annotations, adding consumer language and examples)
5. Render all shared diagrams
6. Build the user-facing documentation site, versioned to the current release
7. Run automated accessibility checks (WCAG AA) on the rendered site
8. Spell check with an enhanced dictionary including product-specific terms
9. Deploy to the public documentation portal
10. Invalidate CDN cache

**Access control**: Public (or customer-authenticated, depending on the product's distribution model). Hosted on a CDN for performance.

**URL structure**: `docs.yourcompany.com`

### Shared Validation in Both Pipelines

Both pipelines run the following checks, ensuring shared content is always valid in both contexts:

- Glossary terms referenced in documents are defined in the glossary
- Diagram files in `/docs/shared/diagrams/` render without errors
- Cross-references between documents resolve correctly within their respective stream

---

## Review Processes

The review standards for internal and user-facing documentation differ, reflecting the different consequences of inaccuracy in each stream.

### Internal Documentation Review

**Who reviews**: The pull request author's technical peers. The Tech Lead reviews architecture and design documents. Runbooks are reviewed by the on-call rotation. Security documents are reviewed by the Security team.

**What is checked**:

- Technical accuracy: Is the information correct?
- Completeness: Is anything missing that would leave a reader without the full picture?
- Consistency with related documents: Does this contradict any existing document?
- Testability (for requirements and runbooks): Can someone follow these steps and produce the expected result?

**Turnaround time**: 24-48 hours for most documents. Architecture documents may warrant a scheduled review meeting.

**Standard**: Accurate and complete. Polish is secondary to correctness.

### User-Facing Documentation Review

**Who reviews**: Technical writer or product manager (primary), developer (for technical accuracy), and ideally a representative user (for clarity and usability). For API documentation, a developer who has not used the API before should verify the quickstart and common use cases.

**What is checked**:

- Technical accuracy: Is the information correct?
- Clarity: Is this understandable to the target audience? Are any terms unexplained?
- Completeness: Will a user be able to accomplish their goal using only this documentation?
- Tone: Is the language appropriate for the audience? Is it friendly, clear, and professional?
- Cross-references: Do all links to other user-facing documents work?

**Turnaround time**: 48-72 hours. A higher standard means a slightly longer review cycle.

**Standard**: Accurate, clear, and polished. Both accuracy and readability are gates.

---

## Maintenance & Synchronisation

The most common long-term failure mode of a two-version system is drift: the internal documentation evolves rapidly with the system, while the user-facing documentation falls behind. Or vice versa: user-facing documentation is heavily maintained for customer satisfaction while internal documentation atrophies.

Preventing drift requires both tooling and culture.

### Definition of Done Includes Both Streams

For any feature or change:

- If it changes internal behaviour, the relevant internal documentation is updated in the same PR as the code change.
- If it changes user-visible behaviour, the relevant user-facing documentation is updated in the same PR as the code change, or a documentation PR is filed, reviewed, and linked to the feature PR before the feature can be marked done.

Documentation debt is treated identically to code debt: it accumulates interest over time and is far more expensive to pay off later than to prevent upfront.

### Scheduled Documentation Health Reviews

**Monthly**: Review the user-facing getting started guide and a random sample of five feature documentation pages. Are they accurate against the current product? Have any recent feature changes made them stale?

**Quarterly**: Review all runbooks in the operations section. Have any been executed in the past quarter? Were they accurate? Update based on operational learnings. Test any runbook that has not been executed in the past six months in a staging environment.

**Per release**: Run the consumer API quickstart guide from scratch in a clean environment. Verify every code example executes correctly against the current API version. Verify all external links in user-facing documentation resolve.

**Annually**: Review the architecture document against the actual deployed system. Every section should be audited for accuracy. Update or supersede any ADRs that no longer reflect current decisions.

### Deprecation and Breaking Change Workflow

When a feature or API is being deprecated:

1. **Internal**: Update the internal design document and API spec to mark the feature as deprecated with a date. Create an ADR if the deprecation is a significant architectural decision.
2. **User-Facing**: Publish a deprecation notice at least 6 months before removal (or per your API versioning policy). The deprecation notice includes: what is being deprecated, when it will be removed, the recommended replacement, and a migration guide.
3. **On Removal**: Remove the deprecated feature's documentation from the active user-facing docs. Archive the migration guide with a note about the removal date. Update the internal docs to reflect the removal.

---

## Common Pitfalls and How to Avoid Them

**Pitfall 1: Treating the split as optional until later**
Teams often start with a single documentation stream with the intention of splitting it "when the project matures". In practice, the split never happens because refactoring documentation is difficult and low-priority. Start with the two-directory structure from day one, even if both are sparsely populated initially. Structure is easy to fill; retrofitting structure onto an existing flat structure is painful.

**Pitfall 2: Internal documentation that is too sanitised**
If internal documentation reads like public documentation — carefully worded, avoiding mention of trade-offs or known issues — it is failing its audience. Engineers need the honest version. A design document that says "we chose this approach because of time pressure and will need to revisit it" is more valuable than one that presents the decision as obviously correct.

**Pitfall 3: User-facing documentation that is too engineering-centred**
User-facing documentation written by engineers for engineers and then published to users is one of the most common documentation failures. "The export endpoint accepts a YYYY-MM-DD date format in the `from` query parameter" is engineering documentation. "Enter the start date for your export using the calendar picker, or type it in the format 2026-07-19" is user documentation. Ask: is this written from the user's goal or from the system's implementation?

**Pitfall 4: Content duplication instead of content reuse**
When the same information appears in both streams as separately maintained copies, they will diverge. Use the shared directory and content reuse mechanisms described above. Any piece of information with two maintained copies is a synchronisation problem waiting to happen.

**Pitfall 5: Runbooks that have never been tested**
A runbook that looks complete on paper but has never been followed during an actual incident is an untested assumption. Game days — scheduled exercises where on-call engineers execute runbooks against a staging environment under simulated failure conditions — are the only reliable way to validate that runbooks work. Schedule them, document the results, and update the runbooks based on findings.

**Pitfall 6: User-facing API documentation that is a raw export of the internal OpenAPI spec**
The internal OpenAPI spec is a contract for engineers. The consumer-facing API reference is documentation for developers integrating with your product. They are not the same thing. The consumer reference needs: a conceptual introduction to what the API is for, an authentication guide written for a first-time user, code examples in multiple languages, clear explanations of pagination and rate limiting as standalone concepts, and error handling guidance that goes beyond listing error codes.

**Pitfall 7: Publishing pipelines that deploy both streams together**
If the internal and user-facing documentation build and deploy together, a documentation review bottleneck in one stream blocks the other. They should be independent pipelines with independent deployment schedules. Internal documentation deploys on every merge. User-facing documentation deploys on release or when explicitly triggered.

---

## Content Decision Flowchart

When any team member needs to decide where to create a new document:

```text
Is this content for someone outside the engineering team?
├── No → Internal Documentation (/docs/internal/)
└── Yes
    ├── Does it contain sensitive information (security, trade-offs, internal architecture)?
    │   ├── Yes → Internal Documentation (/docs/internal/)
    │   └── No
    │       ├── Is it the same information that also exists internally?
    │       │   ├── Yes → Can it be derived/generated from the internal version?
    │       │   │         ├── Yes → Internal is canonical; derive external from it
    │       │   │         └── No → Create both; flag for content reuse review
    │       │   └── No → User-Facing Documentation (/docs/user/)
    │       └── Does it apply equally to both internal and external readers?
    │           ├── Yes → Shared Content (/docs/shared/)
    │           └── No → User-Facing Documentation (/docs/user/)
```

---

## Tooling Configuration Summary

Both documentation streams use the same underlying tooling stack with different configurations.

### Documentation Sites

| | Internal | User-Facing |
|-|----------|-------------|
| **Generator** | Docusaurus (internal theme) | Docusaurus (branded theme) |
| **Search** | Local Lunr index | Algolia DocSearch |
| **API Reference** | Raw OpenAPI with Swagger UI (full detail) | Redoc or Scalar (consumer-curated) |
| **Hosting** | Private cloud / internal network | CDN (Cloudflare, Vercel, etc.) |
| **Access** | SSO-authenticated | Public or customer SSO |

### CI/CD Validation

| Check | Internal Pipeline | User-Facing Pipeline |
|-------|------------------|---------------------|
| Markdown lint | ✅ | ✅ |
| Vale prose lint | ✅ (internal rules) | ✅ (external rules — stricter) |
| Link validation | ✅ (internal links) | ✅ (internal + external links) |
| Spell check | ✅ | ✅ (+ product dictionary) |
| OpenAPI lint (Spectral) | ✅ | ✅ |
| Diagram rendering | ✅ | ✅ |
| Accessibility check | ✅ | ✅ (WCAG AA required) |
| Dead code examples | ❌ | ✅ (API examples must execute) |

### Vale Configuration

Vale supports separate style guides per publishing target. Use a `.vale.ini` configuration file that references different style packages depending on which pipeline is running. Internal documentation uses a technical-accuracy-focused style guide. User-facing documentation adds tone, readability, and clarity rules on top of accuracy checks.

---

## Summary: The Two Non-Negotiable Rules

All the complexity in this document reduces to two rules:

**Rule 1: Never let internal content reach user-facing documentation without deliberate curation.**
Internal documentation is honest, technical, and private. User-facing documentation is curated, goal-oriented, and public. Content does not move between them automatically. It is deliberately adapted.

**Rule 2: Never maintain the same information in two places without a content reuse mechanism.**
Duplication is a synchronisation debt. Every piece of information has exactly one canonical source. All other appearances of that information are derived from the canonical source, either by reference or by a controlled publishing process.

Everything else in this guide is a method for implementing these two rules consistently across a real-world project lifecycle.

---

> **Return to Part 1:** `docs-phases-complete.md` for the complete guide to what to document and when, across all ten phases of the project lifecycle.
