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
  group: Desktop shell
description: The native queue is acknowledged only after cancel/send, including across login
---

The native queue is acknowledged only after cancel/send, including across login.
