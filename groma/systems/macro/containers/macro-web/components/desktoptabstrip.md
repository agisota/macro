---
type: C4 Component
title: DesktopTabStrip
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
  group: App shell
description: Tabs scroll once they shrink to their minimum width; keep the active one visible
---

Tabs scroll once they shrink to their minimum width; keep the active one visible.
