# Frontend architecture: [Project / App name]

## Technology stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | | |
| State management | | |
| Routing | | |
| Styling | | |
| HTTP client | | |
| Test framework | | |

## App structure

```text
src/
├── pages/        # Route-level entry points
├── components/   # Reusable UI components
├── features/     # Feature modules (slices)
├── api/          # Client API integration layer
├── hooks/        # Shared React hooks / composables
├── store/        # Global state modules
├── types/        # TypeScript / type definitions
└── utils/        # Pure helpers
```

[Or describe your actual structure with a short tree.]

## Key architectural decisions

| Decision | Choice | Rationale |
|----------|--------|-----------|
| | | |

## Data flow

- How does data move from API to UI?
- Where does caching live?
- How does optimistic update work?

## State management

- What is global vs local?
- How is server state vs client state separated?
- Persistence / rehydration strategy?

## Routing

- Route table with lazy-loading boundaries
- Guard / auth logic
- Error boundaries per route segment

## Error handling

- API error → user-facing message mapping
- Global error boundary behaviour
- Offline / degraded UX states

## Performance targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| FCP | | |
| LCP | | |
| TTI | | |
| Bundle size (gzip) | | |

## Accessibility

- Target WCAG level:
- Key a11y patterns used:

## Testing strategy

| Layer | Tool | What we test |
|-------|------|-------------|
| Unit | | |
| Component | | |
| Integration | | |
| E2E | | |

## Related docs

- Architecture (C4):
- API specs:
- Module spec (backend):
- Design system / UI kit:
