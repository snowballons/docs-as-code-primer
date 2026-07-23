---
title: "Functional requirement"
---
# Functional requirement

## ID

FR-NNN

## Title

Short, action-oriented description

## Related user story

Reference to the user story this requirement derives from

## Description

Clear, testable description of what the system must do. Active voice. Avoid "should" — use "must" or "shall" for hard requirements.

**Good:** The system must reject export requests larger than 100MB with a 413 status code and a descriptive error message.
**Avoid:** The system should handle large files gracefully.

## Acceptance criteria (Gherkin)

```gherkin
Scenario: [title]
  Given [precondition]
  When [action]
  Then [expected outcome]
```

## Priority

Must / Should / Could / Won't (MoSCoW)

## Dependencies

- FR-NNN must be complete first
- External systems: [name]

## Notes

- Edge cases not covered by criteria
- Questions for further refinement
- Known constraints or open decisions

## Traceability

- User story:
- Test case IDs:
- Feature doc (`docs/user/…`):
