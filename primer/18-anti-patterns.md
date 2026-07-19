# Anti-patterns

1. **Single stream forever** — "we'll split internal/user later" usually means never.
2. **Sanitized internal docs** — engineers need trade-offs and known issues recorded.
3. **Engineer-speak published as user docs** — write from goals, not endpoints.
4. **Duplication without reuse** — two glossaries will drift.
5. **Untested runbooks** — if never executed, treat as unverified.
6. **Raw OpenAPI as customer API docs** — curate auth, examples, concepts.
7. **Coupled deploys that block both streams** — prefer independent pipelines.
8. **Docs after the release train** — if DoD excludes docs, rot is scheduled.
9. **Tool cosplay** — adopting Docusaurus without structure/governance fixes little.
10. **Awesome-list distraction** — collecting tools instead of writing the charter and runbooks.

## Prefer

Scaffold early, fill Phase 0–2 honestly, keep docs in the PR, derive user content from internal truth.
