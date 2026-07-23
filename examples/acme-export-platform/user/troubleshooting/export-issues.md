---
title: "Troubleshooting: Export issues"
description: "Problems with exporting your data and how to fix them."
---
# Troubleshooting: Export issues

Problems with exporting your data and how to fix them.

## Quick reference

| Symptom | Most likely cause | Quick fix |
|---------|------------------|-----------|
| Export stuck on "Processing" | Large dataset or peak-hour load | Wait 5 minutes. If still stuck, cancel and retry with a smaller date range. |
| "Export failed" with no details | Transient warehouse timeout | Retry the export. If it fails again, split the date range in half. |
| Download link doesn't work | Link expired (valid for 24 hours) | Request a new export or use the **Download** button in Export history. |
| CSV shows garbled characters | Encoding issue with non-ASCII data | Open the CSV in a text editor and save as UTF-8. Or use JSON format. |
| Scheduled export didn't arrive | Schedule deleted or delivery misconfigured | Check **Settings → Exports** for active schedules. Verify delivery method. |

## Common issues

### Export stuck on "Processing" for more than 10 minutes

**Why it happens:** Large exports (> 5M rows) or exports during peak hours (14:00–16:00 UTC) can take longer than usual. The system retries automatically on transient failures, which adds time.

**Solution:**

1. Check the export status in **Data → Export history**.
2. If it's been "Processing" for more than 10 minutes — cancel it.
3. Create a new export with a narrower date range (e.g., 3 months instead of 12).
4. If it still stalls, split into multiple exports.

### Export fails with "Query timeout"

**Error:** `The query took too long to complete. Try narrowing your filters.`

**Why it happens:** The query against your account data exceeded the 60-second timeout. This usually happens with very broad filters or heavily filtered datasets.

**Solution:**

1. Narrow the date range. Try 3 months instead of 12.
2. Remove unnecessary filters.
3. If you need the full dataset, split it into monthly exports.

### Download link expired

**Why it happens:** Download links are valid for 24 hours after the export completes. This is a security measure.

**Solution:**

1. Go to **Data → Export history**.
2. Find the export and click **Download** (generates a fresh link).
3. If the export is older than 30 days, it has been deleted (retention policy). Create a new export.

### CSV has garbled or misaligned columns

**Why it happens:** Some cells contain commas, newlines, or special characters that confuse basic CSV parsers.

**Solution:**

1. Open the CSV in a text editor (not Excel) to confirm the raw data is correct.
2. Try the **JSON** format instead — it handles special characters reliably.
3. If you must use CSV, ensure your importing tool is configured for UTF-8 and quoted fields.

### Scheduled export missed a run

**Why it happens:** The schedule may have been deleted, or the delivery method is misconfigured. Schedules do not run on empty datasets (no data for the range = skipped delivery).

**Solution:**

1. Go to **Settings → Exports** and confirm the schedule is **Active**.
2. Check the delivery method. If using webhook, verify your endpoint is responding.
3. If using email, check spam and verify the email address on the schedule.
4. If the dataset had no new data, that run is intentionally skipped. Check the schedule history for details.

## Known limitations

| Limitation | Workaround |
|-----------|------------|
| Max 10M rows per export | Split into multiple exports by date range |
| 4 concurrent exports per org | Wait for one to complete, or cancel a running export |
| 30-day export history | Download and archive exports you need long-term |
| No custom SQL exports | Use the API to filter by available parameters |
| Webhook timeout (5s) | Respond with 200 immediately, then process asynchronously |

## Getting help

If these steps don't resolve your issue:

- Search our [status page](https://status.acme.io) for ongoing incidents
- Contact support at <support@acme.io> with:
  - The export job ID (from **Export history**)
  - The date range and format you used
  - Whether this is a new export or a recurring schedule
  - Steps you already tried

## Related

- [Quickstart: Export your data](/examples/acme-export-platform/user/getting-started/quickstart/)
- [Feature: Scheduled exports](/examples/acme-export-platform/user/features/scheduled-exports/)
- [Tutorial: Schedule automated exports](/examples/acme-export-platform/user/tutorials/schedule-automated-exports/)
- [API overview](/examples/acme-export-platform/user/api-reference/overview/)
