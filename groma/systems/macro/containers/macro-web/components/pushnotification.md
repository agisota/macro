---
type: C4 Component
title: PushNotification
status: stable
groma:
  id: pushnotification
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/PushNotification.tsx
      symbol: MaybePushNotificationRegistration
  technology: SolidJS
  group: Desktop shell
description: Bumped by every registration-changing action so an in-flight one can detect it was superseded (logout, opt-out, a newer sync) and stop.
---

Bumped by every registration-changing action so an in-flight one can detect it was superseded (logout, opt-out, a newer sync) and stop.
