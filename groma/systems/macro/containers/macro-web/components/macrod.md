---
type: C4 Component
title: Macrod
status: stable
groma:
  id: macrod
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/macrod.ts
  technology: SolidJS
  group: Desktop shell
description: Bridge to the bundled macrod daemon (the local agent runtime) supervised by the desktop app's main process
---

Bridge to the bundled macrod daemon (the local agent runtime) supervised by the desktop app's main process. Desktop only: callers gate on `isDesktopPlatform()` before touching anything here.
