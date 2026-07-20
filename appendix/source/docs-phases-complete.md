# Documentation as Code — Complete Phase Guide

<!-- markdownlint-disable MD024 MD036 -->

> **This document is Part 1 of 2.**
> It defines *what* to document and *when*, organized by project phase.
> Part 2 (`two-versions-strategy-complete.md`) defines *where* each document lives, *who* it is for, and how Internal and User-facing documentation are structured, maintained, and published as two coordinated but distinct outputs from the same source.
> The two documents must be read together. Every phase described here has a counterpart mapping in Part 2.

---

## What Documentation as Code Actually Means

Documentation as Code (Docs as Code) is the practice of applying software engineering discipline to documentation. This means documentation is:

- **Stored in version control** (Git) alongside or adjacent to the code it describes.
- **Reviewed via pull requests**, with the same rigour applied to code review.
- **Tested automatically** — links validated, spelling checked, OpenAPI specs linted, diagrams rendered and verified.
- **Released in lockstep with the software** — a feature is not complete until its documentation is updated.
- **Owned by the team**, not outsourced to a documentation department that receives final outputs.

The goal is not just a well-organized file system. The goal is that documentation is always accurate, always reviewable, always discoverable, and never an afterthought. When you open a pull request for a new feature, the documentation change is part of that PR. When you deploy, the docs site deploys with it. When you deprecate an API endpoint, the deprecation notice is committed in the same breath.

This guide follows ten phases — Phase 0 through Phase 9 — that mirror the lifecycle of a software project. The phases are not rigid silos. In practice, most projects run Phase 3 and Phase 4 in parallel, and Phase 8 never ends. What the phases provide is a *mental model*: a way to ask, at any given moment, "what kind of documentation are we producing right now, who owns it, what does it need to contain, and where does it live?"

---

## How This Connects to the Two-Version System

Before diving into individual phases, it is essential to understand that every document produced across these ten phases falls into one of three categories:

1. **Internal Documentation** — technical, honest, deep, and private. Intended for developers, architects, DevOps engineers, and new team members. Can contain trade-offs, known limitations, debugging tips, and internal decision rationale.
2. **User-Facing Documentation** — curated, clean, task-oriented, and public (or semi-public). Intended for end users, API consumers, customers, and non-technical stakeholders.
3. **Shared Content** — diagrams, glossaries, changelogs, and other artifacts that appear in both versions, either verbatim or with minor adaptation.

Part 2 of this document set describes exactly how to structure, maintain, and publish these two streams. In this guide, every phase will explicitly note which version its outputs belong to.

A rough rule of thumb:
- **Phases 0–6** produce content that is primarily **Internal**.
- **Phase 7** produces content that is primarily **User-Facing**.
- **Phase 8** produces content that spans **both**.
- **Phase 9** wraps up both streams.

---

## Phase Overview

| Phase | Name | Timing | Primary Audience | Documentation Version |
|-------|------|--------|------------------|-----------------------|
| **0** | Project Vision & Charter | Before requirements | Executives, stakeholders, team leads | Internal |
| **1** | User & Business Requirements | Early discovery | Product, business analysts, developers | Internal |
| **2** | Architecture & System Design | After requirements, before coding | Architects, senior engineers | Internal |
| **3** | Detailed System Design | Parallel to early implementation | Senior developers, architects | Internal |
| **4** | Implementation & Code Documentation | During coding | All developers, contributors | Internal |
| **5** | Testing & Quality Assurance | Parallel to implementation | QA, developers, security team | Internal |
| **6** | Deployment & Operations | Before go-live | DevOps, SRE, on-call engineers | Internal |
| **7** | User & End-User Documentation | Before and after go-live | End users, API consumers, customers | User-Facing |
| **8** | Maintenance & Evolution | Ongoing | Whole team + users | Both |
| **9** | Retirement & Archival | End of life | Project lead, stakeholders | Both |

---

## Phase 0 — Project Vision & Charter

### Purpose

Before a single line of code is written — and often before requirements are gathered — someone must articulate *why this project exists*. Phase 0 documentation captures the foundational intent of the project. It answers the questions that everything downstream depends on: What problem are we solving? For whom? What does success look like? What are we explicitly *not* doing?

Without this documentation, projects drift. Scope expands without a reference point. Teams make conflicting assumptions. Months later, when someone asks "why did we build it this way?", no one has a clear answer. A well-written project charter prevents all of this.

### Timing

Phase 0 happens *before* requirements gathering begins. It is the document that authorizes requirements gathering to start. In Agile contexts, this is often done during project inception or a kick-off sprint. In waterfall or hybrid projects, this maps to the Project Initiation Document stage.

### Ownership & Review

**Primary Owner:** Product Owner or Project Sponsor  
**Contributors:** Tech Lead, Business Analysts, key stakeholders  
**Reviewers:** Executive sponsor, Legal (if applicable), Tech Lead  
**Review Process:** Formal sign-off required before Phase 1 begins

### What to Document

**Vision Statement**
A single, clear paragraph — ideally two to four sentences — describing what the project is, who it is for, and what fundamental problem it solves. This is not a marketing tagline. It is a working definition that the team can return to when decisions need to be made.

*Example: "This project builds a self-service data export platform that allows enterprise customers to download their account data in multiple formats without engineering intervention. It reduces support ticket volume, improves compliance posture, and gives customers autonomy over their data."*

**Business Objectives & Success Metrics (KPIs)**
List the specific, measurable outcomes the business expects from this project. Each objective should have a corresponding metric and a target value. Vague objectives ("improve performance") are not acceptable here. Every KPI must be something you can actually measure.

