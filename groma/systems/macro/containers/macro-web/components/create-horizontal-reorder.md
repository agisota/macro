---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-horizontal-reorder
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-horizontal-reorder.ts
  technology: SolidJS
description: Part of the signed-in client
---

The indicator's offset within its positioned container.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/drag-drop/create-horizontal-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-horizontal-reorder.ts) | [apps/web/src/features/database/components/database-table.tsx](../../../../../../apps/web/src/features/database/components/database-table.tsx) | Invokes supplied callback: indicatorLeft | typescript |
| [apps/web/src/components/drag-drop/create-horizontal-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-horizontal-reorder.ts) | [apps/web/src/features/database/components/table-navigation.tsx](../../../../../../apps/web/src/features/database/components/table-navigation.tsx) | Invokes supplied callback: indicatorLeft | typescript |
