---
type: C4 Component
title: Kanban pointer intent
status: stable
groma:
  id: kanban-pointer-intent
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/kanban/kanban-pointer-intent.ts
      symbol: createKanbanPointerIntent
  technology: SolidJS
  group: Kanban
description: Gate previews during fast travel; a stationary pointer settles after 100 ms
---

Gate previews during fast travel; a stationary pointer settles after 100 ms.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/kanban/kanban-pointer-intent.ts](../../../../../../apps/web/src/components/kanban/kanban-pointer-intent.ts) | [apps/web/src/components/kanban/kanban.tsx](../../../../../../apps/web/src/components/kanban/kanban.tsx) | Invokes supplied callbacks: settled, speed | typescript |
