---
type: C4 Component
title: Zoom
status: stable
groma:
  id: tauri-zoom
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/zoom.ts
      symbol: useDesktopZoom
  technology: SolidJS
description: Zoom inside the signed-in client.
---

Page zoom for the desktop app. The webview has none of its own: wry's `zoomHotkeysEnabled` is Windows-only and Tauri's default menu has no zoom items, so cmd/ctrl with +, - and 0 does nothing until the app binds them.
