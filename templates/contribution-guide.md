---
title: "Contribution guide"
description: "> Every developer should know how to contribute within their first hour of reading the codebase."
---
# Contribution guide

> Every developer should know how to contribute within their first hour of reading the codebase.

## Repository

- Source repo:
- Issue tracker:
- Discussion forum:

## Getting started

1. Clone the repo.
2. Run the one-command setup: `make install` or `npm install` or equivalent.
3. Run the tests: `make test` or equivalent.
4. Open the app: `make dev` or equivalent.

[Link to a more detailed setup guide if one exists.]

## How we work

### Branch naming

```text
<type>/<short-description>
```

Types: `feat/`, `fix/`, `refactor/`, `docs/`, `chore/`

### Commit style

We use [conventional commits](https://www.conventionalcommits.org/):

```text
<type>(<scope>): <description>
```

Examples:

- `feat(export): add CSV pagination`
- `fix(api): handle timeout on large exports`
- `docs: add runbook for queue backlog`

### Pull requests

1. Create a branch from `main` (or the current release branch).
2. Keep PRs small — one logical change when possible.
3. Fill out the PR template checklist.
4. Request review from at least one person in the relevant `CODEOWNERS` group.
5. Merge via squash with a clean commit message.

### Code review expectations

- Reviews happen within [N] business hours.
- Authors are responsible for responding to feedback.
- PRs require [N] approvals before merge.
- Docs changes require a docs review (not necessarily from the same person as the code review).

## How to update docs

### When docs change with code

If your PR touches a behaviour visible to users or operators, update the relevant docs in `docs/` within the same PR.

Use this decision tree:

```text
Did this change affect behaviour, contracts, ops, or onboarding?
├── No → no docs change needed (state why in PR)
└── Yes
    ├── User-visible? → docs/user/ (+ changelog if needed)
    ├── Builder/operator? → docs/internal/
    └── Shared term/diagram? → docs/shared/
```

### When you find stale docs

- Open an issue or PR to fix them.
- If you're unsure where the truth lives, ask in the PR comments.
- Prefer removing wrong content to leaving it misleading.

## Getting help

- Slack / Discord channel:
- Office hours:
- Mentorship / pairing requests:
