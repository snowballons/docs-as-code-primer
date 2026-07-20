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

### README required sections checklist

Copy into your project's PR checklist or issue template. Every root README needs:

| Section | Required | Why |
|---------|----------|-----|
| What & why | ✅ | Newcomers need the one-paragraph pitch |
| Prerequisites | ✅ | Language, runtime, dependencies, versions |
| Local setup | ✅ | Clone → install → run in 5 steps or fewer |
| Run tests | ✅ | Single command; fastest feedback cycle |
| Key commands | ✅ | lint, format, build, test, coverage |
| Architecture pointer | ✅ | Link to `docs/internal/architecture/` or equivalent |
| CI status badge | ✅ | At-a-glance health check |
| Contribution link | ✅ | Link to CONTRIBUTING.md or `docs/internal/development/` |
| License | ✅ | Required for open-source; recommended for internal |
| Debugging notes | ⭐ | Known footguns, port conflicts, env var quirks |
| Per-service READMEs | ⭐ | Mandatory for monorepos with multiple packages |
| On-call / support info | ⭐ | Link to runbooks, escalation paths |
| FAQ / Troubleshooting | ◻ | Only when questions recur |
| Performance targets | ◻ | Benchmarks, latency SLOs for the service |

> ✅ = must have ⭐ = strongly recommended ◻ = consider when relevant

### README bad → good (full example)

```text
Bad:

  # export-service

  Exports data. Uses Go.

  ## Setup

  Install Go, run `go run .`

Good:

  # export-service

  **What:** Schedules and runs CSV/JSON exports for enterprise tenants.
  Adheres to the Export Platform API contract at `docs/internal/architecture/`.

  | | |
  |---|---|
  | **Language** | Go 1.22 |
  | **Build** | `make build` |
  | **Test** | `make test` → `make coverage` |
  | **Lint** | `make lint` (golangci-lint) |
  | **CI** | ![ci](https://github.com/org/export-service/actions/workflows/ci.yml/badge.svg) |

  ## Prerequisites

  - Go ≥ 1.22 (see `.tool-versions`)
  - PostgreSQL 16 running locally or via `docker compose up -d db`
  - `golangci-lint` (optional — CI lints for you)

  ## Local setup

  ```bash
  git clone https://github.com/org/export-service
  cd export-service
  go mod download
  cp .env.example .env          # edit DB_DSN if different
  make migrate                  # runs schema migrations
  make test                     # 237 passing, 0 skipped
  ```

  ## Architecture

  See [docs/internal/architecture/context-diagram.md](docs/internal/architecture/context-diagram.md)
  and [ADR-001: queue for exports](docs/internal/decisions/adr-001-queue-for-exports.md).

  ## Debugging / footguns

  - Port 8080 is hard-coded in dev mode; change via `EXPORT_PORT`.
  - CSV export of >1M rows needs `WORKER_COUNT=4` or it times out after 30 s.
  - Postgres `LISTEN/NOTIFY` channel may drop under PgBouncer — use direct connection.

  ## License

  MIT
```

### Bad → good (comments)

```text
Bad:  // Increment i by 1
Good: // Use a mutex rather than a channel to avoid priority inversion in the scheduler.

Bad:  // Check if user is admin
Good: // Admin users bypass the rate limiter. Non-admins are throttled to 10 req/s.
       // This is a security requirement from SOC 2 — do not remove without
       // discussing with the security team.
```

## Definition of Done (MVP)

- [ ] Root README tested on a clean machine recently
- [ ] Contribution guide linked from README
- [ ] Public surfaces documented

## Mistakes

- Setup guides never re-tested
- Treating doc updates as optional in PRs

## Check yourself

1. You find a comment that says `// Initialize the counter`. What's the missing information?
2. Your README says "run `make test` to test" but nothing about prerequisites. What minimum sections are missing?
3. An engineer says "docs updates aren't needed in this PR — I'll add them before the release." What rule does this violate?

## Use

- Template: [`templates/contribution-guide.md`](../templates/contribution-guide.md)
- Keep docs changes in the scaffold PR template checklist

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
