---
type: C4 Component
title: Web module
status: stable
groma:
  id: notification-errors
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/notification-errors.ts
      symbol: MacOSNotificationUpdateRequiredError
  technology: SolidJS
description: Part of the signed-in client
---

Keep the existing class name for callers; both desktop senders use this error.
