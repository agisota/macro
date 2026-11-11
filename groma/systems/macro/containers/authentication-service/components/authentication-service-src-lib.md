---
type: C4 Component
title: Сборка Authentication service
status: stable
groma:
  id: authentication-service-src-lib
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/lib.rs
description: Связывает API, домен и серверную композицию
---

Общий library target используется сервером и вспомогательными генераторами конфигурации и OpenAPI.
