# Security design

| | |
|--|--|
| **Scope** | Export Platform — job orchestration, data access, artifact storage |
| **Reviewed** | Security team (see `docs/internal/charter/stakeholders.md` RACI) |
| **Last review** | 2026-01-15 |

## Threat model summary

| Threat | Likelihood | Impact | Mitigation |
|--------|:---:|:---:|------------|
| Unauthorized access to another tenant's export data | Low | Critical | Row-level security (RLS) on `export_jobs`; API key scoped to tenant ID |
| Leaked API key used to enumerate exports | Medium | High | Rate limiting (100 req/min per key); audit log all `GET /v1/exports` calls |
| Export contains sensitive PII not authorized for download | Medium | Critical | PII field annotations in warehouse schema; strip or encrypt PII unless explicitly requested with `include_pii=true` scope |
| CSV injection via crafted export data | Low | Medium | Sanitize output fields starting with `=`, `+`, `-`, `@` |
| Queue message spoofed to alter job state | Low | Critical | Queue messages signed with per-service HMAC; consumer validates before processing |
| Stale lease exploited to double-process a job | Medium | Low | Leases use `now() + 5m` with atomic compare-and-swap; double-process is idempotent for file writes |

## Data classification

| Category | Examples | Storage | Encryption |
|----------|----------|---------|------------|
| Tenant metadata | name, plan, export_enabled | RDS `tenants` table | AES-256 at rest (RDS encryption) |
| Export content | CSV/JSON/Parquet files with customer data | S3 | AES-256-SSE; customer-managed KMS key option |
| Export metadata | job_id, status, format, timestamps | RDS `export_jobs` | AES-256 at rest |
| Credentials | API key hashes | RDS `api_keys` table | bcrypt hashed; never stored in plaintext |
| Audit logs | Who accessed what export and when | Separate S3 bucket | AES-256-SSE; append-only (S3 Object Lock) |

## Authentication

- API consumers authenticate via `Authorization: Bearer <api-key>` header.
- API keys are issued through the admin console; each key is scoped to one tenant.
- Internal services use mTLS for queue message signing.

## Authorization

- Tenant isolation enforced at the API layer: every endpoint extracts `tenant_id` from the API key and filters all queries by it.
- Row-level security on `export_jobs` as defense-in-depth:

```sql
CREATE POLICY tenant_isolation ON export_jobs
    USING (tenant_id = current_setting('app.tenant_id')::uuid);
```

- Export scope is validated against the tenant's plan: `pro` and `enterprise` tiers allow Parquet format; `free` tier is CSV-only.

## Encryption

| Layer | Mechanism |
|-------|-----------|
| In transit (external) | TLS 1.3 |
| In transit (internal) | mTLS between services |
| At rest (RDS) | AES-256 |
| At rest (S3) | SSE-S3 with optional KMS for sensitive exports |
| Secrets | AWS Secrets Manager; rotated every 90 days |

## Audit logging

Every export API call is logged to the audit S3 bucket:

```json
{
  "timestamp": "2026-03-15T14:30:00Z",
  "actor": "api_key_abc123",
  "tenant": "tenant_xyz",
  "action": "export.create",
  "resource": "job_exp_001",
  "format": "csv",
  "ip": "203.0.113.42",
  "result": "accepted"
}
```

Audit logs are append-only (S3 Object Lock) with a 1-year retention policy.

## Incident response

| Scenario | Detection | Response runbook |
|----------|-----------|------------------|
| Unauthorized export access | Audit log anomaly alert | `docs/internal/operations/runbooks/data-breach.md` |
| API key leak | Key rotated; new key issued; review access logs | `docs/internal/operations/runbooks/compromised-credential.md` |
| Rate limit abuse | Spike in 429 responses from single key | `docs/internal/operations/runbooks/rate-limit-abuse.md` |

## Related

- [Threat model template](../../../../templates/security-threat-model.md)
- [Stakeholders + RACI](../charter/stakeholders.md)
- [Export service module spec](services/export-service.md)
