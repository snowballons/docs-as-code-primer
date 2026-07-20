# Sequence diagram: [flow name]

> Starter stub. Replace with a Mermaid sequenceDiagram or draw.io diagram for each multi-component flow. See `templates/sequence-diagram-page.md` for the full template.

## Diagram

```mermaid
sequenceDiagram
    participant Actor as Actor
    participant ServiceA as Service A
    participant ServiceB as Service B

    Actor->>ServiceA: action
    ServiceA->>ServiceB: request
    ServiceB-->>ServiceA: response
    ServiceA-->>Actor: result
```

## Notes

- Error paths:
- Retry strategy:
