---
type: C4 Component
title: Browser test collab
status: stable
groma:
  id: collab
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-md/comments/browser-test/collab.tsx
  technology: SolidJS
description: Markdown notebook block.
---

The readme states the direction, not a finished API. Drive and home document routes treat `md`, `task`, `snippet`, and `skill` as markdown URL params (`routes/routes.ts:329-338`, `routes/routes.ts:438-446`). The editor implementation was not opened in this pass.
