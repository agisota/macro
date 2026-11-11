---
type: C4 Component
title: MacroLinkInterceptor
status: stable
groma:
  id: macrolinkinterceptor
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/macroLinkInterceptor.ts
  technology: SolidJS
description: MacroLinkInterceptor inside the signed-in client.
---

`openExternalUrl` interceptor: inside the native Tauri shell, routes a Macro `/app` link in-app via the same `navigate` event the deep-link handler emits, instead of letting it fall through to `window.open` — which bypasses the webview's navigation hook and would open the link in
