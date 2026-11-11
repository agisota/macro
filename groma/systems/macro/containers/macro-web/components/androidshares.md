---
type: C4 Component
title: AndroidShares
status: stable
groma:
  id: androidshares
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/androidShares.ts
      symbol: useAndroidShares
  technology: SolidJS
description: AndroidShares inside the signed-in client.
---

The native queue is acknowledged only after cancel/send, including across login.
