---
type: C4 Component
title: Linux notification
status: stable
groma:
  id: linux-notification
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/linux-notification.ts
      symbol: showLinuxNotification
  technology: SolidJS
description: Linux notification inside the signed-in client.
---

Do not let a navigation error interrupt Tauri's channel-end bookkeeping.
