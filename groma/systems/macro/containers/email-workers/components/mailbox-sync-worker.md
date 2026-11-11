---
type: C4 Component
title: Синхронизация Outlook
status: stable
groma:
  id: mailbox-sync-worker
  parent: email-workers
  code:
    - scanner: rust
      file: services/email_service/src/mailbox_sync_worker.rs
description: Управляет циклами Outlook sync и health
---

Запускает mailbox loops для писем, контактов, черновиков, команд и watches, а также периодический health snapshot; Gmail идёт отдельными workers.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/email_service/src/mailbox_sync_worker.rs](../../../../../../services/email_service/src/mailbox_sync_worker.rs) | [microsoft-graph](../../../../../externals/microsoft-graph.md) | Синхронизирует Outlook | Microsoft Graph |
