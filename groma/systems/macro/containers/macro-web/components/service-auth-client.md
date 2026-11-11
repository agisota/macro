---
type: C4 Component
title: Клиент Authentication API
status: stable
groma:
  id: service-auth-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-auth/client.ts
description: Запрашивает пользователя, настройки и подключения
---

Содержит операции текущей сессии, OAuth-связывания и account API без встраивания серверной логики в UI.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-auth/client.ts](../../../../../../apps/web/src/lib/service-clients/service-auth/client.ts) | [google](../../../../../externals/google.md) | Запускает OAuth-подключение | OAuth |
| [apps/web/src/lib/service-clients/service-auth/client.ts](../../../../../../apps/web/src/lib/service-clients/service-auth/client.ts) | [services/authentication_service/src/api/user.rs](../../../../../../services/authentication_service/src/api/user.rs) | Читает пользователя и разрешения | HTTPS |
