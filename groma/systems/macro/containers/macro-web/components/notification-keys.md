---
type: C4 Component
title: Notification keys
status: stable
groma:
  id: notification-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/keys.ts
      symbol: notificationKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/unsubscribes.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/notification-soup.ts
      symbol: updateSoupForNotification
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/state-cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/graphql/user-notifications.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/device-registration.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/entity-mutations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/revalidation.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/user-notifications.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/notification/type-preferences.ts
  technology: SolidJS
description: '@deprecated Use `useMutedEntitiesQuery`.'
---

@deprecated Use `useMutedEntitiesQuery`.
