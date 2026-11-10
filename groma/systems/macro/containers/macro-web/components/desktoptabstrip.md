---
type: C4 Component
title: Web module
status: stable
groma:
  id: desktoptabstrip
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/tab-layout/DesktopTabStrip.tsx
      symbol: DesktopTabStrip
    - scanner: typescript
      file: apps/web/src/components/app/tab-layout/DesktopTabsController.tsx
    - scanner: typescript
      file: apps/web/src/components/app/tab-layout/open-in-tab-middleware.ts
      symbol: openInNewTabMiddleware
  technology: SolidJS
description: Part of the signed-in client
---

Tabs scroll once they shrink to their minimum width; keep the active one visible.
