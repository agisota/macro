---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-gantt-creation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/create-gantt-creation.ts
  technology: SolidJS
description: Part of the signed-in client
---

A range drawn or dragged on the chart. All day, it spans the local days `start` to `end` inclusive, each at local midnight; otherwise it runs between the two instants.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/gantt/create-gantt-creation.ts](../../../../../../apps/web/src/components/gantt/create-gantt-creation.ts) | [apps/web/src/components/gantt/gantt-create-area.tsx](../../../../../../apps/web/src/components/gantt/gantt-create-area.tsx) | Invokes supplied callbacks: clearGuide, minDate, onCreate, timed | typescript |
