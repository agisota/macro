---
type: C4 Component
title: Notification launch
status: stable
groma:
  id: notification-launch
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/notification-launch.ts
  technology: SolidJS
description: Notification launch inside the signed-in client.
---

Keep every tap usable even when navigation or its acknowledgment stalls.
