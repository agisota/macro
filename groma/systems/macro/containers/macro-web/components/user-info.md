---
type: C4 Component
title: Query текущего пользователя
status: stable
groma:
  id: user-info
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/auth/user-info.ts
description: Загружает и кэширует идентичность и разрешения
---

Вызывает `getLegacyUserPermissions` через TanStack Query, восстанавливает offline cache и не делает prefetch без login cookie.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/auth/user-info.ts](../../../../../../apps/web/src/lib/queries/auth/user-info.ts) | [apps/web/src/lib/service-clients/service-auth/client.ts](../../../../../../apps/web/src/lib/service-clients/service-auth/client.ts) | Вызывает getLegacyUserPermissions | Function call |
