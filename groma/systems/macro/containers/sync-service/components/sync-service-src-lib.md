---
type: C4 Component
title: Cloudflare Worker синхронизации
status: stable
groma:
  id: sync-service-src-lib
  parent: sync-service
  code:
    - scanner: rust
      file: services/sync-service/src/lib.rs
description: Принимает fetch-события и направляет их router
---

Инициализирует telemetry и передаёт запросы в inbound worker; crate без отдельного `main.rs` поэтому не получает stable container автоматически.
