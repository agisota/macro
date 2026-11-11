---
type: C4 Component
title: Create render queue
status: stable
groma:
  id: utils-create-render-queue
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/utils/create-render-queue.ts
      symbol: createRenderQueue
  technology: SolidJS
  group: Workspace core
description: Coalesces keyed render work and yields between jobs
---

Coalesces keyed render work and yields between jobs.
