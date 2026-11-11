---
type: C4 Component
title: Отслеживание сущностей
status: stable
groma:
  id: tracker
  parent: connection-gateway
  code:
    - scanner: rust
      file: services/connection_gateway/src/service/tracker.rs
description: Подписывает соединения на entity_id и fanout
---

Сопоставляет tracking-запросы клиента с сущностью и направляет её события в нужное соединение; stream_id служит для локальной корреляции частей ответа.
