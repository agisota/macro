---
type: C4 Component
title: Go to leader
status: stable
groma:
  id: go-to-leader
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/app-sidebar/go-to-leader.ts
    - scanner: typescript
      file: apps/web/src/components/app/app-sidebar/sidebar.tsx
  technology: SolidJS
  group: App shell
description: Whether the "g" leader key is currently awaiting a destination key
---

Whether the "g" leader key is currently awaiting a destination key.
