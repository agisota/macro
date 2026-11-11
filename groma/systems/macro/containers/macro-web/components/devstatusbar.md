---
type: C4 Component
title: Devtools DevStatusBar
status: stable
groma:
  id: devstatusbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/devtools/DevStatusBar.tsx
      symbol: DevStatusBar
  technology: SolidJS
description: Dev status bar and hotkey debugger.
---

The bar is persisted under `dev-status-bar-open` and updates the branch from Vite HMR in dev. `AppChrome` mounts `DevStatusBar` (`Layout.tsx:19`, `Layout.tsx:209`). `HotkeyDebugger.tsx` was not opened. A `hotkey-debugger` debug route exists only when `LOCAL_ONLY` (`routes/routes.ts:881`).
