---
title: "Tutorial: Schedule automated exports"
description: "Set up a recurring CSV export so your team gets weekly data without manual downloads."
---

# Tutorial: Schedule automated exports

Set up a recurring CSV export so your team gets weekly data without manual downloads.

## What you'll learn

By the end of this tutorial you will be able to:

1. Create a scheduled export from the dashboard
2. Choose delivery method (email, webhook, or download)
3. Monitor and modify your schedule

## Prerequisites

- [ ] An enterprise admin account with **Data export** permission
- [ ] A webhook URL (if using webhook delivery) or access to your email inbox

## Scenario

**Time to complete:** 10 minutes

You are the team lead for analytics at Acme Corp. Your team needs a weekly CSV of transaction data delivered every Monday morning. This tutorial shows you how to set it up so the data arrives automatically.

---

### Step 1: Open the schedule form

1. Sign in to Acme.
2. Navigate to **Settings → Exports**.
3. Click **Create schedule**.

### Step 2: Configure the export

1. **Dataset:** select "Transactions".
2. **Date range:** choose "Last 7 days" (this resets each run to the 7 days before the run date).
3. **Format:** select "CSV".
4. **Filters (optional):** leave blank to export all transactions.

### Step 3: Set the schedule

1. **Frequency:** choose **Weekly**.
2. **Day:** select **Monday**.
3. **Time:** choose **08:00 UTC**.

### Step 4: Choose delivery method

Pick one:

**Email delivery (simplest):**

1. Select **Email**.
2. Enter `analytics-team@acme-corp.com`.
3. Acme sends the CSV as a download link when each export completes.

**Webhook delivery (automation):**

1. Select **Webhook**.
2. Enter `https://hooks.acme-corp.com/export-receiver`.
3. Acme POSTs JSON to your URL with `{ "status": "completed", "download_url": "..." }`.

### Step 5: Save and verify

1. Click **Save schedule**.
2. You should see the schedule in the list with status **Active**.
3. The next run appears in the **Next run** column.

**Result:** Your weekly export is active. The first export runs at the next Monday 08:00 UTC window. Allow up to 2 minutes for processing before the delivery arrives.

---

### Modify or delete a schedule

1. Go to **Settings → Exports**.
2. Click the schedule name.
3. Edit any field or click **Delete schedule** to stop future runs.

Deleting a schedule does not remove exports that already completed.

---

## Outcome

You now have a weekly CSV export delivered automatically. Your analytics team gets fresh data every Monday without anyone remembering to run it manually.

## Next steps

- [API overview: Automate exports](/examples/acme-export-platform/user/api-reference/overview/) — control exports programmatically
- [Feature reference: Scheduled exports](/examples/acme-export-platform/user/features/scheduled-exports/) — all options and limitations
- [Troubleshooting: Export issues](/examples/acme-export-platform/user/troubleshooting/export-issues/) — what to do if a scheduled export doesn't arrive

## Troubleshooting

| If this happens | Try |
|----------------|-----|
| Schedule doesn't appear after saving | Refresh the page. If still missing, check that you clicked **Save**. |
| Export doesn't arrive at the scheduled time | Check that the dataset has data for the range. Empty datasets skip delivery. |
| Webhook not receiving notifications | Verify your webhook endpoint is reachable and responds with 200. Check the webhook logs in Settings → Webhooks. |
