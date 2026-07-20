# Database schema / migration: [Name]

## Schema overview

| Table | Purpose | Est. size | Growth rate |
|-------|---------|-----------|-------------|
| | | | |

## Key columns

| Table | Column | Type | Indexed? | FK | Notes |
|-------|--------|------|----------|----|-------|
| | | | | | |

## Migration strategy

| Approach | When to use |
|----------|-------------|
| Expand-contract (additive) | Zero-downtime required; old and new code coexist |
| Backfill | Data transformation on existing rows |
| Online migration tool | Large tables where locks are unacceptable |
| Offline migration | Schema changes incompatible with dual-read |

## Migration plan

### Step 1: [Phase name]

```sql
-- Schema change
```

**Rollback:**
```sql
-- Reverse
```

### Step 2: [Phase name]

```sql
```

**Rollback:**
```sql
```

## Zero-downtime checklist

- [ ] Changes are additive (new columns nullable or have defaults)
- [ ] Old code handles both old and new schema
- [ ] Backfill runs in batches with checkpoint/resume
- [ ] Read path tested against partially-migrated data
- [ ] Rollback script exists and is tested
- [ ] Migration timing coordinated with deploy window

## Related

- ADR:
- Runbook:
- Data retention policy:
