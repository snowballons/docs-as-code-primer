# First week pack

Use this after you copy [`scaffold/`](scaffold/) into your repository. Goal: a **usable** docs spine in about one working week for a small team — not every folder filled.

## Day 0 — Copy the kit (≤ 30 minutes)

1. Copy into your repo root (adjust if monorepo):
   - `scaffold/docs/` → `docs/`
   - `scaffold/.github/workflows/docs.yml`
   - `scaffold/.github/PULL_REQUEST_TEMPLATE.md` (merge if you already have one)
   - `scaffold/AGENTS.md`
   - `scaffold/.markdownlint.json`
   - Optionally `scaffold/llms.txt.example` → `llms.txt`
2. Read [`scaffold/docs/GOVERNANCE.md`](scaffold/docs/GOVERNANCE.md) (stub policy).
3. Keep the canonical map bookmarked: [`appendix/phase-folder-map.md`](appendix/phase-folder-map.md).

## Minimum files to make real (the “7+” pack)

Fill or replace these first. Everything else can stay as folder READMEs until the phase arrives.

| # | Create / fill | Template or example |
|---|---------------|---------------------|
| 1 | `docs/internal/charter/vision.md` | [`templates/vision-charter.md`](templates/vision-charter.md) · [Acme vision](examples/acme-export-platform/internal/charter/vision.md) |
| 2 | `docs/internal/charter/scope.md` | same template (Scope section) |
| 3 | `docs/shared/glossary.md` | start from scaffold glossary · [Acme glossary](examples/acme-export-platform/shared/glossary.md) |
| 4 | One user story under `docs/internal/requirements/` | [`templates/user-story.md`](templates/user-story.md) · [Acme story](examples/acme-export-platform/internal/requirements/user-stories/export-csv.md) |
| 5 | At least three NFR rows in `docs/internal/requirements/non-functional.md` | [`templates/nfr.md`](templates/nfr.md) · [Acme NFRs](examples/acme-export-platform/internal/requirements/non-functional.md) |
| 6 | One ADR in `docs/internal/decisions/` | [`templates/adr.md`](templates/adr.md) · [Acme ADR-001](examples/acme-export-platform/internal/decisions/adr-001-queue-for-exports.md) |
| 7 | `docs/user/getting-started/quickstart.md` | [Acme quickstart](examples/acme-export-platform/user/getting-started/quickstart.md) |
| 8 | *(If you expose an API)* one module spec + OpenAPI stub | [`templates/module-spec.md`](templates/module-spec.md) · [Acme export-service](examples/acme-export-platform/internal/system-design/services/export-service.md) · [OpenAPI sample](examples/acme-export-platform/internal/system-design/api-specs/export-api.yaml) |

Optional the same week if you already page on-call:

| + | File | Example |
|---|------|---------|
| 9 | One symptom runbook under `docs/internal/operations/runbooks/` | [Acme queue backlog](examples/acme-export-platform/internal/operations/runbooks/export-queue-backlog.md) |

## What you may ignore in week 1

Per [`scaffold/docs/GOVERNANCE.md`](scaffold/docs/GOVERNANCE.md):

- Empty phase folders beyond the files above
- `coverage-reports/`, `performance-benchmarks/`, changelog history, retirement docs
- Publishing to MkDocs/Docusaurus/Mintlify — enable [`scaffold/.github/workflows/docs.yml`](scaffold/.github/workflows/docs.yml) lint/link first; site recipes come later

## Definition of done for week 1

- [ ] Charter vision + scope committed
- [ ] Glossary has product-specific terms (not only kit defaults)
- [ ] At least one testable user story + numeric NFRs
- [ ] At least one ADR for a real decision (or a “proposed” ADR for an open decision)
- [ ] User quickstart exists (even if “coming soon” sections are marked TODO)
- [ ] Docs CI workflow runs on PRs that touch `docs/`
- [ ] PR template docs checklist is in use

## Next

- Walk phases in [`LEARNING_PATH.md`](LEARNING_PATH.md) as you build
- Compare patterns in [`examples/acme-export-platform/`](examples/acme-export-platform/)
- When OpenAPI exists, turn on Spectral in the workflow (see commented job in `docs.yml`)