*Example:*
- *Reduce data export support tickets by 60% within 3 months of launch.*
- *Achieve 80% of enterprise customers using self-service export within 6 months.*
- *Maintain export job completion time under 30 seconds for datasets up to 1 million rows.*

**Scope Definition — In and Out**
Explicitly list what is in scope and, just as importantly, what is explicitly out of scope. Out-of-scope items prevent scope creep and provide a documented basis for rejecting feature requests that do not belong in this project.

**Stakeholders & RACI**
List every stakeholder — internal and external — and their relationship to the project. A basic RACI (Responsible, Accountable, Consulted, Informed) matrix ensures that everyone knows their role before work begins.

**Constraints & Assumptions**
Document the constraints (budget, timeline, technology mandates, regulatory requirements) and assumptions (the things you are treating as true but have not fully verified). Unverified assumptions are risks. Recording them here means they can be validated during Phase 1.

**High-Level Risk Register**
A short, initial list of the biggest risks to project success. This is not an exhaustive risk analysis — that comes later — but a starting point. Include the risk, the likelihood (High/Medium/Low), the impact (High/Medium/Low), and an initial mitigation thought.

### Documentation Version
All Phase 0 content lives in **Internal Documentation** under `/docs/internal/charter/`. None of this content is user-facing.

### Definition of Done
- [ ] Vision statement reviewed and approved by executive sponsor
- [ ] All KPIs are measurable and have baseline and target values
- [ ] Scope document clearly lists both in-scope and out-of-scope items
- [ ] RACI matrix signed off by all stakeholders
- [ ] Constraints and assumptions documented and flagged for validation
- [ ] Initial risk register seeded with at least three identified risks
- [ ] Document committed to version control under `/docs/internal/charter/`
- [ ] Pull request approved by Tech Lead before Phase 1 begins

### Common Mistakes to Avoid
- Writing a vision statement that sounds like a marketing pitch. The charter is for the team, not for sales.
- Skipping the out-of-scope section. It feels unnecessary until scope creep hits.
- Treating the charter as a one-time artifact. Revisit it at the start of every major milestone to confirm the project is still solving the right problem.

---

## Phase 1 — User & Business Requirements

### Purpose

Phase 1 translates the vision from Phase 0 into concrete, actionable requirements. Where Phase 0 answers "why are we building this?", Phase 1 answers "what exactly are we building?". This is the phase where user needs are validated, use cases are defined, and acceptance criteria are written.

Good requirements documentation is the single most effective way to prevent expensive rework later. When developers and QA have clear, testable requirements with explicit acceptance criteria, they can build and verify with confidence. When they do not, they build based on assumptions and discover misalignment at demo time.

### Timing

Phase 1 begins after Phase 0 is approved and runs through the early stages of a project. In iterative projects, a high-level requirements document is created up front, and individual user stories are refined on a rolling basis (typically two sprints ahead of development).

### Ownership & Review

**Primary Owner:** Product Manager / Business Analyst  
**Contributors:** UX Researchers, Subject Matter Experts, key end users  
**Reviewers:** Product Owner, Tech Lead (for feasibility), QA Lead (for testability)  
**Review Process:** Each requirement must be reviewed for completeness, testability, and feasibility before entering the development backlog

### What to Document

**Functional Requirements**
These describe what the system must do. Write them as clear, unambiguous statements. Each requirement must be testable — if you cannot write a test case for it, the requirement is not specific enough.

*Format: "The system shall [action] when [condition], resulting in [outcome]."*

*Example: "The system shall allow authenticated enterprise users to initiate a data export for any date range within the last 24 months. The export shall begin processing within 5 seconds of the request being submitted."*

**Non-Functional Requirements**
These define the quality attributes of the system. They are frequently under-documented and then used as ammunition in post-launch retrospectives. Non-functional requirements cover:

- **Performance**: response time targets, throughput, concurrent user capacity
- **Security**: authentication and authorisation requirements, data handling policies, compliance mandates (GDPR, SOC 2, HIPAA, etc.)
- **Reliability & Availability**: uptime targets, acceptable failure rates, recovery time objectives
- **Scalability**: expected growth rates, load targets at 6, 12, and 24 months
- **Accessibility**: WCAG compliance level, assistive technology support requirements
- **Internationalisation**: language support, date/currency formatting, right-to-left text

**User Stories & Acceptance Criteria**
Write each user story in the format:
*"As a [persona], I want to [goal], so that [reason]."*

Each story must be accompanied by acceptance criteria written in Given/When/Then format. These criteria become the basis for QA test cases in Phase 5.

*Example:*
- *User Story: As an enterprise administrator, I want to download my organisation's usage data as a CSV, so that I can import it into our internal reporting tool.*
- *Acceptance Criteria:*
  - *Given I am an authenticated enterprise admin, when I navigate to the Data Export page, then I see an option to export in CSV, JSON, and XLSX formats.*
  - *Given I have submitted an export request, when the export is ready, then I receive an email notification with a download link.*
  - *Given the export link, when I click it, then the download begins within 2 seconds and the file is complete and not corrupted.*

**User Personas**
Document the distinct user types who will interact with the system. Each persona should include: who they are, what they are trying to achieve, their technical proficiency level, and their most significant pain points with the current state. Personas prevent the trap of building for an imaginary user.

**User Journey Maps**
For each primary persona, document the end-to-end journey through the feature or system. This surfaces gaps in the experience that individual requirements might miss.

**Prioritised Backlog**
Organise all requirements and stories into a prioritised backlog using a clear framework (MoSCoW: Must Have, Should Have, Could Have, Won't Have — or similar). Every item in the Must Have category defines the Minimum Viable Product.

### Documentation Version
All Phase 1 content lives in **Internal Documentation** under `/docs/internal/requirements/`. User journey maps and simplified persona descriptions may later be adapted for user-facing onboarding materials in Phase 7, but the source documents live internally.

### Definition of Done
- [ ] All functional requirements written in testable format and reviewed by QA for testability
- [ ] Non-functional requirements documented with specific numeric targets (not vague statements)
- [ ] User stories written with Given/When/Then acceptance criteria
- [ ] At least three user personas documented with validated pain points
- [ ] User journey maps completed for all primary personas and primary use cases
- [ ] Backlog prioritised using MoSCoW or equivalent framework
- [ ] Tech Lead has reviewed all Must Have requirements for technical feasibility
- [ ] All documents committed to version control and PR approved

### Common Mistakes to Avoid
- Writing requirements that describe the solution rather than the need. "The button should be green" is a design decision masquerading as a requirement.
- Leaving acceptance criteria vague. "The export should be fast" is not a criterion. "The export should complete in under 30 seconds for files up to 100MB" is.
- Neglecting non-functional requirements until after launch, when they are much more expensive to address.

---

## Phase 2 — Architecture & System Design

### Purpose

Phase 2 is the most consequential documentation phase for technical teams. It translates validated requirements into a high-level technical blueprint. The architecture document explains how the system is structured, how its components communicate, how it handles failures, and what technical decisions were made and why. It is the document that every new engineer should read on day one, and the document that every senior engineer should update after every significant architectural change.

Good architecture documentation is not about producing diagrams for their own sake. It is about making implicit decisions explicit. Every architectural choice involves a trade-off. Phase 2 documentation makes those trade-offs visible, recorded, and rationale-backed, so that future teams understand not just *what* was decided but *why*, and what alternatives were considered and rejected.

### Timing

Phase 2 begins after Phase 1 requirements are stable and before detailed implementation design (Phase 3) starts. In practice, architecture design often begins in parallel with the final stages of requirements gathering, as the high-level technical shape of a solution can be sketched while individual requirements are still being refined.

### Ownership & Review

**Primary Owner:** Solution Architect or Principal Engineer  
**Contributors:** Tech Lead, Senior Engineers, Security Architect, Data Architect (if applicable)  
**Reviewers:** CTO or Engineering Manager, external peer reviewers if available, Security team for the security sections  
**Review Process:** Architecture Decision Records (ADRs) require a minimum 48-hour open review period. Major architectural choices must achieve explicit written approval, not passive consensus.

### What to Document

**System Context Diagram (C4 Level 1)**
The highest-level diagram. Shows the system as a black box and depicts its relationships with external users, systems, and data sources. Anyone in the organisation — technical or not — should be able to read this diagram and understand what the system does and how it fits into the broader ecosystem.

Use the C4 model format. Every external system and user role that interacts with your system appears here. Every integration point is named. If an external system is a third-party SaaS product, include both the product name and what it provides.

**Container Diagram (C4 Level 2)**
Zoom one level in. Show the deployable units (containers) that make up the system: web servers, API services, message queues, databases, caches, background workers, CDN, etc. Each container should be labelled with its technology. The lines between containers show communication protocols and data flows.

This is the document engineers use to understand "what is actually running in production". It should be accurate enough that an on-call engineer could consult it during an incident.

**Component Diagrams (C4 Level 3, selective)**
For complex containers — particularly the main API service or a complex data pipeline — document the internal components. This is only needed where the internal structure is non-obvious. Not every container needs a component diagram.

**Data Architecture**
Document the data model at a high level. This is not the full database schema (that is Phase 3), but rather:
- What types of data does the system store?
- What is the retention policy for each data type?
- How does data flow through the system from ingestion to storage to output?
- What data is sensitive (PII, financial, health) and how is it protected at each stage?
- What are the data consistency requirements (eventual vs strong consistency)?

**Integration Architecture**
Document every integration point with external systems. For each integration, record: the external system name and purpose, the integration pattern (REST, event stream, file transfer, webhook, etc.), who owns the integration on both sides, the data exchanged, and the failure mode behaviour (what happens if the external system is unavailable?).

**Cross-Cutting Concerns**
These are the architectural qualities that apply across the entire system rather than to a single component. Each must be addressed explicitly:

- **Authentication & Authorisation**: What mechanism (OAuth 2.0, JWT, SAML, API keys)? What permission model (RBAC, ABAC)? Who manages identity?
- **Logging**: What is logged? In what format? Where does it go? What is the retention policy?
- **Observability**: What metrics are emitted? What tracing strategy is used? How are logs, metrics, and traces correlated?
- **Error Handling Strategy**: How are errors classified (user error vs system error vs transient)? How are they surfaced to callers? How are they alerted on?
- **Resilience & Fault Tolerance**: Circuit breakers? Retry logic? Graceful degradation? Bulkheads?
- **Caching Strategy**: What is cached? For how long? How is cache invalidated?
- **Configuration Management**: How is environment-specific configuration managed? How are secrets stored and rotated?

**Architecture Decision Records (ADRs)**
Every significant technical decision made during this phase — and throughout the project — should be recorded as an ADR. An ADR is a short document that captures:

1. **Context**: What situation prompted this decision?
2. **Decision**: What was decided?
3. **Alternatives Considered**: What other options were evaluated?
4. **Rationale**: Why was this decision made over the alternatives?
5. **Consequences**: What are the trade-offs, risks, and constraints that result from this decision?
6. **Status**: Proposed / Accepted / Deprecated / Superseded

ADRs are immutable once accepted. If a decision is later reversed, a new ADR is written superseding the old one — the old one is never deleted. This creates a complete, auditable history of architectural evolution.

**Technology Selection Rationale**
For every major technology choice (database type, cloud platform, programming language, framework, message broker, etc.), document:
- Why this technology was selected
- What alternatives were evaluated
- What vendor lock-in risks exist
- What the upgrade/migration path looks like

**Scalability & Cost Estimates**
Document the expected load profile at launch and at 6/12/24 months. Translate this into infrastructure sizing and cost estimates. This is not a financial commitment but a planning reference. Include the assumptions behind the estimates so they can be revisited when assumptions change.

### Documentation Version
All Phase 2 content lives in **Internal Documentation** under `/docs/internal/architecture/`. ADRs live under `/docs/internal/decisions/`. High-level context diagrams and integration architecture overviews may be referenced (not reproduced) in user-facing API documentation in Phase 7.

### Definition of Done

- [ ] C4 Level 1 (Context) and Level 2 (Container) diagrams completed and rendered as diagram-as-code (Mermaid or C4-PlantUML)
- [ ] Data architecture document including sensitivity classifications completed
- [ ] Integration architecture documented for every external system
- [ ] All six cross-cutting concerns addressed in writing (not just listed)
- [ ] At least one ADR per major technology choice, each with alternatives and rationale
- [ ] Scalability estimates documented with assumptions
- [ ] Security Architect has reviewed and signed off on auth and data protection sections
- [ ] Architecture review meeting held with Tech Lead, senior engineers, and at least one external reviewer
- [ ] All documents in version control, PR approved

### Common Mistakes to Avoid

- Creating diagrams without maintaining them. A stale architecture diagram is worse than no diagram because it actively misleads.
- Writing ADRs only for technology choices and ignoring architectural patterns (e.g., why event-driven over synchronous, why monolith over microservices).
- Treating architecture documents as one-time deliverables. They must be updated whenever significant architectural changes occur.
- Skipping the "alternatives considered" section in ADRs. This is often the most valuable part.

---

## Phase 3 — Detailed System Design

### Purpose

Where Phase 2 defines the shape of the system from the outside, Phase 3 defines it from the inside. This is where senior engineers document the internal workings of each component in enough detail that another engineer could implement them correctly — or understand why an existing implementation made certain choices.

Phase 3 documentation is the bridge between architecture and code. It is detailed enough to be used for code reviews and technical interviews, but not so prescriptive that it dictates implementation syntax.

### Timing

Phase 3 runs in parallel with early implementation. It is not a gate before coding begins; it is a living set of design documents that evolve alongside the first implementation sprints. Some teams write detailed design documents before implementing a module (design-first). Others implement a prototype and then write the design document to reflect and validate what was built (document-as-you-learn). Both approaches are valid as long as the documents exist and are accurate by the time the module is merged to the main branch.

### Ownership & Review

**Primary Owner:** Senior Developer responsible for the module or subsystem  
**Contributors:** Other developers working on the module, Architect for oversight  
**Reviewers:** Tech Lead, at least one peer engineer unfamiliar with the module  
**Review Process:** Design documents reviewed via PR before implementation is considered complete

### What to Document

**Module & Service Specifications**
For each significant module or service, document:

- **Responsibility**: What does this module own? What is it explicitly not responsible for?
- **Interface**: What does it expose? (Functions, events, REST endpoints, gRPC methods)
- **Dependencies**: What does it depend on? (Other modules, external systems, infrastructure)
- **State**: Does it maintain state? If so, how and where?
- **Threading/Concurrency Model**: Is it single-threaded? Asynchronous? How does it handle concurrent requests?
- **Error Model**: What errors can it produce? How are they categorised and surfaced?

**Database Schema & Migration Strategy**
Document the complete database schema: every table or collection, every field with its type and constraints, every index, and every foreign key relationship. Explain the reasoning behind non-obvious schema decisions (why denormalise here, why use JSONB instead of a relational structure there).

Alongside the schema, document the migration strategy:

- How are schema migrations managed? (Flyway, Liquibase, Alembic, etc.)
- What is the policy for backwards-incompatible changes?
- How are zero-downtime migrations handled for critical tables?
- What is the rollback procedure if a migration fails in production?

**API Specifications**
Document every API endpoint in OpenAPI 3.x (Swagger) format. The spec should include, for every endpoint:

- HTTP method and path
- All path parameters, query parameters, and headers (required and optional)
- Request body schema with field descriptions, types, and validation rules
- All possible response codes with their schemas and descriptions
- Authentication requirements
- Rate limiting rules
- At least two request/response examples (happy path and a representative error)

The OpenAPI spec is both documentation and a contract. It should be validated by CI on every PR. Consumer-driven contract tests should be generated from it in Phase 5.

**Sequence Diagrams for Complex Flows**
For any flow that involves more than two components interacting in a non-trivial sequence, document it as a sequence diagram. This includes authentication flows, payment processing, data export pipelines, asynchronous job processing, and any flow where failure handling is complex. Use Mermaid sequence diagram syntax so diagrams live as code in the repository.

**State Machines**
For any entity in the system that has a lifecycle — an order, a job, a user account, a subscription — document its state machine. List every valid state, every valid transition between states, the trigger for each transition, and any side effects (events emitted, emails sent, records created).

**Security Design Details**
Expand on the security cross-cutting concern from Phase 2 with implementation-level specifics:

- Threat model: what are the identified threat vectors? (Use STRIDE or OWASP methodology)
- Data classification: which fields contain PII, financial data, or sensitive business data?
- Encryption: what is encrypted at rest and in transit? What keys are used and how are they managed?
- Input validation: what validation is applied at each entry point?
- Authorisation: what does the permission check look like for each API endpoint?

**Frontend Architecture (If Applicable)**
If the system has a frontend, document:

- Component hierarchy
- State management strategy (Redux, Zustand, React Query, server state vs client state)
- Routing structure
- Design system and component library used
- Performance strategy (code splitting, lazy loading, image optimisation)
- Accessibility implementation approach

### Documentation Version

All Phase 3 content lives in **Internal Documentation**. OpenAPI specs live under `/docs/internal/api-specs/` and are the source from which user-facing API reference documentation is generated in Phase 7 (the user-facing version strips internal annotations and adds consumer-friendly language).

### Definition of Done

- [ ] Module specification written for every significant module, reviewed by at least one peer
- [ ] Database schema fully documented with reasoning for non-obvious decisions
- [ ] Migration strategy documented including zero-downtime and rollback procedures
- [ ] OpenAPI spec validated by CI linting (Spectral or equivalent)
- [ ] Sequence diagrams written for all multi-component flows
- [ ] State machines documented for all stateful entities
- [ ] Threat model reviewed by Security team
- [ ] Design documents committed to version control and linked from the relevant module's README

### Common Mistakes to Avoid

- Writing design documents after implementation as a box-ticking exercise. They should guide and validate the implementation, not describe it retrospectively without critical reflection.
- Creating OpenAPI specs that describe only happy paths. Every error response needs to be documented.
- Skipping state machine documentation for stateful entities. The hidden complexity in state transitions is where the most bugs live.

---

## Phase 4 — Implementation & Code Documentation

### Purpose

Phase 4 documentation makes the codebase understandable to anyone who needs to work with it. This is not about explaining what the code does line by line — well-written code should be largely self-explanatory. It is about providing the context and orientation that code itself cannot convey: how to get started, how the pieces fit together, what conventions to follow, and why certain decisions were made in the implementation.

The goal is that a competent engineer with no prior exposure to this codebase can become productive within one working day.

### Timing

Phase 4 documentation is produced during and continuously throughout implementation. It is not a separate writing phase — it is embedded in the engineering workflow. Every PR should include any necessary documentation updates as a first-class component of the change.

### Ownership & Review

**Primary Owner:** Developer who writes the code  
**Contributors:** All developers on the team  
**Reviewers:** Tech Lead, peers in PR review  
**Review Process:** Documentation updates are reviewed as part of code PR review. A PR that adds a new module without updating the relevant README or architecture overview is not mergeable.

### What to Document

**Repository README**
The root README is the front door to the codebase. It must contain:

- **What this is**: One to three sentences describing the system.
- **Prerequisites**: Everything needed before running the project locally (Node version, Docker, specific CLI tools, environment variable setup).
- **Local development setup**: Step-by-step instructions to get from a freshly cloned repository to a running local environment. Every step must be tested and accurate. If it has not been tested on a clean machine recently, it is probably wrong.
- **Running tests**: How to run unit tests, integration tests, and end-to-end tests.
- **Key commands**: The ten most common commands a developer will need, with explanations.
- **Architecture overview**: A brief summary (two to four paragraphs) of how the system is structured, with a link to the full architecture document in Phase 2.
- **Links**: Links to the internal documentation site, CI/CD pipelines, staging environment, and the team's communication channels.

**Per-Service / Per-Package READMEs**
In a monorepo or multi-service architecture, every service or package needs its own README that covers: what this specific service does, how to run it in isolation, what its configuration parameters mean, and how it fits into the larger system.

**Inline Code Comments**
Comment the *why*, not the *what*. The code itself shows what is happening. Comments explain why a specific approach was taken when the reason is not obvious from the code alone, or they flag complexity that warrants special attention.

Good comment: `// Using a mutex here rather than a channel to avoid priority inversion in the scheduler.`  
Bad comment: `// Increment i by 1` (restates code that speaks for itself)

Document all public APIs, functions, and types with proper docstrings in the language's standard format (JSDoc, GoDoc, Python docstrings, Javadoc, etc.). These are the source from which generated API documentation is produced.

**Code Architecture Decisions (Micro-ADRs)**
For implementation-level decisions that do not rise to the level of a system ADR but still warrant explanation, use inline or co-located micro-ADRs. A comment block at the top of a particularly complex module explaining why it is structured the way it is, what was tried and abandoned, and what the known limitations are is extremely valuable.

**Contribution Guidelines**
Document how to contribute to the codebase:

- Branch naming conventions
- Commit message format (e.g., Conventional Commits)
- PR template and requirements
- Code style and linting setup
- How to write and run tests
- How to update documentation as part of a feature change
- How to run the full CI pipeline locally before submitting a PR

**Code Style & Conventions**
If your linter and formatter configuration does not capture every convention, document the ones it does not. This includes naming conventions, error handling patterns, test structure conventions, and any patterns the team has agreed to follow consistently.

**Local Development Environment Guide**
A detailed guide for setting up the development environment. This should be sufficiently detailed that a developer with no previous exposure to the project can follow it on a clean machine and have a working local environment within one hour. It should cover common errors and how to resolve them.

### Documentation Version

Phase 4 content lives in **Internal Documentation**. The root README, per-service READMEs, and contribution guidelines live in the repository itself. The internal documentation site aggregates and renders them.

### Definition of Done

- [ ] Root README contains all required sections and has been tested on a clean environment within the last 30 days
- [ ] Every service or package has its own README
- [ ] All public functions, types, and API surfaces have docstrings
- [ ] Contribution guidelines document is complete and linked from the root README
- [ ] Code style conventions are documented for any rules not enforced by linting
- [ ] Local development guide covers common setup errors and resolutions

### Common Mistakes to Avoid

- Writing a local setup guide and never testing it on a clean machine. Within weeks it will be wrong.
- Treating documentation updates as optional additions to PRs. They are mandatory.
- Writing too many inline comments that describe obvious code. This creates noise that makes the genuine "why" comments harder to find.

---

## Phase 5 — Testing & Quality Assurance

### Purpose

Phase 5 documentation proves that the system works as specified. It creates a permanent, reviewable record of the test strategy, the test cases, the test results, and the quality gates that must be passed before software can be released. This documentation is particularly important for compliance, security audits, and debugging regressions.

### Timing

Phase 5 runs in parallel with Phase 4 and Phase 3. Test documentation begins as soon as acceptance criteria from Phase 1 are available. Test-Driven Development (TDD) means test documentation precedes implementation. At minimum, test cases should be documented before a module is considered complete.

### Ownership & Review

**Primary Owner:** QA Lead  
**Contributors:** Developers (unit and integration tests), Security team (security tests), Performance engineers (load tests)  
**Reviewers:** Tech Lead, Product Owner (for acceptance test sign-off)  
**Review Process:** Test plans reviewed via PR. Test results reviewed before each release gate.

### What to Document

**Test Strategy**
The test strategy is a high-level document that defines the approach to testing across the entire project. It covers:

- What types of testing will be performed (unit, integration, end-to-end, contract, performance, security, accessibility, smoke, regression)
- The test coverage targets for each type
- Who is responsible for each type of testing
- Which parts of the system are in scope and out of scope for automated testing
- The test environment strategy (local, CI, staging, production-like)
- The approach to test data management (how is test data created, isolated, and cleaned up?)
- How testing integrates into the CI/CD pipeline

**Test Cases**
For each acceptance criterion from Phase 1, write a corresponding test case. Test cases should specify:

- **Test Case ID**: Unique identifier
- **Title**: What is being tested
- **Pre-conditions**: What must be true before the test runs
- **Test Steps**: The exact sequence of actions
- **Expected Result**: What should happen
- **Actual Result**: Filled in during execution
- **Status**: Pass / Fail / Blocked / Not Run
- **Links**: To the requirement and the automated test (if applicable)

**Test Coverage Reports**
Automated coverage reports should be generated by CI and committed or published as part of the CI artefacts. Document the coverage targets and how to interpret the reports. Note which coverage targets are gates (PRs cannot merge below X%) and which are advisory.

**Performance Benchmark Results**
For any system with performance requirements (which should be all of them, per Phase 1 NFRs), document baseline benchmark results. Record the test conditions, the test tool used, the load profile, and the results. Store these so that future performance tests can be compared against the baseline.

**Security Test Results**
Document the output of:

- Static analysis (SAST) scans
- Dependency vulnerability scans
- Dynamic analysis (DAST) results (if applicable)
- Penetration test reports (if applicable)
- The remediation status of every finding

These documents are often required for compliance certifications and security audits.

**Bug & Issue Tracking Conventions**
Document the conventions for recording, prioritising, and resolving bugs found during QA. What priority levels exist? What does each mean? What is the SLA for fixing each priority level before release?

### Documentation Version

All Phase 5 content lives in **Internal Documentation** under `/docs/internal/testing/`. Test results and coverage reports are often automatically published to the internal documentation site via CI.

### Definition of Done

- [ ] Test strategy document reviewed and approved by Tech Lead and QA Lead
- [ ] Test cases written for 100% of Must Have acceptance criteria from Phase 1
- [ ] Automated test coverage meeting stated targets, enforced in CI
- [ ] Performance benchmarks run against a production-equivalent environment and results stored
- [ ] SAST and dependency scans clean (or all findings triaged with accepted-risk documentation)
- [ ] All test artefacts committed or linked from version control

---

## Phase 6 — Deployment & Operations (Runbooks)

### Purpose

Phase 6 documentation enables the system to be deployed, operated, monitored, and recovered from failure by people who were not involved in building it. An on-call engineer paged at 2am should be able to understand what is wrong and what to do about it using only this documentation. Operations documentation is ultimately a matter of system reliability.

### Timing

Phase 6 documentation begins during Phase 4 and must be complete and reviewed before any production deployment. It is never complete — it is updated continuously as the system evolves and as new operational knowledge is gained.

### Ownership & Review

**Primary Owner:** DevOps / SRE Lead  
**Contributors:** Developers (for service-specific context), Security team (for access controls)  
**Reviewers:** On-call engineers (who must validate that runbooks are executable), Security, Engineering Manager  
**Review Process:** New runbooks are reviewed via PR. Runbooks are live-tested during game days and updated based on findings.

### What to Document

**Deployment Pipelines**
Document the entire CI/CD pipeline:

- Every stage in the pipeline and what it does
- What must pass for a build to proceed to the next stage
- How to trigger a deployment to each environment (automated vs manual approval gates)
- How to roll back a deployment
- How to deploy a hotfix outside of the normal release cycle

**Infrastructure as Code Overview**
All infrastructure should be managed as code (Terraform, Pulumi, CloudFormation, etc.). Document:

- Where the IaC code lives
- How to apply infrastructure changes
- The environment hierarchy (dev, staging, production)
- How secrets and configuration are managed per environment

**Monitoring & Observability Setup**
Document:

- What metrics are collected and from where
- What the dashboards show and how to read them
- What alerts exist, what they mean, and what the first-response action is for each
- How to access logs (what log aggregation tool, how to filter and search, log format reference)
- How to trace a request end-to-end through the system

**Runbooks — Incident Response**
For every operational scenario that a first-responder might encounter, write a runbook:

- **Title**: What is this runbook for?
- **Symptoms**: How does this scenario manifest? (Which alert fired? What does the user see?)
- **Probable Causes**: What are the most likely causes of this symptom?
- **Diagnosis Steps**: Step-by-step instructions to confirm the cause.
- **Remediation Steps**: Step-by-step instructions to resolve each probable cause.
- **Escalation Path**: If the runbook does not resolve the issue, who do you contact and how?
- **Post-Incident Actions**: What should be done after the immediate issue is resolved? (File incident report, create follow-up tickets, etc.)

Runbooks must be written in imperative, precise language. No ambiguity. No assumed knowledge. If a step requires running a specific command, include the exact command with an explanation of what it does.

**Service Level Objectives (SLOs) & Error Budget Policy**
Document the SLOs for each user-facing service:

- Availability target (e.g., 99.9%)
- Latency targets (e.g., p95 response time < 300ms)
- Error rate target (e.g., < 0.1% error rate on critical endpoints)
- How SLOs are measured and by whom
- What happens when the error budget is exhausted (freeze on non-reliability-improving deployments, etc.)

**Disaster Recovery Plan**
Document the recovery strategy for catastrophic failures:

- Recovery Time Objective (RTO): How quickly must the system be restored?
- Recovery Point Objective (RPO): How much data loss is acceptable?
- Backup strategy: What is backed up, how often, and how backups are verified
- Step-by-step instructions to restore the system from backup in each failure scenario
- Contact list for external dependencies (cloud provider support, critical SaaS vendors)

**On-Call Handbook**
A guide for new on-call engineers covering:

- How to access all systems (dashboards, logs, deployment tools, databases)
- What the on-call rotation looks like and how handoff works
- The escalation tree
- How to file an incident report
- Where runbooks are located

### Documentation Version

All Phase 6 content lives in **Internal Documentation** under `/docs/internal/operations/`. Runbooks may be published to a private internal operations portal separate from the main documentation site for quick access during incidents.

### Definition of Done

- [ ] Deployment pipeline fully documented including rollback procedures
- [ ] Infrastructure as Code documented and references in the operations guide
- [ ] Monitoring dashboards documented with interpretation guides
- [ ] Runbooks written for every alert that exists
- [ ] SLOs defined, documented, and monitoring configured to measure them
- [ ] Disaster recovery plan tested (via a tabletop exercise at minimum) before go-live
- [ ] On-call handbook reviewed by all engineers on the on-call rotation

---

## Phase 7 — User & End-User Documentation

### Purpose

Phase 7 is the only phase that produces content primarily for people outside the engineering team. This is the documentation that end users, API consumers, customers, and non-technical stakeholders will read. It must be accurate, clear, complete, and written in a way that serves the reader's goals — not the engineering team's need to explain what they built.

User documentation is often the weakest part of a software project's documentation portfolio because it is treated as an afterthought. It is not. For many users, the documentation *is* the product. If they cannot understand how to use what you built, you have not fully built it.

### Timing

Phase 7 begins during Phase 4 and must be substantially complete before go-live. Post-launch, it is continuously updated as features are added, changed, or removed.

### Ownership & Review

**Primary Owner:** Technical Writer (or, in teams without dedicated technical writers, the Product Manager with engineering support)  
**Contributors:** Developers (for technical accuracy), Product Manager (for business context), UX designers (for visual guides)  
**Reviewers:** Product Owner, a representative sample of actual end users (usability testing), developer (for technical accuracy sign-off)  
**Review Process:** User documentation reviewed via PR with mandatory review by a non-technical reader to validate clarity

### What to Document

**Getting Started Guide**
The single most important piece of user documentation. It takes a brand-new user from zero to their first successful outcome in the minimum number of steps. It does not explain everything. It explains the minimum necessary to achieve the first value moment. Every prerequisite is listed. Every step is verified. Every possible point of failure is anticipated with a clear resolution.

**Feature Documentation**
For every feature, document what it does, how to use it, what the user can expect as an outcome, and any important limitations or edge cases. Write from the user's goal, not from the feature's capabilities. The user does not want to know that the export feature supports three formats — they want to know "how do I get my data out of the system?"

**API Reference (Consumer-Facing)**
If the system exposes a public or partner API, the consumer-facing API reference is generated from the OpenAPI spec produced in Phase 3, but curated and enhanced for external audiences:

- Internal implementation notes are removed
- Every endpoint has a clear plain-English description of its purpose
- Code examples are provided in at least three languages (the most common languages your API consumers use)
- Authentication instructions are written for someone who has never used your API before
- Rate limiting, pagination, and error handling are explained as standalone concepts, not just in the spec

**Tutorials**
Task-focused, narrative-style guides that walk users through achieving a specific real-world goal. Unlike the Getting Started guide (which is generic and introductory), tutorials address specific scenarios: "How to set up automated weekly exports", "How to integrate the export API into a Python script", "How to manage team permissions for data access".

**Troubleshooting Guide**
A searchable reference of common problems, their symptoms, their causes, and their resolutions. Seeded from support tickets, QA findings, and known edge cases. This document has a direct impact on support ticket volume.

**Onboarding Documentation (for SaaS products)**
If the product has an onboarding flow, document what new users need to know at each stage of onboarding. This may include email templates, in-product tooltip content, and the accompanying help documentation that users should be directed to from each onboarding step.

**Changelog (User-Facing)**
A chronological record of changes to the product, written in plain English for end users. Not a technical diff. Focuses on what changed for the user, why it matters, and whether anything requires action from the user.

### Documentation Version

All Phase 7 content lives in **User-Facing Documentation** under `/docs/user/`. It is published to a public or customer-accessible documentation portal.

### Definition of Done

- [ ] Getting started guide tested with at least one user who has never seen the product
- [ ] Feature documentation complete for all features included in the release
- [ ] Consumer-facing API reference complete with code examples in at least two languages
- [ ] At least two tutorials covering the most common real-world use cases
- [ ] Troubleshooting guide seeded with known issues and support FAQ
- [ ] All user documentation reviewed for technical accuracy by a developer
- [ ] User-facing changelog entry written for the release

---

## Phase 8 — Maintenance & Evolution

### Purpose

Phase 8 is permanent. It begins at launch and ends when the system is retired. Its purpose is to keep all documentation — both internal and user-facing — accurate, relevant, and useful as the system changes. Documentation that was accurate at launch and never updated is technical debt. It misleads users and engineers alike.

### What to Document Continuously

**Changelog (Technical)**
An internal-facing technical changelog recording every significant change: new features, bug fixes, breaking changes, dependency updates, security patches, and performance improvements. Written for engineers, not users. References PR and ticket numbers. This is distinct from the user-facing changelog.

**Migration Guides**
Whenever a change requires users, API consumers, or operators to take action — a new authentication mechanism, a changed API field, a different configuration format — write a migration guide. A migration guide explains: what changed, why it changed, what the user needs to do, and by when. It should be available before the breaking change is deployed.

**Deprecation Notices**
When a feature, API endpoint, or integration is being sunset, publish a deprecation notice with: the date the feature will be removed, the recommended alternative, and any migration support available. Allow sufficient notice (the minimum notice period should be defined in your API versioning policy — commonly 6 months for external APIs).

**Architecture Decision Records — Updates**
When the system's architecture changes significantly, write a new ADR superseding the old one. Never silently update an existing ADR. The historical trail of decisions is as valuable as the current state.

**Lessons Learned**
After every major incident, significant release, or project milestone, document what went well, what went wrong, and what will be done differently. These documents are gold for future teams and for your own team's retrospective learning.

**Documentation Health Checks**
Schedule periodic reviews of documentation across all phases. At minimum: a quarterly check of the getting started guide (run it on a clean environment), an annual review of the architecture document against the actual deployed system, and a check after every major release that all affected documentation has been updated.

### Documentation Version

Phase 8 content spans both **Internal** and **User-Facing** documentation. Internal changelogs, ADR updates, and lessons learned go internal. User-facing changelogs, deprecation notices, and migration guides go to user-facing docs.

---

## Phase 9 — Retirement & Archival

### Purpose

Every system eventually ends. Phase 9 ensures that the retirement of a system is planned, communicated, and executed as carefully as its launch. Users are given adequate notice. Data is preserved or migrated. Knowledge is transferred. And the documentation is archived in a state that allows future teams to understand what the system was and why it was retired.

### What to Document

**Sunsetting Plan**
A timeline for the retirement of the system: when it will stop accepting new users, when data export will close, when the service will go offline. The plan should include the communication strategy for notifying users.

**Data Migration Guide**
If users have data in the system, provide a guide to exporting or migrating that data before the system is retired.

**Knowledge Transfer Document**
Capture everything that team members know about the system that is not already documented. This includes operational quirks, non-obvious failure modes, important context about why certain decisions were made, and contact information for key stakeholders.

**Archival**
Archive all documentation to a read-only location. Do not delete it. Future teams may need to understand what was built for compliance, legal, or reuse purposes.

---

## Best Practices Across All Phases

**Single Source of Truth**
Every document has exactly one authoritative location. If the same information needs to appear in multiple places, one location is canonical and the others reference it. Duplication is documentation debt.

**Definition of Done Includes Documentation**
A feature is not done until its documentation is updated. This is enforced at the PR level, not as a separate documentation sprint.

**Automation as a First-Class Citizen**

- Spell checking and link validation run in CI on every PR.
- OpenAPI specs are linted by Spectral on every PR.
- Diagrams are rendered and checked for errors in CI.
- Coverage reports, security scan results, and benchmark results are automatically published to the internal documentation site.
- Where possible, documentation is generated from code (API docs from docstrings, schema docs from code annotations).

**Review Like Code**
Documentation PRs get the same rigour as code PRs. Vague language, missing sections, inaccurate steps, and stale references are valid reasons to request changes.

**AI-Assisted First Drafts (2026 Reality)**
AI tools are a legitimate and efficient way to produce first drafts of documentation. They are not a replacement for human review, accuracy checking, or judgment about what content belongs in internal versus user-facing documentation. Use AI to draft; use humans to review, refine, and validate.

**Accessibility & Discoverability**
Published documentation must be searchable, linkable to specific sections, accessible to screen readers, and versioned to match the software release it documents.

---

## Recommended Tooling Stack

| Category | Tools |
|----------|-------|
| **Writing Format** | Markdown / MDX |
| **Diagrams as Code** | Mermaid, C4-PlantUML, Excalidraw |
| **Documentation Site** | Docusaurus, Mintlify, MkDocs Material |
| **API Documentation** | Redoc, Stoplight Studio, Scalar |
| **API Spec Linting** | Spectral |
| **Prose Linting** | Vale |
| **Link Validation** | lychee, LinkChecker |
| **Versioning & Review** | Git + GitHub/GitLab PRs |
| **CI/CD** | GitHub Actions, GitLab CI |
| **Search** | Algolia DocSearch (for Docusaurus), built-in MkDocs search |

---

> **Continue to Part 2:** `two-versions-strategy-complete.md` for the complete guide to structuring, organising, publishing, and maintaining both Internal and User-Facing documentation streams across all ten phases.
