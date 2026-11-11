---
type: C4 Component
title: Запуск Authentication service
status: stable
groma:
  id: authentication-service-src-main
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/main.rs
      symbol: main
description: Загружает конфигурацию и стартует HTTP-сервис
---

Является deployable entry point, а не владельцем правил signup или OAuth.
