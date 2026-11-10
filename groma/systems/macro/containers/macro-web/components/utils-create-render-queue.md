---
type: C4 Component
title: Web module
status: stable
groma:
  id: utils-create-render-queue
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/utils/create-render-queue.ts
      symbol: createRenderQueue
  technology: SolidJS
description: Part of the signed-in client
---

Coalesces keyed render work and yields between jobs.
