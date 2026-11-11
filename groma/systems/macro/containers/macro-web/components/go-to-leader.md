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
description: Go to leader inside the signed-in client.
---

Whether the "g" leader key is currently awaiting a destination key.
