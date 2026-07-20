# Agent-ready docs

AI coding agents increasingly consume documentation. Structure helps humans and agents find what they need.

## Why this matters

Research across documentation-first teams shows that 45% of documentation traffic comes from AI agents (training crawls, RAG pipelines, coding assistants). Agents cannot infer structure — they depend on what you explicitly surface.

| Agent access pattern | What helps |
|----------------------|------------|
| Training crawl | Stable URLs, well-formed Markdown, no login walls on public docs |
| RAG / retrieval | Clear section headings, concise definitions, glossary entries |
| Inline coding assistant | `AGENTS.md` with placement rules, `llms.txt` with entry points |
| MCP tool invocation | Machine-readable contracts (OpenAPI, JSON Schema) in predictable paths |

## Practices in this kit

- Stable paths under `docs/internal|user|shared`
- `AGENTS.md` with placement rules and source-of-truth table
- Optional `llms.txt` index (`scaffold/llms.txt.example`)
- OpenAPI as machine-readable contract
- Prefer Markdown sources over screenshots of text
- PR templates with doc-review checkboxes that agents can parse

### llms.txt patterns

`llms.txt` provides a concise index that LLMs read at inference time. Use it to surface:

1. The glossary (concept definitions)
2. The architecture overview (system boundaries)
3. Key file paths (entry points for each audience)
4. The AGENTS.md rules (what the agent must not do)

Keep it short — LLM context windows are finite. The scaffold's `llms.txt.example` shows the pattern.

## Before/after

**Before** — no structure for agents:

```text
docs/
├── notes/
├── random-folder/
├── FINAL-v2.md
└── quick-reference.txt
```

An agent cannot determine what is internal vs user-facing, what is current vs stale, or where to find the architecture overview.

**After** — agent-parseable structure:

```text
docs/
├── internal/       ← stable path, AGENTS.md forbids leaking
├── user/           ← stable path, public content
├── shared/         ← glossary, reusable diagrams
└── ../llms.txt     ← concise index for LLM context
```

## Rules for agents (also in AGENTS.md)

- Do not invent APIs
- Update docs with behavior changes
- Never leak internal-only content into `docs/user/`
- Refer to shared glossary for term definitions
- When in doubt, ask — do not guess

## MCP and docs

Model Context Protocol (MCP) lets agents call tools from within their context. For docs, this means:

- An MCP server can expose `read_doc`, `search_glossary`, `find_runbook_for_symptom` as tools
- Agents get live access instead of static context
- This is an advanced pattern — the scaffold does not ship an MCP server yet, but the folder structure anticipates it

## What this is not

Agent-ready does not mean "unreviewed AI prose." Humans still gate accuracy and audience. Agent-friendly structure saves agents (and humans) time finding the right source; it does not replace human judgment on what the source says.
