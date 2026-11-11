---
type: C4 Component
title: Адаптер document sync
status: stable
groma:
  id: helpers
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-sync/source/helpers.ts
description: Открывает документный WebSocket и обновляет токен
---

Подключается к `/document/{documentId}/connect`; при reconnect запрашивает свежий permission token у DSS.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-sync/source/helpers.ts](../../../../../../apps/web/src/lib/service-clients/service-sync/source/helpers.ts) | [apps/web/src/lib/service-clients/service-storage/client.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/client.ts) | Обновляет permission token | Function call |
| [apps/web/src/lib/service-clients/service-sync/source/helpers.ts](../../../../../../apps/web/src/lib/service-clients/service-sync/source/helpers.ts) | [services/sync-service/src/inbound/worker.rs](../../../../../../services/sync-service/src/inbound/worker.rs) | Открывает прямой document WebSocket | WebSocket/Bebop |
| [apps/web/src/lib/service-clients/service-sync/source/helpers.ts](../../../../../../apps/web/src/lib/service-clients/service-sync/source/helpers.ts) | [packages/collaboration/src/sync-service/router.ts](../../../../../../packages/collaboration/src/sync-service/router.ts) | Выбирает multiplexed sync | SyncRouterTransport |
