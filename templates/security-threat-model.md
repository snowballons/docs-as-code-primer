---
title: "Security threat model: [System/Feature]"
---
# Security threat model: [System/Feature]

## Scope

| | |
|--|--|
| **System** | |
| **Review date** | |
| **Reviewer** | |
| **Threat model methodology** | STRIDE / PASTA / VAST |

## Data flow

```text
[Diagram or description of data in motion and at rest]
```

## Assets

| Asset | Classification | Where stored | Where transmitted |
|-------|---------------|--------------|-------------------|
| | Public / Internal / Confidential / Restricted | | |

## Threats (STRIDE)

| Threat type | Description | Impact | Likelihood | Mitigation | Status |
|-------------|-------------|--------|------------|------------|--------|
| Spoofing | | | H / M / L | | Open / Mitigated / Accepted |
| Tampering | | | H / M / L | | Open / Mitigated / Accepted |
| Repudiation | | | H / M / L | | Open / Mitigated / Accepted |
| Information disclosure | | | H / M / L | | Open / Mitigated / Accepted |
| Denial of service | | | H / M / L | | Open / Mitigated / Accepted |
| Elevation of privilege | | | H / M / L | | Open / Mitigated / Accepted |

## Authentication & authorisation

- [ ] Auth mechanism defined
- [ ] Role hierarchy documented
- [ ] Default-deny for new endpoints
- [ ] Service-to-service auth in place
- [ ] Credential rotation schedule exists

## Data protection

- [ ] Encryption at rest (mechanism, key management)
- [ ] Encryption in transit (TLS version, cert management)
- [ ] PII handling documented
- [ ] Data retention / deletion policy
- [ ] Audit logging for sensitive operations

## Attack surface

| Entry point | Exposure | Mitigation |
|-------------|----------|------------|
| | Public / Internal / Admin | |

## Review cadence

| Trigger | Action |
|---------|--------|
| New feature affecting data or auth | Threat model review |
| Quarterly | Review existing threats and mitigations |
| After security incident | Update model with lessons |

## Related

- Architecture overview:
- ADR:
- Security test cases:
