---
type: C4 Container
title: Фоновые Email Workers
status: stable
groma:
  id: email-workers
  parent: macro
  technology: Rust, SQS, Gmail API, Microsoft Graph
description: Асинхронная синхронизация и доставка почты
---

Отдельный binary `pubsub_workers` запускает Gmail и Outlook sync, backfill, scheduled delivery и recovery. Он отделён от HTTP Email Service; durable acceptance задания не означает provider `Sent`.
