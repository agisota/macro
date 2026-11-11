---
type: C4 Component
title: Запуск Connection Gateway
status: stable
groma:
  id: connection-gateway-src-main
  parent: connection-gateway
  code:
    - scanner: rust
      file: services/connection_gateway/src/main.rs
description: Инициализирует realtime-сервер и его хранилища
---

Создаёт deployable-процесс и запускает обработку WebSocket и фоновых задач.
