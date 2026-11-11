---
type: C4 Component
title: Create diff reveal
status: stable
groma:
  id: create-diff-reveal
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/create-diff-reveal.ts
      symbol: createDiffReveal
  technology: SolidJS
description: Create diff reveal inside the signed-in client.
---

Queues each file body when its card approaches the stack viewport.
