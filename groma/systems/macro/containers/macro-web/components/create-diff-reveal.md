---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-diff-reveal
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/create-diff-reveal.ts
      symbol: createDiffReveal
  technology: SolidJS
description: Part of the signed-in client
---

Queues each file body when its card approaches the stack viewport.
