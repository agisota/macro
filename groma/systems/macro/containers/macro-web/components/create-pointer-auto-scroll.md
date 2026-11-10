---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-pointer-auto-scroll
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-pointer-auto-scroll.ts
      symbol: createPointerAutoScroll
  technology: SolidJS
description: Part of the signed-in client
---

Scroll a drag surface at frame rate, even while its pointer is stationary.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/drag-drop/create-pointer-auto-scroll.ts](../../../../../../apps/web/src/components/drag-drop/create-pointer-auto-scroll.ts) | [apps/web/src/features/channels-view/components/rail/next/ResizableRailSection.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/next/ResizableRailSection.tsx) | Invokes supplied callbacks: getPointer, getViewport, onScroll | typescript |
| [apps/web/src/components/drag-drop/create-pointer-auto-scroll.ts](../../../../../../apps/web/src/components/drag-drop/create-pointer-auto-scroll.ts) | [apps/web/src/features/scheduling/components/availability-calendar.tsx](../../../../../../apps/web/src/features/scheduling/components/availability-calendar.tsx) | Invokes supplied callbacks: getBounds, getPointer, getViewport, onScroll | typescript |
