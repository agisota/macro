---
type: C4 Component
title: Web module
status: stable
groma:
  id: analytics
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/analytics/analytics.ts
  technology: SolidJS
description: Part of the signed-in client
---

Resolves the user's device context for analytics enrichment.  `getPlatform()` runtime-detects via `isTauri()` + `@tauri-apps/plugin-os`: - Tauri iOS/Android → 'ios' | 'android' → 'mobile-app' - Tauri desktop OS → 'desktop' → 'desktop-app' - Plain browser → 'web'  On web, `isTouch
