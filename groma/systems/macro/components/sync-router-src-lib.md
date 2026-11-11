---
type: C4 Component
title: Маршрутизатор document sync
status: stable
groma:
  id: sync-router-src-lib
  parent: macro
  code:
    - scanner: rust
      file: crates/sync_router/src/lib.rs
description: Мультиплексирует документные соединения внутри DSS
---

Связывает виртуальные WebSocket с Durable Objects по document ID и отменяет маршруты при закрытии последнего клиента; уведомления идут по другому соединению.
