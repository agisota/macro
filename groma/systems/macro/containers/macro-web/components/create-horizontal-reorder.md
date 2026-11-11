---
type: C4 Component
title: Create horizontal reorder
status: stable
groma:
  id: create-horizontal-reorder
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-horizontal-reorder.ts
  technology: SolidJS
  group: Drag and drop
description: The indicator's offset within its positioned container
---

The indicator's offset within its positioned container.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/drag-drop/create-horizontal-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-horizontal-reorder.ts) | [apps/web/src/features/database/components/database-table.tsx](../../../../../../apps/web/src/features/database/components/database-table.tsx) | Invokes supplied callback: indicatorLeft | typescript |
| [apps/web/src/components/drag-drop/create-horizontal-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-horizontal-reorder.ts) | [apps/web/src/features/database/components/table-navigation.tsx](../../../../../../apps/web/src/features/database/components/table-navigation.tsx) | Invokes supplied callback: indicatorLeft | typescript |
