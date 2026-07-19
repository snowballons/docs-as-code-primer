# Content governance

## Decision order

When placing new content, ask in order:

1. **Sensitive?** (security controls/absences, exploits, infra, finances, candid weaknesses) → **internal only**
2. **Implementation detail?** (schemas, deploy steps, service mesh internals) → **internal**
3. **Needed for a user goal?** → **user**
4. **Same definition/diagram for both?** → **shared**
5. **Derived from internal for external?** → internal canonical; user curated excerpt

## Flowchart

```text
Outside engineering team?
├── No → internal/
└── Yes
    ├── Sensitive? → internal/
    └── No
        ├── Also exists internally?
        │   ├── Can derive? → derive from internal
        │   └── Else → create both + plan reuse
        └── Applies equally to both? → shared/ else user/
```

## Review standards

| Stream | Review for | Turnaround |
|--------|------------|------------|
| Internal | Accuracy, completeness, consistency | Faster; polish secondary |
| User | Accuracy, clarity, tone, task completion | Higher editorial bar |

## Reuse patterns

1. Single source, multiple renderings (OpenAPI)
2. Shared includes / snippets (glossary)
3. Audience front matter filters (optional advanced)
4. Derive user docs from approved internal design

Next: [Anti-patterns](18-anti-patterns.md)
