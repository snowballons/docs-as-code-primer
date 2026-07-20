# Recipe: Monorepo path variants

When your docs scaffold lives inside a monorepo with multiple services, adjust paths to avoid naming collisions.

## Common patterns

### Pattern A: Single docs tree per service

```text
services/
├── export-service/
│   ├── docs/                 ← scaffold copied here
│   │   ├── internal/
│   │   ├── user/
│   │   └── shared/
│   └── mkdocs.yml
├── webhook-service/
│   ├── docs/
│   └── mkdocs.yml
└── ...
```

Each service has its own docs tree and builds independently. Simplest approach. Add a CI workflow per service.

### Pattern B: Unified docs tree with service subdirectories

```text
docs/
├── services/
│   ├── export-service/       ← per-service internal docs
│   ├── webhook-service/
│   └── shared/               ← cross-service glossary, diagrams
├── user/                     ← user-facing docs for all services
├── shared/                   ← cross-audience safe content
├── internal/                 ← platform-wide architecture, ADRs, runbooks
└── mkdocs.yml
```

Better for integrated services where users interact with multiple services. Single nav structure.

### Pattern C: Per-service with shared upstream

```text
docs/
├── services/
│   ├── export/internal/
│   ├── export/user/
│   ├── webhook/internal/
│   └── webhook/user/
├── platform/                 ← cross-service: ADRs, runbooks, architecture
├── user/                     ← cross-service user docs
└── shared/                   ← glossary, safe diagrams
```

## CI considerations

| Pattern | CI workflow | Site build |
|---------|-------------|------------|
| A | Per-service workflow | Per-service site |
| B | Single workflow, service paths as nav sections | One site |
| C | One workflow with path filters per service | One site with service sections |

## Path conventions

```text
# ADRs are platform-wide, not per-service
docs/platform/decisions/adr-001-service-mesh.md

# Runbooks reference a service
docs/platform/operations/runbooks/export-queue-backlog.md

# User docs per feature, not per service
docs/user/features/scheduled-exports.md
```

## Related

- [Dual publish recipe](dual-publish.md)
- [MkDocs end-to-end recipe](mkdocs-e2e.md)
- [Scaffold](../scaffold/README.DOCS.md)
