---
type: C4 Component
title: Запуск Notification service
status: stable
groma:
  id: notification-service-src-main
  parent: notification-service
  code:
    - scanner: rust
      file: services/notification_service/src/main.rs
      symbol: main
description: Загружает конфигурацию и стартует службу
---

Инициализирует API и связанные обработчики уведомлений.
