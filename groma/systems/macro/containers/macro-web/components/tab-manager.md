---
type: C4 Component
title: Tab manager
status: stable
groma:
  id: tab-manager
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/tab-layout/tab-manager.ts
    - scanner: typescript
      file: apps/web/src/components/app/tab-layout/open-in-tab-intent.ts
    - scanner: typescript
      file: apps/web/src/components/app/tab-layout/tab-persistence.ts
  technology: SolidJS
description: Tab manager inside the signed-in client.
---

How an inactive tab comes back: its panes still mounted (parked), a kept capture of a layout that is not mounted, or a saved URL.
