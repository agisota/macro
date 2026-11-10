---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-layout-animation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-layout-animation.ts
  technology: SolidJS
description: Part of the signed-in client
---

Unique placement, including the lane for cards with several placements.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/drag-drop/create-layout-animation.ts](../../../../../../apps/web/src/components/drag-drop/create-layout-animation.ts) | [apps/web/src/components/kanban/kanban-board.tsx](../../../../../../apps/web/src/components/kanban/kanban-board.tsx) | Invokes supplied callbacks: items, viewport | typescript |
| [apps/web/src/components/drag-drop/create-layout-animation.ts](../../../../../../apps/web/src/components/drag-drop/create-layout-animation.ts) | [apps/web/src/features/channels-view/components/rail/next/ExpandedChannelsRail.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/next/ExpandedChannelsRail.tsx) | Invokes supplied callback: items | typescript |
