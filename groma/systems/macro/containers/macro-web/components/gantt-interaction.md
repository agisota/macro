---
type: C4 Component
title: Web module
status: stable
groma:
  id: gantt-interaction
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/gantt-interaction.ts
  technology: SolidJS
description: Part of the signed-in client
---

A bar's start and inclusive end day; a timed bar's `end` is its exact edge.
