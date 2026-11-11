---
type: C4 Component
title: HotkeyRoot
status: stable
groma:
  id: hotkeyroot
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/signals/hotkeyRoot.ts
  technology: SolidJS
  group: Workspace state
description: Subscribe to keypress events
---

Subscribe to keypress events. Automatically cleans up on unmount.
