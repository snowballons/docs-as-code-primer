# Scheduled exports

> **User doc.** This describes what the feature does, how to use it, and what to expect — not how it works internally.

Generate CSV exports of your data on a schedule or on demand — without slowing down your dashboard.

## Overview

The export feature lets you extract data from Acme for reporting, archiving, or integration with other tools. You choose the data, format, and delivery method; Acme processes it in the background and notifies you when it's ready.

**Key capabilities:**

- Export up to 10M rows per job
- Formats: CSV (default), with JSON and Parquet available on Enterprise plans
- Schedule recurring exports or run one-time exports manually
- Delivery via download link, email, or webhook to your system
- Export history visible for 30 days

## How it works

1. Tell the system what to export (filters, columns, schedule).
2. The system processes your request in the background — you can keep working.
3. When the export is ready, you receive a notification with a download link.

Exports typically complete within a few minutes. Larger exports (over 1M rows) or exports running during peak hours may take longer.

## Quick start

### One-time export

```bash
curl -X POST https://api.acme.io/v1/exports \
  -H "Authorization: Bearer $API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "format": "csv",
    "filters": {
      "date_range": { "from": "2024-01-01", "to": "2024-12-31" },
      "status": ["completed", "pending"]
    },
    "delivery": {
      "method": "download"
    }
  }'
```

Check status:

```bash
curl https://api.acme.io/v1/exports/{job_id} \
  -H "Authorization: Bearer $API_KEY"
```

When the status is `completed`, the download link is available at `response.download_url`.

### Scheduled export

Schedule weekly exports in the dashboard:

1. Navigate to **Settings → Exports**.
2. Click **Create schedule**.
3. Choose dataset, format, frequency (daily, weekly, monthly), and delivery method.
4. Save. The first export runs at the next scheduled window.

## Limitations

| Area | Detail |
|------|--------|
| Max rows per export | 10M (CSV and JSON); 50M (Parquet on Enterprise) |
| Export history | 30-day retention |
| Concurrent exports | 4 per organization |
| Schedule minimum interval | 1 hour |

## Common questions

**How do I know my export is done?**
Set `delivery.method` to `webhook` and provide a callback URL. When the export completes, we POST to your URL with the status and download link.

**What happens if my export fails?**
The system retries automatically. If it still fails after three attempts, you'll receive a notification with the error details. Common causes: very large datasets timing out, or invalid filter combinations.

**Can I cancel an export?**
Yes — use the dashboard or API to cancel any export with status `queued` or `processing`.

## Related

- [API reference: Exports](../api-reference/overview.md)
- [Tutorial: Schedule automated reports](../tutorials/schedule-automated-exports.md)
- [Troubleshooting: Export issues](../troubleshooting/export-issues.md)
- [Changelog: Export improvements](../changelog/2024-03-15-export-improvements.md)
