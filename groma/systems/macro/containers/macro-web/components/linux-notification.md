---
type: C4 Component
title: Web module
status: stable
groma:
  id: linux-notification
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/linux-notification.ts
      symbol: showLinuxNotification
  technology: SolidJS
description: Part of the signed-in client
---

Do not let a navigation error interrupt Tauri's channel-end bookkeeping.
