---
title: "Risk register: Acme Export Platform"
description: "| # | Risk | Likelihood | Impact | Mitigation | Owner | |---|------|------------|--------|------------|-------| | 1 | Large export (>10M rows) times out | Medium | High | Warn in UI; recommend filters"
---
# Risk register: Acme Export Platform

| # | Risk | Likelihood | Impact | Mitigation | Owner |
|---|------|------------|--------|------------|-------|
| 1 | Large export (>10M rows) times out | Medium | High | Warn in UI; recommend filters; push to Parquet path | Engineering |
| 2 | Queue stalls silently (worker crash) | Low | High | Dead-letter alert; runbook for queue backlog | SRE |
| 3 | Webhook delivery fails | Medium | Low | Retry 3x; fall back to download link in notification | Engineering |
| 4 | Users export sensitive data they shouldn't see | Low | Critical | Row-level security enforced in query; audit log | Security |
| 5 | Exports slow down dashboard queries | Medium | Medium | Read from replica, not primary; queue limits concurrency | Engineering |
| 6 | Export format changes break automation | Medium | Medium | Versioned format field; migration guide per breaking change | Product |
