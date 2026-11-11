---
type: C4 Component
title: Composition root аутентификации
status: stable
groma:
  id: authentication-service-src-server
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/server.rs
description: Собирает репозитории и внешние адаптеры аккаунтов
---

Передаёт в API конкретные FusionAuth, OAuth, базы и billing-зависимости.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/authentication_service/src/server.rs](../../../../../../services/authentication_service/src/server.rs) | [fusionauth](../../../../../externals/fusionauth.md) | Проверяет пользователей и сессии | HTTPS |
| [services/authentication_service/src/server.rs](../../../../../../services/authentication_service/src/server.rs) | [stripe](../../../../../externals/stripe.md) | Управляет checkout и подписками | HTTPS |
