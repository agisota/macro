---
type: C4 Component
title: Create drag auto scroll
status: stable
groma:
  id: create-drag-auto-scroll
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-drag-auto-scroll.ts
      symbol: createDragAutoScroll
  technology: SolidJS
description: The marker opts a board into nested scrolling without changing other surfaces.
---

The marker opts a board into nested scrolling without changing other surfaces.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/drag-drop/create-drag-auto-scroll.ts](../../../../../../apps/web/src/components/drag-drop/create-drag-auto-scroll.ts) | [apps/web/src/features/channels-view/components/rail/next/ExpandedChannelsRail.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/next/ExpandedChannelsRail.tsx) | Invokes supplied callback: getViewport | typescript |
