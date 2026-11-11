---
type: C4 Component
title: Notification
status: stable
groma:
  id: tauri-notification
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/notification.ts
      symbol: createTauriNotificationInterface
  technology: SolidJS
  group: Desktop shell
description: The notification plugin always reports permission as granted on desktop
---

The notification plugin always reports permission as granted on desktop. Read the actual OS authorization on macOS instead.
