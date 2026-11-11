---
type: C4 Component
title: Корневой каркас и маршруты
status: stable
groma:
  id: root
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/routes/Root.tsx
      symbol: Root
description: Собирает providers, маршруты и проверку сессии
---

Загружает текущего пользователя и монтирует общий app context; серверную login session этот компонент не создаёт.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [posthog](../../../../../externals/posthog.md) | Идентифицирует пользователя | PostHog |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/lib/queries/auth/user-info.ts](../../../../../../apps/web/src/lib/queries/auth/user-info.ts) | Предзагружает идентичность | Function call |
