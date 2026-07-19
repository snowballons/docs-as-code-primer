# Diagrams as code

Prefer **text diagrams** in Git for living engineering documentation.

## Default: Mermaid

- Diffs and merges are readable
- Fits PR review
- Works in GitHub/GitLab and most SSGs
- AI tools generate it reliably

Use for: flows, sequences, state diagrams, simple C4-style graphs.

## When to use draw.io (or similar)

Polished visuals, icon-heavy cloud maps, executive decks, precise manual layout.

Pattern: Mermaid as source of truth for engineering docs; export/polish in draw.io only when needed for presentations.

## Practice

- Store Mermaid in Markdown (or `.mmd` next to docs)
- Render in CI or at site build time
- Update the diagram in the **same PR** as the architecture change

See also: [recipes/mermaid-in-ci.md](../recipes/mermaid-in-ci.md)
