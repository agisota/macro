---
type: C4 Component
title: WebSocket `/sync/ws` в DSS
status: stable
groma:
  id: sync
  parent: document-storage-service
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/sync.rs
description: Принимает multiplexed document sync
---

Аутентифицирует аккаунт, открывает SyncSession и передаёт бинарные кадры sync router; document token проверяется downstream.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/document_storage_service/src/api/sync.rs](../../../../../../services/document_storage_service/src/api/sync.rs) | [crates/sync_router/src/lib.rs](../../../../../../crates/sync_router/src/lib.rs) | Передаёт кадры SyncSession | Rust |
| [services/document_storage_service/src/api/sync.rs](../../../../../../services/document_storage_service/src/api/sync.rs) | [services/sync-service/src/inbound/worker.rs](../../../../../../services/sync-service/src/inbound/worker.rs) | Проксирует document frames | WebSocket/Bebop |
