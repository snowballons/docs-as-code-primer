# Constraints & assumptions: Acme Export Platform

## Constraints

| Constraint | Source | Impact |
|------------|--------|--------|
| No new infrastructure — use existing Postgres + Redis | Platform team mandate | Queue must use existing PG for durability; Redis for throughput |
| Max 4 concurrent workers | DB connection pool limits | Burst exports queue; backpressure is by design |
| No PII in export logs | Security policy | Logs must exclude user email, IP, billing info |
| File stored in S3-compatible object store | Existing infra | Must support multipart upload for large files |
| 30-day file retention | Compliance | Requires cleanup job |
| Webhook URLs must be HTTPS | Security policy | Reject non-TLS callback URLs |

## Assumptions

| Assumption | Risk if wrong |
|------------|---------------|
| Most exports are < 1M rows | Queue throughput may need review if avg shifts |
| Users poll for completion | Users want webhooks as primary, not optional |
| Admin dashboard is primary UI | Non-admin users may also need exports |
| One export per user action | Scripted bulk exports may need rate limiting |
