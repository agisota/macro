---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-gantt-today
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/create-gantt-today.ts
  technology: SolidJS
description: Part of the signed-in client
---

One local-day clock per chart, including tabs that resume after midnight.
