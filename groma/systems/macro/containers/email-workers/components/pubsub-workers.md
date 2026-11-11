---
type: C4 Component
title: Composition root Email Workers
status: stable
groma:
  id: pubsub-workers
  parent: email-workers
  code:
    - scanner: rust
      file: services/email_service/src/bin/pubsub_workers/pubsub_workers.rs
  technology: Rust, SQS, Gmail API, Microsoft Graph
description: Запускает SQS и mailbox consumers
---

Собирает отдельный binary `pubsub_workers`: создаёт очереди, provider adapters, Gmail и Outlook sync loops, backfill и scheduled delivery, затем ожидает graceful shutdown.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/email_service/src/bin/pubsub_workers/pubsub_workers.rs](../../../../../../services/email_service/src/bin/pubsub_workers/pubsub_workers.rs) | [google](../../../../../externals/google.md) | Выполняет Gmail sync и доставку | SQS/Gmail API |
| [services/email_service/src/bin/pubsub_workers/pubsub_workers.rs](../../../../../../services/email_service/src/bin/pubsub_workers/pubsub_workers.rs) | [microsoft-graph](../../../../../externals/microsoft-graph.md) | Выполняет Outlook sync и команды | Microsoft Graph |
