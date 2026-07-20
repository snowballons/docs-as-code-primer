# System context — Acme Export Platform

C4 Level 1 style view for onboarding and shared orientation.

```mermaid
flowchart LR
  Admin[Enterprise Admin]
  Dev[API Developer]
  Acme[Acme Export Platform]
  Billing[Billing System]
  Mail[Email Provider]
  DW[(Account Data Warehouse)]

  Admin -->|Requests export / downloads file| Acme
  Dev -->|REST API| Acme
  Acme -->|Read usage data| DW
  Acme -->|Verify entitlement| Billing
  Acme -->|Send ready notification| Mail
```

## Notes

- Billing is the entitlement source of truth for who may export.
- Warehouse access is read-only from the export workers.
- See [Container diagram](container-diagram.md) for the Level 2 view.
