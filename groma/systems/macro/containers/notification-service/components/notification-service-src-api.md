---
type: C4 Component
title: HTTP API уведомлений
status: stable
groma:
  id: notification-service-src-api
  parent: notification-service
  code:
    - scanner: rust
      file: services/notification_service/src/api.rs
description: Обслуживает inbox и настройки отписок
---

Регистрирует пользовательские и внутренние routes уведомлений и health endpoints.
