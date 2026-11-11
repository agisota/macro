---
type: C4 Component
title: Kanban wheel scroll
status: stable
groma:
  id: kanban-wheel-scroll
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/kanban/kanban-wheel-scroll.ts
      symbol: createKanbanWheelScroll
  technology: SolidJS
description: Kanban wheel scroll inside the signed-in client.
---

Keep wheel momentum with its original scroll viewport while columns move under the pointer.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/kanban/kanban-wheel-scroll.ts](../../../../../../apps/web/src/components/kanban/kanban-wheel-scroll.ts) | [apps/web/src/components/kanban/kanban-board.tsx](../../../../../../apps/web/src/components/kanban/kanban-board.tsx) | Invokes supplied callbacks: verticalViewport, viewport | typescript |
