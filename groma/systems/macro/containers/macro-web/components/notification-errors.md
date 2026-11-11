---
type: C4 Component
title: Notification errors
status: stable
groma:
  id: notification-errors
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/notification-errors.ts
      symbol: MacOSNotificationUpdateRequiredError
  technology: SolidJS
  group: Desktop shell
description: Keep the existing class name for callers; both desktop senders use this error
---

Keep the existing class name for callers; both desktop senders use this error.
