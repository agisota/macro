---
type: C4 Component
title: Realtime-подключение клиента
status: stable
groma:
  id: websocket
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-connection/websocket.ts
description: Поддерживает WebSocket к Connection Gateway
---

Выполняет heartbeat, reconnect и приём событий сущностей; не используется как транспорт правок документа.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-connection/websocket.ts](../../../../../../apps/web/src/lib/service-clients/service-connection/websocket.ts) | [services/connection_gateway/src/service/tracker.rs](../../../../../../services/connection_gateway/src/service/tracker.rs) | Подписывается на entity events | WebSocket |
