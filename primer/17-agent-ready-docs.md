# Agent-ready docs

AI coding agents increasingly consume documentation. Structure helps humans and agents.

## Practices in this kit

- Stable paths under `docs/internal|user|shared`
- `AGENTS.md` with placement rules and source-of-truth table
- Optional `llms.txt` index (`scaffold/llms.txt.example`)
- OpenAPI as machine-readable contract
- Prefer Markdown sources over screenshots of text

## Rules for agents (also in AGENTS.md)

- Do not invent APIs
- Update docs with behavior changes
- Never leak internal-only content into `docs/user/`

## What this is not

Agent-ready does not mean "unreviewed AI prose." Humans still gate accuracy and audience.
