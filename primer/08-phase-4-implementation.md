# Phase 4 — Implementation & Code Documentation

| | |
|--|--|
| **Phase** | 4 |
| **Primary path** | `docs/internal/development/` |

## Purpose

Make the codebase approachable: context code cannot express. Goal: a competent engineer productive within roughly one day.

## Ownership

Every developer; docs updates reviewed in the same PR as code.

## Write

- Root README: what / prerequisites / local setup / tests / key commands / architecture pointer
- Per-service READMEs in multi-package repos
- Comments for *why*, not *what*; public API docstrings
- Contribution guide (branches, commits, PR rules, how to update docs)
- Conventions not enforced by linters
- Debugging notes / known footguns (internal honesty welcome)

## Definition of Done (MVP)

- [ ] Root README tested on a clean machine recently
- [ ] Contribution guide linked from README
- [ ] Public surfaces documented

## Mistakes

- Setup guides never re-tested
- Treating doc updates as optional in PRs

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
