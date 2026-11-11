---
type: C4 Component
title: SyncRouterTransport
status: stable
groma:
  id: router
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/sync-service/router.ts
      symbol: SyncRouterTransport
description: Мультиплексирует документы в один WebSocket к DSS
---

Выдаёт виртуальные SyncSocket, оборачивает кадры в ToRouter/FromRouter и повторно подписывается с новым token после разрыва.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/collaboration/src/sync-service/router.ts](../../../../packages/collaboration/src/sync-service/router.ts) | [services/document_storage_service/src/api/sync.rs](../../../../services/document_storage_service/src/api/sync.rs) | Открывает router WebSocket | WebSocket/Bebop |
