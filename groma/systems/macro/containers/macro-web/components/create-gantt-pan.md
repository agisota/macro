---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-gantt-pan
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/create-gantt-pan.ts
      symbol: createGanttPan
  technology: SolidJS
description: Part of the signed-in client
---

Owns one middle-button gesture; calendar geometry stays with Gantt.Root.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/gantt/create-gantt-pan.ts](../../../../../../apps/web/src/components/gantt/create-gantt-pan.ts) | [apps/web/src/components/gantt/gantt-chart.tsx](../../../../../../apps/web/src/components/gantt/gantt-chart.tsx) | Invokes supplied callback: clearGuide | typescript |
