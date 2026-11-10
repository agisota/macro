---
type: C4 Component
title: Marketing entry
status: stable
groma:
  id: main-index
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/app/main/index.tsx
  technology: SolidJS
description: Public homepage entry
---

Drops prerendered HTML in #root, then Solid renders the public site. It must not import the signed-in app.
