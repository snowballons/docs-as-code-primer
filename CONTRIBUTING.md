---
title: "Contributing"
description: "This repository is a primer and structure kit. Contributions should improve **clarity, accuracy, or usability** of the scaffolding and guidance."
---

# Contributing

This repository is a primer and structure kit. Contributions should improve **clarity, accuracy, or usability** of the scaffolding and guidance.

## Good contributions

- Fixes to broken links, typos, or unclear instructions
- Improvements to templates (missing required sections, better examples)
- Additional filled samples under `examples/` that follow the two-audience rules
- Recipes for publishing stacks (keep them short and vendor-neutral where possible)
- Scaffold stub improvements that make “what goes here” clearer

## Out of scope (please discuss in an issue first)

- Turning this into a large awesome-list of tools
- Adding a custom application or heavy build system
- Expanding into general Agile/SRE/product-management handbooks unrelated to documentation artifacts

## How to contribute

1. Open an issue describing the change (unless it is a tiny fix).
2. Keep PRs focused — one concern per PR.
3. Match the existing tone: direct, opinionated, developer-native.
4. If you change the scaffold tree, update `scaffold/README.DOCS.md` and any phase→path tables in the primer.

## Style

- Prefer Markdown.
- Prefer Mermaid for diagrams in examples.
- Do not put secrets, real credentials, or real customer data in examples.

## Definition of Done

A PR is done when **all** of the following hold:

1. The three automated gates are green: `rumdl check .`, `npx cspell` (project words), and the link check.
2. The scaffold/kit split is respected — no scaffold content edited as a proxy for teaching (see `AGENTS.md`).
3. **Human-read pass.** Read the final diff as a reader, not a writer:
   - no truncated sentences or words (a known failure mode of AI-written drafts);
   - no invented vocabulary, fake citations, or name-drops without a source;
   - no filler or buzzwords; every sentence earns its place.
   If you cannot honestly tick the human-read item on the PR template, the PR is not done. This step exists precisely because no linter can catch it.
