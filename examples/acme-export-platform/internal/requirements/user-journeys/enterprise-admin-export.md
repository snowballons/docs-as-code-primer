# User journey: Self-serve data export

**Persona:** Enterprise Admin
**Scenario:** Export usage data for quarterly compliance audit

## Journey stages

```text
Discover ──▶ Configure ──▶ Execute ──▶ Retrieve ──▶ Verify
```

### 1. Discover

**Goal:** Learn that exports exist and whether they meet compliance needs.

| Step | Touchpoint | User feeling | Docs/UX |
|------|-----------|-------------|---------|
| Opens dashboard Settings | Dashboard UI | "Is there an export here?" | Settings nav |
| Sees Export section | Settings page | "Yes, this looks right." | Export section with description |
| Checks format options | Export settings | "CSV works for our auditor." | Format dropdown |

### 2. Configure

**Goal:** Set up the export with correct parameters.

| Step | Touchpoint | User feeling | Docs/UX |
|------|-----------|-------------|---------|
| Selects date range | Date picker | "I need Q1 data." | Calendar widget |
| Chooses columns | Column selector | "We only need usage columns." | Multi-select with search |
| Sets schedule (optional) | Schedule picker | "I'll run this quarterly." | Frequency dropdown |
| Adds webhook URL | Webhook field | "Our compliance tool can receive this." | URL input with HTTPS validation |

### 3. Execute

**Goal:** Trigger the export and confirm it starts.

| Step | Touchpoint | User feeling | Docs/UX |
|------|-----------|-------------|---------|
| Clicks Create Export | Submit button | "Did it work?" | Loading state + confirmation |
| Sees job created | Job status page | "OK, it's queued." | Status: queued with ETA |
| Gets confirmation email | Email | "I'll come back when it's done." | Email with job ID |

### 4. Retrieve

**Goal:** Get the file and deliver it to the auditor.

| Step | Touchpoint | User feeling | Docs/UX |
|------|-----------|-------------|---------|
| Receives completion notification | Email / webhook | "Export is ready." | Link to download page |
| Downloads file | Download page | "This is a lot of rows." | Progress bar for large files |
| Verifies checksum | Download page | "File is intact." | SHA256 checksum displayed |

### 5. Verify

**Goal:** Confirm the data is correct and usable.

| Step | Touchpoint | User feeling | Docs/UX |
|------|-----------|-------------|---------|
| Opens file in spreadsheet app | Local app | "Columns match what I selected." | Standard CSV format |
| Checks row count | Local app | "Matches the expected total." | Row count in completion email |
| Files for audit | Email to auditor | "Done. Took 10 minutes." | — |

## Pain points observed

- **No webhook by default:** 60% of users poll the API instead of receiving push notifications
- **Column selection not saved:** Recurring exports lose custom column config
- **File size surprise:** No warning before downloading a 2GB CSV

## Opportunities

- Add webhook as default delivery for recurring exports
- Save column preferences per export schedule
- Show estimated file size before download
