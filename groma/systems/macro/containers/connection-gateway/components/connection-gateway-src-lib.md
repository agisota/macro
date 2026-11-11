---
type: C4 Component
title: Сборка Connection Gateway
status: stable
groma:
  id: connection-gateway-src-lib
  parent: connection-gateway
  code:
    - scanner: rust
      file: services/connection_gateway/src/lib.rs
description: Связывает realtime-транспорт и сервисные модули
---

Экспортирует состав сервиса для binary и поддерживает единый lifecycle подключений.
