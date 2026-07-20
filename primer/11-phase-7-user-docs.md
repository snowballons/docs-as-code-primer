# Phase 7 — User & End-User Documentation

| | |
|--|--|
| **Phase** | 7 |
| **Primary path** | `docs/user/` |

## Purpose

Help people outside engineering succeed with the product. For many users, docs *are* the product.

## Ownership

Technical writer or PM with eng support; non-technical clarity review recommended.

## Write

- Getting started: minimum path to first value
- Feature docs from **user goals**
- Tutorials for real scenarios
- Consumer API reference (curated from OpenAPI; auth, examples, errors as concepts)
- Troubleshooting seeded from support/QA
- User-facing changelog

### Bad → good (API docs)

| Bad | Good |
|-----|------|
| Paste raw OpenAPI / Swagger UI only | Overview + auth + mental model + examples; generate endpoint reference from the same OpenAPI |
| “POST /v1/exports accepts from/to” | “Create an export job, poll until completed, then download” with a sequence diagram |

### Curated API reference example

OpenAPI specs are the **contract**. User API docs should be the **curated guide** for consumers. Below is the same endpoint shown raw vs curated.

```text
Bad: raw OpenAPI dumped into docs

  POST /v1/exports
  Request body: application/json
    - format: string (enum: csv, json, parquet)
    - schedule: string (cron expression, optional)
    - filters: ExportFilter (optional)
    - recipients: string[] (email addresses)
  Responses:
    202: ExportAccepted
    400: ValidationError
    401: UnauthorizedError
```

```text
Good: curated consumer page for the same endpoint

  Create an export job

  Schedules a data export. The job runs asynchronously — poll the
  job status endpoint (see below) until status is "completed", then
  download the result.

  Common uses:
  • One-time CSV export of all accounts created last month
  • Daily Parquet export to S3 for your data lake

  Required scope: `exports:write`

  Request:

    POST https://api.acme.com/v1/exports
    Authorization: Bearer <your-api-key>

    {
      "format": "csv",
      "recipients": ["admin@example.com"],
      "filters": {
        "created_after": "2026-01-01",
        "region": "us-east-1"
      }
    }

  What happens next:

    POST /v1/exports
         │
         ▼
    202 Accepted ← you are here
    { "job_id": "exp_abc123", "status": "pending" }
         │ poll GET /v1/exports/exp_abc123 every 5s
         ▼
    200 OK
    { "status": "completed", "download_url": "https://..." }
         │
         ▼
    Download the file (link expires in 24 h)

  Error responses you'll actually see:

    • 400 — Invalid format. Supported: csv, json, parquet.
    • 401 — Missing or expired API key.
    • 429 — Rate limit exceeded. Retry after the `Retry-After` header.

  See also:
    • [List exports](.) — check status of recent jobs
    • [Cancel export](.) — stop a pending job
```

A curated page replaces "what the endpoint accepts" with **"what the consumer wants to accomplish."** The OpenAPI stays canonical in `docs/internal/system-design/api-specs/`.

## Definition of Done (MVP)

- [ ] Getting started tested with someone new to the product
- [ ] Features in the release documented
- [ ] API quickstart works in a clean environment
- [ ] Changelog entry written

## Getting-started quality bar

Test with someone who has **never used the product** (colleague from another team, intern, friend). Watch them follow the guide without help:

### First-pass test (observable)

- [ ] Picks the right starting page without guessing
- [ ] Finds all prerequisites before running anything
- [ ] First command / API call succeeds within 5 min
- [ ] Understands what just happened (not just "it worked")
- [ ] Can find what to do next without asking

### Structural requirements

- [ ] Copy-paste code that works (tested on a clean machine this sprint)
- [ ] No "we assume you already have" without a link
- [ ] Every external dependency pinned to a version
- [ ] Expected output shown (exact values or pattern)
- [ ] Error recovery: what to do when step 3 fails
- [ ] Next steps section: where to go after "hello world"

### API quickstart extra

- [ ] Auth step shown with real token or clear placeholder
- [ ] One complete request/response pair
- [ ] Polling or async pattern explained if applicable
- [ ] Links to full reference for edge cases

## Check yourself

1. Your getting-started guide starts with "Create an API key in the admin console, then read the reference docs." What's wrong with this order?
2. An API reference page lists every endpoint alphabetically with its raw schema. What should the ordering be instead?
3. Your team ships a new feature but the only docs are a changelog entry. What three doc types does the primer recommend per feature?

## Use

- Templates: [`templates/getting-started.md`](../templates/getting-started.md), [`templates/feature-user-doc.md`](../templates/feature-user-doc.md), [`templates/tutorial.md`](../templates/tutorial.md), [`templates/troubleshooting.md`](../templates/troubleshooting.md)
- Examples: [`quickstart.md`](../examples/acme-export-platform/user/getting-started/quickstart.md), [`overview.md`](../examples/acme-export-platform/user/api-reference/overview.md)
- Recipe: [`recipes/openapi-to-user-api-ref.md`](../recipes/openapi-to-user-api-ref.md)

---

[Phases overview](03-phases-overview.md) · [Learning path](../LEARNING_PATH.md)
