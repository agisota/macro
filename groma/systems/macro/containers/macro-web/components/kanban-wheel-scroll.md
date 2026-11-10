---
type: C4 Component
title: Web module
status: stable
groma:
  id: kanban-wheel-scroll
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/kanban/kanban-wheel-scroll.ts
      symbol: createKanbanWheelScroll
  technology: SolidJS
description: Part of the signed-in client
---

Keep wheel momentum with its original scroll viewport while columns move under the pointer.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/kanban/kanban-wheel-scroll.ts](../../../../../../apps/web/src/components/kanban/kanban-wheel-scroll.ts) | [apps/web/src/components/kanban/kanban-board.tsx](../../../../../../apps/web/src/components/kanban/kanban-board.tsx) | Invokes supplied callbacks: verticalViewport, viewport | typescript |
