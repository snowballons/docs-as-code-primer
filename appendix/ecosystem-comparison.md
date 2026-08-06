---
title: "Ecosystem comparison"
description: "How Docs-as-Code Primer relates to Write the Docs, Google Tech Writing, Diataxis, C4 Model, adr-tools, and other documentation resources."
---

# Ecosystem comparison

How Docs-as-Code Primer fits in the broader documentation ecosystem. It is not an awesome list, a writing course, or a community — it is a structured methodology plus scaffold for teams that use Git.

---

## Quick comparison matrix

| Dimension | Docs-as-Code Primer | Write the Docs | Google Tech Writing | Diataxis | C4 Model | adr-tools |
|-----------|---------------------|-----------------|--------------------|-----------|-----------|-----------|
| Type | Methodology + scaffold | Community + guide | Writing course | Documentation framework | Architecture visualization | ADR tool |
| Audience | Engineering teams adopting Git docs | Writers and documentarians | Any technical writer | Documentation authors | Architects | Architecture teams |
| Primary teaching | Phases 0–9 + governance + two-audience split | Writing craft + community | Clear writing principles | Content structure (4 types) | System visualization | Decision recording |
| Artifact | Copy-paste scaffold + primer chapters | Slack + guides + conferences | Free online course | Framework, no code | Diagram patterns | CLI tool + template |
| SSG-agnostic | Yes (MkDocs, Docusaurus, Mintlify recipes included) | N/A | N/A | Yes | N/A | Yes (Git-based) |
| CI/automation included | Yes (starter workflows) | No | No | No | No | Yes (Git hooks) |
| Template repo | Yes (use-this-template enabled) | No | No | No | No | No |
| Definition of Done | Explicit ([content governance](/primer/content-governance/)) | Mentioned | Implicit | Implicit | N/A | ADR as proof |
| Governance + drift prevention | Core chapter ([content governance](/primer/content-governance/)) | Mentioned in WtD guide | Not addressed | Not addressed | Not addressed | Not addressed |
| Internal vs user docs split | Three-way: internal, user, shared | General audience concept | General audience | Not addressed | Not typically | Not addressed |

---

## Detailed comparison

### Write the Docs (WtD)

**What it is:** A global community and conference series for technical writers, documentarians, and documentation enthusiasts.

**Strengths:**

- Vibrant, inclusive community (Slack, meetups, annual conference)
- Emphasis on writing craft and communication
- Peer support and mentorship
- Resources covering industry trends and tooling ecosystem

**Limitations:**

- Not a methodology for organising or automating documentation
- No copy-paste scaffold or templates
- No CI/automation guidance (assumes external tooling)
- Does not address internal vs user documentation separation
- Does not include governance or drift-prevention practices

**Best for:** Teams seeking writing guidance and community, or finding technical writing mentors.

**Does NOT replace Docs-as-Code Primer if you need:** Scaffolding, governance, two-audience rules, or automation.

---

### Google Technical Writing Course

**What it is:** Free online course teaching clear, concise technical writing.

**Strengths:**

- Practical, evidence-based writing principles
- Highly readable; short lessons
- Covers audience analysis, tone, structure, and examples
- Free and accessible
- Can be paired with any documentation system

**Limitations:**

- Writing skill alone, not methodology
- No organisation structure (where do docs live?)
- No automation, CI, or Git workflow guidance
- No templates or scaffolding
- Does not address governance or drift
- Assumes you already know your tool

**Best for:** Improving the quality of writing in existing documentation systems.

**Does NOT replace Docs-as-Code Primer if you need:** Structure, scaffolding, automation, or governance.

---

### Diataxis (Documentation Framework)

**What it is:** A framework for organising documentation into four types: Tutorial, How-to Guide, Reference, and Explanation.

**Strengths:**

- Clear mental model for content structure
- Solves the "what should this page be?" problem
- Language/platform-agnostic
- Increasingly adopted by teams (Django, Kubernetes, others)

**Limitations:**

- Only solves content type organisation, not folder/phase organisation
- No scaffolding or template repo
- No automation, CI, or workflow guidance
- No governance, drift prevention, or Definition of Done
- Does not address internal vs user documentation
- Assumes docs are already in a system; does not say which one

