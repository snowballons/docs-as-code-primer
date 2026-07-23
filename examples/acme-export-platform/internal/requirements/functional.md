---
title: "Functional requirements — Acme Export Platform (sample)"
description: "Derived from user stories and charter scope. Each FR maps to a test case and a feature doc."
---
# Functional requirements — Acme Export Platform (sample)

Derived from user stories and charter scope. Each FR maps to a test case and a feature doc.

## FR-EXPORT-1: Accept and validate export requests

| | |
|--|--|
| **Related story** | Export usage data as CSV |
| **Priority** | Must |

The system must accept an export request specifying format, filters, and delivery method, and reject invalid requests with a descriptive error.

**Acceptance criteria:**

```gherkin
Scenario: Valid export request accepted
  Given I am authenticated as an enterprise admin
  When I submit a CSV export for a date range within the last 24 months
  Then the system returns HTTP 202 with a job ID
  And the job status is "enqueued"

Scenario: Date range exceeds limit
  Given I am authenticated as an enterprise admin
  When I submit an export with a date range exceeding 24 months
  Then the system returns HTTP 422 with error "date_range exceeds maximum of 24 months"

Scenario: Unknown format rejected
  Given I am authenticated as an enterprise admin
  When I submit an export with format "xlsx"
  Then the system returns HTTP 422 with a list of supported formats
```

## FR-EXPORT-2: Process export jobs asynchronously

| | |
|--|--|
| **Related story** | Export usage data as CSV |
| **Priority** | Must |

Jobs must be processed through a durable queue with retry and dead-letter handling.

```gherkin
Scenario: Job completes successfully
  Given a job is enqueued with 500k rows
  When the worker processes the job
  Then the file is written to S3
  And the job status transitions to "completed"
  And the user receives a notification

Scenario: Transient failure retried
  Given a job fails due to warehouse timeout
  When the worker retries (up to 3 times)
  Then the job eventually completes or moves to "dead" after exhausting retries

Scenario: Export cancelled while processing
  Given a job has status "processing"
  When the user cancels via API or dashboard
  Then the worker aborts processing
  And partial data is discarded
```

## FR-EXPORT-3: Enforce tenant isolation

| | |
|--|--|
| **Related story** | Enterprise admin data access |
| **Priority** | Must |

Every export must be scoped to the requesting tenant. One tenant must never see another tenant's data.

```gherkin
Scenario: Tenant A cannot access Tenant B's export
  Given an export exists with org_id = "tenant_b"
  When I authenticate as "tenant_a" and request that export's status
  Then the system returns HTTP 404 (not found, not 403)
```

## FR-EXPORT-4: Schedule recurring exports

| | |
|--|--|
| **Related story** | Schedule automated reports |
| **Priority** | Should |

Admins must be able to create, modify, and delete scheduled export jobs.

```gherkin
Scenario: Create a weekly schedule
  Given I am authenticated as an enterprise admin
  When I create a schedule with frequency "weekly", format "csv", and webhook delivery
  Then the schedule is saved
  And the first export runs at the next scheduled window

Scenario: Delete schedule stops future runs
  Given a weekly export schedule exists
  When I delete the schedule
  Then no further exports are created
  And previously completed exports remain accessible
```

## FR-EXPORT-5: Deliver export notifications

| | |
|--|--|
| **Related story** | Receive export when ready |
| **Priority** | Must |

The system must notify the user when an export completes, fails, or is cancelled.

```gherkin
Scenario: Completion notification via webhook
  Given a job with delivery.webhook = "https://example.com/hooks/acme-exports"
  When the job reaches "completed"
  Then the system POSTs to the webhook URL with job status and download_url within 60 seconds

Scenario: Failure notification
  Given a job exhausts all retries
  When the job moves to "dead"
  Then the system sends an email to the requester with the error reason
```

## FR-EXPORT-6: Auto-expire exports

| | |
|--|--|
| **Related story** | Data retention compliance |
| **Priority** | Must |

Completed exports must be retained for a fixed period then automatically removed.

```gherkin
Scenario: Export expires after retention period
  Given a completed export is 30 days old
  When the daily cleanup job runs
  Then the S3 object is deleted
  And the job record status changes to "expired"

Scenario: Notification before expiry
  Given a completed export is 28 days old
  When the user views their export history
  Then the record shows "expires in 2 days"
```

## FR-EXPORT-7: Rate-limit per tenant

| | |
|--|--|
| **Related story** | Fair resource usage |
| **Priority** | Should |

The system must prevent one tenant from saturating all export workers.

```gherkin
Scenario: Concurrent export limit enforced
  Given tenant "abc" has 4 running exports (the per-tenant limit)
  When the tenant submits a 5th export request
  Then the request is accepted with status "queued"
  But it is not picked up by a worker until one of the 4 completes

Scenario: Burst requests rate-limited
  Given I submit 120 export requests in one minute
  When I submit the 121st request
  Then the system returns HTTP 429 with retry-after header
```

## Traceability

| FR | User story | Test case | Feature doc |
|----|-----------|-----------|-------------|
| FR-EXPORT-1 | export-csv | TC-EXPORT-VALIDATION | quickstart.md |
| FR-EXPORT-2 | export-csv | TC-EXPORT-PROCESSING | quickstart.md |
| FR-EXPORT-3 | export-csv | TC-EXPORT-ISOLATION | — |
| FR-EXPORT-4 | scheduled-reports | TC-EXPORT-SCHEDULE | scheduled-exports.md |
| FR-EXPORT-5 | export-csv | TC-EXPORT-NOTIFY | quickstart.md |
| FR-EXPORT-6 | — | TC-EXPORT-EXPIRY | — |
| FR-EXPORT-7 | — | TC-EXPORT-RATELIMIT | — |

## Related

- [Non-functional requirements](/examples/acme-export-platform/internal/requirements/non-functional/)
- [User story: Export CSV](/examples/acme-export-platform/internal/requirements/user-stories/export-csv/)
- [Feature doc: Scheduled exports](/examples/acme-export-platform/user/features/scheduled-exports/)
- [Template: functional-requirements](/templates/functional-requirements/)
