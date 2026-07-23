---
title: "Comparison with other documentation resources"
description: "This page helps you understand where Docs-as-Code Primer fits in the broader documentation ecosystem. We are not an awesome list, not a writing course, and not a community. We are a structured methodo"
---

# Comparison with other documentation resources

This page helps you understand where Docs-as-Code Primer fits in the broader documentation ecosystem. We are not an awesome list, not a writing course, and not a community. We are a structured methodology plus scaffold for building documentation in teams that use Git.

---

## Quick Comparison Matrix

| Dimension | Docs-as-Code Primer | Write the Docs | Google Tech Writing | Diataxis | C4 Model | adr-tools |
|-----------|---------------------|-----------------|--------------------|-----------|-----------|-----------|
| Type | Methodology + scaffold | Community + guide | Writing course | Documentation framework | Architecture visualization | ADR tool |
| Audience | Engineering teams adopting Git docs | Writers and documentarians | Any technical writer | Documentation authors | Architects | Architecture teams |
| Primary teaching | Phases 0-9 + governance + two-audience split | Writing craft + community | Clear writing principles | Content structure (4 types) | System visualization | Decision recording |
| Artifact | Copy-paste scaffold + primer chapters | Slack + guides + conferences | Free online course | Framework, no code | Diagram patterns | CLI tool + template |
| SSG-agnostic | Yes (MkDocs, Docusaurus, Mintlify recipes included) | N/A | N/A | Yes | N/A | Yes (Git-based) |
| CI/automation included | Yes (starter workflows) | No | No | No | No | Yes (Git hooks) |
| Template repo | Yes (use-this-template enabled) | No | No | No | No | No |
| Definition of Done | Explicit (chapter 14: governance) | Mentioned | Implicit | Implicit | N/A | ADR as proof |
| Governance + drift prevention | Core chapter (14) | Mentioned in WtD guide | Not addressed | Not addressed | Not addressed | Not addressed |
| Internal vs. user docs split | Three-way: internal, user, shared | General audience concept | General audience | Not addressed | Not typically | Not addressed |

---

## Detailed Comparison

### Write the Docs (WtD)

**What it is:** A global community and conference series for technical writers, documentarians, and documentation enthusiasts.

**Strengths:**

- Vibrant, inclusive community (Slack, meetups, annual conference)
- Emphasis on writing craft and communication
- Peer support and mentorship
- Resources covering industry trends, tooling ecosystem

**Limitations:**

- Not a methodology for organizing or automating documentation
- No copy-paste scaffold or templates
- No CI/automation guidance (assumes external tooling)
- Does not address internal vs. user documentation separation
- Does not include governance or drift-prevention practices

**Best for:** Teams seeking writing guidance and community, or finding technical writing mentors.

**Does NOT replace Docs-as-Code Primer if you need:** Scaffolding, governance, two-audience rules, or automation.

---

### Google Technical Writing Course

**What it is:** Free online course teaching clear, concise technical writing.

**Strengths:**

- Practical, evidence-based writing principles
- Highly readable; short lessons
- Covers audience analysis, tone, structure, examples
- Free and accessible
- Can be paired with any documentation system

**Limitations:**

- Writing skill alone, not methodology
- No organization structure (where do docs live?)
- No automation, CI, or Git workflow guidance
- No templates or scaffolding
- Does not address governance or drift
- Assumes you already know your tool (MkDocs, Confluence, etc.)

**Best for:** Improving the quality of writing in existing documentation systems.

**Does NOT replace Docs-as-Code Primer if you need:** Structure, scaffolding, automation, or governance.

---

### Diataxis (Documentation Framework)

**What it is:** A framework for organizing documentation into four types: Tutorial, How-to Guide, Reference, and Explanation.

**Strengths:**

- Clear mental model for content structure
- Solves the "what should this page be?" problem
- Language/platform-agnostic
- Increasingly adopted by teams (Django, Kubernetes, others)

**Limitations:**

- Only solves content type organization, not folder/phase organization
- No scaffolding or template repo
- No automation, CI, or workflow guidance
- No governance, drift prevention, or Definition of Done
- Does not address internal vs. user documentation
- Assumes docs are already in a system; does not say which one

**Best for:** Structuring individual pages within your documentation.

**Pairs well with:** Docs-as-Code Primer. You could apply Diataxis principles within each phase and audience.

---

### C4 Model (Architecture Visualization)

**What it is:** A framework for drawing system architecture diagrams at four levels of abstraction: Context, Container, Component, Code.

**Strengths:**

- Reduces diagrams to a clear, repeatable pattern
- Works across many tools (PlantUML, Draw.io, Structurizr)
- Solves "how do we show architecture clearly?" problem
- Increasingly adopted by architects

**Limitations:**

- Only covers diagrams, not documentation
- No text guidance, scaffolding, or templates
- No governance, automation, or CI
- Does not address phases or documentation lifecycle
- Architecture documentation is only one piece of the puzzle

**Best for:** Standardizing architecture diagrams within your documentation.

**Pairs well with:** Docs-as-Code Primer, especially in Phase 2 (architecture) and Phase 3 (detailed design).

---

### adr-tools (Architecture Decision Records)

**What it is:** A command-line tool for creating, managing, and linking Architecture Decision Records (ADRs) in a Git repository.

**Strengths:**

- Simple, repeatable ADR format
- Lightweight CLI for fast creation
- Git-based (version control + history built-in)
- Helps teams justify architectural decisions

**Limitations:**

- Only covers ADRs, not full documentation
- No scaffolding beyond ADR structure
- Does not address phases, audiences, or governance
- Does not cover user documentation, operations, etc.
- CLI tool only; no web scaffold or template

**Best for:** Teams that already have a documentation system and want to add ADRs.

**Pairs well with:** Docs-as-Code Primer, especially in Phase 3-4 (decisions and implementation). Docs-as-Code Primer includes an ADR template under templates/adr.md.

---

### system-design-primer (GitHub)

**What it is:** A GitHub repo with articles and diagrams on large-scale system design topics (load balancing, databases, caching, etc.).

**Strengths:**

- Excellent reference for system design concepts
- Clear explanations of distributed systems patterns
- Well-maintained and widely cited

**Limitations:**

- Not a methodology or scaffold
- Educational resource, not a kit you can copy
- No governance, phases, or audience split
- Does not cover how to organize your own documentation
- Teaches system design, not how to write docs

**Best for:** Learning system design concepts to inform your architecture documentation.

**Does NOT replace Docs-as-Code Primer if you need:** A scaffold, methodology, or governance model.

---

### Awesome Docs (lists)

**What it is:** Curated lists of documentation tools, frameworks, and resources (on GitHub and elsewhere).

**Strengths:**

- Comprehensive tooling overview
- Helps discover new tools

**Limitations:**

- Not a methodology
- No guidance on which tool to use
- No scaffolding, templates, or governance
- Does not address documentation organization or phases
- Awesome lists are intentionally tool-agnostic

**Best for:** Tool discovery after you have decided on a methodology.

**Does NOT replace Docs-as-Code Primer if you need:** Structure, methodology, governance.

---

## When to use Docs-as-Code Primer

Choose this primer if your team:

1. Uses Git and PRs -- documentation should follow the same workflow as code.
2. Has both internal and user documentation -- you need the three-way split (internal, user, shared).
3. Wants a scaffold to copy -- not just guidance, but a folder structure to start with immediately.
4. Needs governance and drift prevention -- you care about keeping docs in sync with reality.
5. Wants CI/automation included -- starter workflows for markdown lint, link check, etc.
6. Needs to teach documentation discipline -- the primer chapters serve as team onboarding.

---

## Combining Resources

Example combination: Docs-as-Code Primer + Diataxis + Google Tech Writing

```text
Docs-as-Code Primer
  Provides phases and scaffold

  + Diataxis
      Organizes individual pages within each phase

  + Google Technical Writing
      Improves clarity and concision of writing

  + adr-tools
      Manages architectural decisions in Phase 3-4

  + C4 Model
      Standardizes architecture diagrams

  + Write the Docs community
      Feedback and mentorship
```

---

## Positioning

| Need | Solution | Why |
|------|----------|-----|
| "How do I write clearly?" | Google Tech Writing + Write the Docs | Writing skill |
| "How do I organize pages?" | Diataxis | Content structure |
| "How do I set up a docs folder?" | Docs-as-Code Primer | Methodology + scaffold |
| "How do I show architecture?" | C4 Model | Diagram pattern |
| "How do I record decisions?" | adr-tools + Docs-as-Code templates | Decision artifact |
| "How do I find a tool?" | Awesome Docs | Tool discovery |
| "I need community and mentorship" | Write the Docs | Community |

---

## Why Docs-as-Code Primer is Unique

1. Phases + Governance: No other resource combines a 10-phase documentation lifecycle with governance and drift-prevention practices.
2. Two-audience split enforced in structure: Most resources discuss "audience" conceptually; this primer bakes it into folder structure (internal, user, shared).
3. Copy-paste scaffold: You do not get theory; you get a runnable folder tree and CI workflows to start with Day 1.
4. Definition of Done: This primer explicitly teaches what "done" means for each phase (Chapter 14).
5. CI included: Not "you should automate your docs" -- here is the starter workflow.
6. Template repository: One-click adoption via GitHub template feature.

---

## Further Reading

- [Docs-as-Code Primer: LEARNING_PATH.md](/LEARNING_PATH/) -- start here
- [Diataxis documentation framework](https://diataxis.fr/)
- [Write the Docs community](https://www.writethedocs.org/)
- [Google Technical Writing Courses](https://developers.google.com/tech-writing)
- [C4 Model](https://c4model.com/)
- [adr-tools on GitHub](https://github.com/npryce/adr-tools)
