# What Docs as Code means

Documentation as Code means applying software engineering discipline to documentation:

- **Stored in Git** alongside or adjacent to the code it describes
- **Reviewed via pull requests** with real review standards
- **Checked automatically** — links, lint, OpenAPI, diagram render where applicable
- **Released with the software** — a feature is not done until docs that should change have changed
- **Owned by the team**, not thrown over a wall after the fact

## Before/after

**Before** — docs are a separate concern:

```text
1. Engineer finishes the feature
2. Engineer writes "TODO: add docs" in the PR description
3. PR merges
4. Two weeks later, a tech writer gets a Slack message: "can you doc the export feature?"
5. The tech writer has never used the feature, the engineer is on another project, and the API already changed
```

**After** — docs are part of the PR:

```text
1. PR includes: code changes + updated architecture diagram + updated getting-started
2. Reviewer checks both code accuracy and doc accuracy
3. PR merges. Docs are already accurate and deployed.
4. Next sprint: a new engineer starts. The docs reflect reality.
```

## What it is not

- Not "we wrote a Confluence page once"
- Not "only technical writers may touch Markdown"
- Not "generate everything with AI and skip review"
- Not "keep a README in the repo and call it documentation"
- Not "we'll write docs after the release" (that creates a backlog that never shrinks)

## Goals

Documentation that is accurate, reviewable, discoverable, and versioned. When you open a PR for a feature, the documentation change is part of that PR (or explicitly waived with a reason).

A team practicing Docs as Code can answer "yes" to:

1. Is every doc change reviewed like a code change?
2. Does a broken link or invalid syntax fail the build?
3. Can a new engineer find the architecture overview, a runbook, and the user docs within 5 minutes?
4. Is documentation debt tracked alongside code debt?

## Check yourself

1. An engineer says "I'll add docs before the next release." The feature ships today. When do the docs actually get written?
2. Your team has a Confluence space with architecture diagrams. The diagrams were accurate in 2022. Is this Docs as Code?
3. You generate API docs from OpenAPI and publish them automatically. Is that Docs as Code? What's still missing?

## How this kit applies it

| Practice | In this kit |
|----------|-------------|
| Structure | `scaffold/docs/{internal,user,shared}` |
| Lifecycle | Phases 0–9 |
| Review | PR template + governance rules |
| Automation | Starter GitHub Actions workflow |
| Agents | `AGENTS.md` + `llms.txt.example` |

Next: [Two audiences](02-two-audiences.md)
