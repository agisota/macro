---
type: C4 Component
title: Сборка Email service
status: stable
groma:
  id: email-service-src-lib
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/lib.rs
description: Связывает API, sync и фоновые workers
---

Экспортирует единый состав сервиса для HTTP binary и OpenAPI generator.
