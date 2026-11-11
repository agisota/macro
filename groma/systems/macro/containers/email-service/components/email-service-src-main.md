---
type: C4 Component
title: Запуск Email service
status: stable
groma:
  id: email-service-src-main
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/main.rs
      symbol: main
description: Загружает конфигурацию и стартует почтовую службу
---

Запускает HTTP и связанные фоновые задачи без переноса provider-логики в entry point.
