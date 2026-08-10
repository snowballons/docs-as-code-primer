# State machine: [entity name]

> Starter stub. Replace with stateDiagram-v2 for each lifecycle entity.

## Diagram

```mermaid
stateDiagram-v2
    [*] --> StateA
    StateA --> StateB : event
    StateB --> StateA : revert
    StateB --> [*]
```

## Transitions

| From | To | Trigger | Side effects |
|------|----|---------|--------------|
| StateA | StateB | event | |

## Error states

| State | Meaning | Recovery |
|-------|---------|----------|
| | | |