**Best for:** Structuring individual pages within your documentation.

**Pairs well with:** Docs-as-Code Primer. Apply Diataxis principles within each phase and audience stream.

---

### C4 Model (Architecture Visualisation)

**What it is:** A framework for drawing system architecture diagrams at four levels of abstraction: Context, Container, Component, Code.

**Strengths:**

- Reduces diagrams to a clear, repeatable pattern
- Works across many tools (PlantUML, draw.io, Structurizr)
- Solves "how do we show architecture clearly?" for new engineers
- Increasingly adopted by architects

**Limitations:**

- Only covers diagrams, not documentation
- No text guidance, scaffolding, or templates
- No governance, automation, or CI
- Does not address phases or documentation lifecycle

**Best for:** Standardising architecture diagrams within your documentation.

**Pairs well with:** Docs-as-Code Primer Phase 2 (architecture) and Phase 3 (detailed design).

---

### adr-tools (Architecture Decision Records)

**What it is:** A command-line tool for creating, managing, and linking Architecture Decision Records in a Git repository.

**Strengths:**

- Simple, repeatable ADR format
- Lightweight CLI for fast creation
- Git-based — version control and history built in

**Limitations:**

- Only covers ADRs, not full documentation
- No scaffolding beyond ADR structure
- Does not address phases, audiences, or governance
- Does not cover user documentation or operations

**Best for:** Teams that already have a documentation system and want to formalise ADRs.

**Pairs well with:** Docs-as-Code Primer Phase 2–4. The primer includes its own [`templates/adr.md`](/templates/adr/) with the full status lifecycle.

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
- Teaches system design, not how to write docs

**Best for:** Learning system design concepts to inform your architecture documentation.

**Does NOT replace Docs-as-Code Primer if you need:** A scaffold, methodology, or governance model.

---

### Awesome Docs (lists)

**What it is:** Curated lists of documentation tools, frameworks, and resources.

**Strengths:**

- Comprehensive tooling overview
- Useful for tool discovery

**Limitations:**

- Not a methodology
- No guidance on which tool to use when
- No scaffolding, templates, or governance
- Awesome lists are intentionally tool-agnostic

**Best for:** Tool discovery after you have decided on a methodology.

---

## When to use Docs-as-Code Primer

Choose this primer when your team:

1. Uses Git and PRs — documentation should follow the same workflow as code.
2. Has both internal and user documentation — you need the three-way split (`internal/`, `user/`, `shared/`).
3. Wants a scaffold to copy — not just guidance, but a folder structure to start with on day one.
4. Needs governance and drift prevention — keeping docs in sync with reality as the system changes.
5. Wants CI/automation included — starter workflows for Markdown lint, link check, and more.
6. Needs to teach documentation discipline — the primer chapters serve as team onboarding.

---

## Combining resources

```text
Docs-as-Code Primer       ← phases, scaffold, governance
  + Diataxis              ← structures individual pages within each phase
  + Google Tech Writing   ← improves clarity and concision of writing
  + adr-tools             ← manages ADRs in Phase 2–4 (or use the primer's template)
  + C4 Model              ← standardises architecture diagrams in Phase 2
  + Write the Docs        ← community, mentorship, writing craft
```

---

## Positioning summary

| Need | Solution |
|------|----------|
| "How do I write clearly?" | Google Tech Writing + Write the Docs |
| "How do I structure a page?" | Diataxis |
| "How do I set up a docs folder?" | Docs-as-Code Primer |
| "How do I visualise architecture?" | C4 Model |
| "How do I record decisions?" | adr-tools or [`templates/adr.md`](/templates/adr/) |
| "How do I find a tool?" | Awesome Docs lists |
| "I need community and mentorship" | Write the Docs |

---

## Further reading

- [Learning path](/LEARNING_PATH/) — start here
- [Diataxis documentation framework](https://diataxis.fr/)
- [Write the Docs community](https://www.writethedocs.org/)
- [Google Technical Writing Courses](https://developers.google.com/tech-writing)
- [C4 Model](https://c4model.com/)
- [adr-tools on GitHub](https://github.com/npryce/adr-tools)
