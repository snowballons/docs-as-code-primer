---
title: "Agent skills for docs-as-code"
description: "Agent skills (`.agents/skills/<name>/SKILL.md`) package reusable workflows that AI coding agents can load on demand. They complement `AGENTS.md` (repo-level conventions) with task-specific procedures "
---

# Agent skills for docs-as-code

Agent skills (`.agents/skills/<name>/SKILL.md`) package reusable workflows that AI coding agents can load on demand. They complement `AGENTS.md` (repo-level conventions) with task-specific procedures — and they fit naturally into a docs-as-code pipeline.

## How agent skills work

The open [Agent Skills](https://github.com/agentskills/agentskills) standard defines a skill as a directory containing a `SKILL.md` file:

```text
.agents/skills/<skill-name>/
├── SKILL.md          # Frontmatter (name, description) + instructions
├── scripts/          # Optional executable helpers
└── references/       # Optional supporting docs
```

Agents use **progressive disclosure**:

1. At session start, the agent sees only each skill's `name` and `description` (~100 tokens per skill).
2. When a task matches a skill's description, the agent loads the full `SKILL.md` body.
3. Scripts and references load only when the agent needs them.

This keeps context lean until detail is required.

### Relationship to other agent files

| File | Scope | Loaded |
|------|-------|--------|
| `AGENTS.md` | Repo-wide conventions, build/test commands | Always, at session start |
| `.agents/skills/<name>/SKILL.md` | Reusable capability — "how to review an ADR", "how to write a runbook" | On demand, when relevant |
| `llms.txt` | Index of doc entry points for LLM context retrieval | At inference time |

`AGENTS.md` tells agents *how the repo works*. Skills tell agents *how to do specific things*. Both are useful for a docs-as-code repo.

## Where skills live

Agents discover skills from several locations:

| Path | Scope |
|------|-------|
| `~/.config/opencode/skills/` | Global (your personal skills) |
| `~/.claude/skills/` | Global (Claude Code fallback) |
| `.agents/skills/` | Per-repo (checked in, team-wide) |
| `.github/skills/` | Per-repo (alternative location) |
| `.cursor/skills/` | Per-repo (Cursor IDE) |

Adopters of this kit can commit docs-as-code skills into `.agents/skills/` so every engineer on the team gets the same doc workflows.

## Why this matters for docs

AI coding agents increasingly write, review, and maintain documentation. Without structured guidance, they produce inconsistent output — wrong template format, audience leaks, stale references. Skills let you encode the same judgment this primer teaches into agent-invokable workflows.

### What a docs skill looks like

```markdown
---
name: write-adr
description: Write an Architecture Decision Record following the team's ADR template.
  Use when adding or revisiting an architectural decision. Do NOT use for
  bug reports, feature requests, or implementation notes.
---

Write an ADR at `docs/internal/decisions/adr-NNN-title.md`.

1. Read `templates/adr.md` for the required sections.
2. Read the most recent 3 ADRs in `docs/internal/decisions/` for style.
3. If this ADR supersedes a prior decision, link it in the "Supersedes" field.
4. Keep the title imperative: "ADR-015: Use Kafka for export event streaming".
5. Set status to `Proposed` unless this supersedes an existing `Accepted` ADR.
```

### Example doc-skill catalog

| Skill | When to use | Bundled with |
|-------|-------------|--------------|
| `write-adr` | Adding a new architectural decision | ADR template reference |
| `review-runbook` | Auditing a runbook for completeness | Runbook checklist |
| `write-changelog` | Drafting a user-facing changelog entry | Changelog template |
| `audit-doc-drift` | Checking docs against current system state | Drift checklist from governance chapter |
| `scaffold-new-project` | Setting up the scaffold for a new repo | `FIRST_WEEK.md` (Day 0 checklist) |

### Benefits over putting everything in AGENTS.md

- **Context efficiency** — AGENTS.md is always loaded. Skills load only when triggered. A runbook-review skill adds zero tokens to sessions that don't touch runbooks.
- **Sharable** — Skills in `.agents/skills/` are checked into the repo, so the whole team gets the same doc workflows.
- **Installable from registries** — [skills.sh](https://skills.sh) hosts community skills. Teams can install curated doc skills with `npx skills add <package>`.
- **Composable** — A "write a feature doc" skill can reference a "check audience boundaries" helper skill.

## How this fits the primer

The primer teaches humans the judgment to write good docs. Agent skills extend that same judgment to AI coding agents:

| Primer concept | Agent skill counterpart |
|----------------|------------------------|
| Phase 2 — ADR pattern | `write-adr` skill |
| Phase 6 — runbook requirements | `review-runbook` skill |
| Phase 7 — user doc quality bar | `write-feature-doc` skill |
| Phase 8 — changelog cadence | `write-changelog` skill |
| Governance — drift prevention | `audit-doc-drift` skill |
| Two-audience rule | `check-audience-boundary` skill |

## Getting started with skills (for adopters)

1. **Install the skills CLI** — `npx skills` (from [skills.sh](https://skills.sh)) or use your agent's built-in skill loader.
2. **Create a skill directory** — `.agents/skills/<name>/SKILL.md` in your repo root.
3. **Write the frontmatter** — `name` and `description` are required. Make the description specific enough for the agent to know when to trigger.
4. **Write step-by-step instructions** — imperative, with explicit paths and format expectations.
5. **Commit and push** — skills are auto-discovered by compatible agents (Codex, Cursor, Copilot, Devin, Cline, and others).

Most agents also support explicit invocation — `@skills:write-adr` or `/write-adr` — so team members can trigger a skill on demand.

## Related

- [Agent-ready docs chapter](/primer/agent-ready-docs/)
- [AGENTS.md (repo root)](/AGENTS/)
- [Maturity model — Level 3 includes agent hooks](/appendix/maturity-model/)
- [Agent Skills specification](https://github.com/agentskills/agentskills)
- [skills.sh](https://skills.sh) — community skill registry
