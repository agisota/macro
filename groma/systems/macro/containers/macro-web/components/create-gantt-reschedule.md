---
type: C4 Component
title: Create gantt reschedule
status: stable
groma:
  id: create-gantt-reschedule
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/gantt/create-gantt-reschedule.ts
      symbol: createGanttReschedule
  technology: SolidJS
description: Create gantt reschedule inside the signed-in client.
---

How far a mouse moves before a press becomes a drag.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/gantt/create-gantt-reschedule.ts](../../../../../../apps/web/src/components/gantt/create-gantt-reschedule.ts) | [apps/web/src/components/gantt/gantt-bar.tsx](../../../../../../apps/web/src/components/gantt/gantt-bar.tsx) | Invokes supplied callbacks: onReschedule, onVertical, range | typescript |
| [apps/web/src/components/gantt/create-gantt-reschedule.ts](../../../../../../apps/web/src/components/gantt/create-gantt-reschedule.ts) | [apps/web/src/components/gantt/gantt-undated-chip.tsx](../../../../../../apps/web/src/components/gantt/gantt-undated-chip.tsx) | Invokes supplied callbacks: onReschedule, onVertical, range | typescript |
