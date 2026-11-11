---
type: C4 Component
title: HTTP-маршруты sync-service
status: stable
groma:
  id: worker
  parent: sync-service
  code:
    - scanner: rust
      file: services/sync-service/src/inbound/worker.rs
description: Направляет документные запросы в Durable Objects
---

Сопоставляет document/surface routes с room, проверяет входные гранты и не смешивает их с Connection Gateway.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/sync-service/src/inbound/worker.rs](../../../../../../services/sync-service/src/inbound/worker.rs) | [services/sync-service/src/inbound/durable_object.rs](../../../../../../services/sync-service/src/inbound/durable_object.rs) | Маршрутизирует по document ID | Durable Object |
