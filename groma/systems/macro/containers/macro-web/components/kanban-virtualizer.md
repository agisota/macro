---
type: C4 Component
title: Kanban virtualizer
status: stable
groma:
  id: kanban-virtualizer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/kanban/kanban-virtualizer.ts
  technology: SolidJS
  group: Kanban
description: Kanban virtualizer in Kanban.
---

File apps/web/src/components/kanban/kanban-virtualizer.ts. It belongs to Kanban, not a separate application.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/kanban/kanban-virtualizer.ts](../../../../../../apps/web/src/components/kanban/kanban-virtualizer.ts) | [apps/web/src/components/kanban/kanban-board.tsx](../../../../../../apps/web/src/components/kanban/kanban-board.tsx) | Invokes supplied callbacks: getScrollElement, keys, laneId | typescript |
