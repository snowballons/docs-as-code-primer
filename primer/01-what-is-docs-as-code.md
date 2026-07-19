# What Docs as Code means

Documentation as Code means applying software engineering discipline to documentation:

- **Stored in Git** alongside or adjacent to the code it describes
- **Reviewed via pull requests** with real review standards
- **Checked automatically** — links, lint, OpenAPI, diagram render where applicable
- **Released with the software** — a feature is not done until docs that should change have changed
- **Owned by the team**, not thrown over a wall after the fact

## What it is not

- Not "we wrote a Confluence page once"
- Not "only technical writers may touch Markdown"
- Not "generate everything with AI and skip review"

## Goals

Documentation that is accurate, reviewable, discoverable, and versioned. When you open a PR for a feature, the documentation change is part of that PR (or explicitly waived with a reason).

## How this kit applies it

| Practice | In this kit |
|----------|-------------|
| Structure | `scaffold/docs/{internal,user,shared}` |
| Lifecycle | Phases 0–9 |
| Review | PR template + governance rules |
| Automation | Starter GitHub Actions workflow |
| Agents | `AGENTS.md` + `llms.txt.example` |

Next: [Two audiences](02-two-audiences.md)
