---
title: "Anti-patterns"
description: "Each anti-pattern includes a condensed example and the preferred pattern. See the [Bad examples gallery](/appendix/bad-examples-gallery/) for full before/after pairs."
---
# Anti-patterns

Each anti-pattern includes a condensed example and the preferred pattern. See the [Bad examples gallery](/appendix/bad-examples-gallery/) for full before/after pairs.

## 1. Single stream forever

**Anti-pattern:** "We'll split internal/user later" usually means never. One folder serves both audiences; internal trade-offs leak to customers; user-friendly narrative never gets written.

**Fix:** Split into `docs/internal/` and `docs/user/` from day one. The scaffold enforces this. Shared content lives in `docs/shared/`.

## 2. Sanitized internal docs

**Anti-pattern:** Internal docs omit failure modes, open questions, and trade-offs because they "look messy." Inheriting engineers learn nothing about what breaks.

```text
Bad — sanitised: "The export queue processes jobs in the background."
Good — candid: "If a worker is OOM-killed mid-query, the PG connection pool holds the abandoned
connection until TCP timeout. Fix is in review. See issue #892."
```

**Fix:** Internal honesty is a feature. Document known failures and open questions.

## 3. Engineer-speak published as user docs

**Anti-pattern:** API endpoints and implementation details dumped as user documentation. Users do not care about `POST /v1/exports` — they care about exporting their data.

```text
Bad — engineer-speak:
"The export job is processed asynchronously. Poll GET /v1/exports/{id} until status='completed'."

Good — goal-oriented:
"Acme processes your export in the background and notifies you when the file is ready.
Most exports complete within 2 minutes."
```

**Fix:** Write from user goals, not system internals. Derive user content from internal sources; do not copy them verbatim.

## 4. Duplication without reuse

**Anti-pattern:** Two glossaries (one internal, one user) define the same term differently. They drift within months.

**Fix:** One canonical glossary in `docs/shared/glossary.md` with audience-specific expansions. Never define the same fact in two places.

## 5. Untested runbooks

**Anti-pattern:** Runbooks exist but have never been executed. An on-call engineer follows the steps and hits a command that no longer works, a missing permission, or a stale URL.

**Fix:** Test runbooks in game days. Include a "Last tested" field. Treat untested runbooks as unverified.

## 6. Raw OpenAPI as customer API docs

**Anti-pattern:** Swagger UI or a raw OpenAPI dump as the only API documentation. No auth overview, no mental model, no curated examples, no error-handling guidance.

**Fix:** Curate: overview + auth + mental model + worked examples + error scenarios. Generate endpoint reference from the same OpenAPI spec.

## 7. Coupled deploys that block both streams

**Anti-pattern:** One pipeline deploys both internal and user docs. A typo in user docs blocks an internal runbook update; internal candid language blocks a user doc from deploying.

**Fix:** One pipeline is fine for MVP. Split when one stream's review cadence or deployment target diverges.

## 8. Docs after the release train

**Anti-pattern:** "We'll document it before the release." The release ships. Documentation is a forever-pending task. Next sprint's work starts; the docs backlog grows.

**Fix:** Documentation is part of the Definition of Done. A feature is not shipped until the matching doc path is updated or explicitly waived.

## 9. Tool cosplay

**Anti-pattern:** Adopting Docusaurus, Confluence, or Notion without changing how the team thinks about docs. The tool is pretty; the content is still unstructured and stale.

**Fix:** Start with the scaffold and phases. Tools are secondary to discipline. Beautiful site + bad content = still bad content.

## 10. Awesome-list distraction

**Anti-pattern:** Collecting doc tools, templates, and "best practices" from the internet instead of writing the charter and runbooks for your actual system.

**Fix:** Close the browser tabs. Fill Phase 0–2 for your project. The kit has everything you need for the first month.

## Prefer

Scaffold early, fill Phase 0–2 honestly, keep docs in the PR, derive user content from internal truth.

## Gallery

See Appendix: [Bad examples gallery](/appendix/bad-examples-gallery/) for detailed before/after pairs of each anti-pattern.

Next: [Why now (2026)](/primer/why-now-2026/)
