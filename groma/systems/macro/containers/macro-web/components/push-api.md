---
type: C4 Component
title: Web module
status: stable
groma:
  id: push-api
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/push-api.ts
  technology: SolidJS
description: Part of the signed-in client
---

One member per lifecycle type so a handler that returns early on them narrows the rest to NotificationEvent.
