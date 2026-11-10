---
type: C4 Component
title: Web module
status: stable
groma:
  id: kanban-virtualizer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/kanban/kanban-virtualizer.ts
  technology: SolidJS
description: Part of the signed-in client
---

Keep the drag source mounted even when its column or card leaves the viewport.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/kanban/kanban-virtualizer.ts](../../../../../../apps/web/src/components/kanban/kanban-virtualizer.ts) | [apps/web/src/components/kanban/kanban-board.tsx](../../../../../../apps/web/src/components/kanban/kanban-board.tsx) | Invokes supplied callbacks: getScrollElement, keys, laneId | typescript |
