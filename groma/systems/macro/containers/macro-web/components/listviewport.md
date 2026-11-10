---
type: C4 Component
title: Web module
status: stable
groma:
  id: listviewport
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/ListViewport.tsx
      symbol: ListViewport
  technology: SolidJS
description: Part of the signed-in client
---

Shared virtual row engine for unified lists. Controllers own focus and paging.
