---
type: C4 Container
title: Шлюз realtime-событий
status: stable
groma:
  id: connection-gateway
  parent: macro
  technology: Rust, WebSocket, DynamoDB
description: Доставляет уведомления и события сущностей клиентам
---

Держит отдельный WebSocket для notification/entity tracking и heartbeat; документная синхронизация идёт через DSS/sync-service, а не этот шлюз.
