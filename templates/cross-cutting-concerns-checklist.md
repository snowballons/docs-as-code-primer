# Cross-cutting concerns checklist

For each concern, document the approach and where it is configured/implemented. Mark N/A only when the concern genuinely does not apply.

## Authentication / Authorisation

- [ ] Auth mechanism (OAuth2, OIDC, API keys, mTLS, …)
- [ ] Token validation and refresh flow
- [ ] Service-to-service auth (if applicable)
- [ ] Admin / read-only / write scopes

## Observability

- [ ] Logging (structured? sampling? PII filtering?)
- [ ] Metrics (RED / USE dashboards? custom business metrics?)
- [ ] Tracing (distributed trace headers supported?)

## Error handling

- [ ] Error response schema across all services
- [ ] Retry policy (which errors are retryable, backoff strategy)
- [ ] Fallback behaviour (circuit breaker, degraded mode)

## Resilience

- [ ] Timeouts per service/external dependency
- [ ] Rate limiting strategy
- [ ] Bulkhead / resource isolation
- [ ] Graceful shutdown

## Configuration and secrets

- [ ] Config source (env, config file, config service)
- [ ] Secrets storage (vault, K8s secrets, encrypted env)
- [ ] Rotation policy

## Caching

- [ ] What is cached, where, for how long
- [ ] Invalidation strategy
- [ ] Cache warming (if applicable)

## Data

- [ ] Data classification (PII, sensitive, public)
- [ ] Retention policy
- [ ] Encryption at rest / in transit
- [ ] Backup and recovery

## Audit

- [ ] What is audited (access, mutations, admin actions)
- [ ] Audit log destination and retention
- [ ] Compliance requirements

## Related

- Architecture overview: [`templates/c4-architecture-outline.md`](c4-architecture-outline.md)
- ADR template: [`templates/adr.md`](adr.md)
