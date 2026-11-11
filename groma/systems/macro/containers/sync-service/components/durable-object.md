---
type: C4 Component
title: Durable Object документа
status: stable
groma:
  id: durable-object
  parent: sync-service
  code:
    - scanner: rust
      file: services/sync-service/src/inbound/durable_object.rs
description: Хранит состояние комнаты и применяет обновления
---

Последовательно обрабатывает сообщения, permissions и snapshots конкретного документа; это не общее состояние всех реплик DSS.
