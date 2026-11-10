---
type: C4 Component
title: Web module
status: stable
groma:
  id: create-reorder
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/drag-drop/create-reorder.ts
  technology: SolidJS
description: Part of the signed-in client
---

Where a dragged item lands, as a reorder along one axis reports it.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/drag-drop/create-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-reorder.ts) | [apps/web/src/features/database/components/database-table.tsx](../../../../../../apps/web/src/features/database/components/database-table.tsx) | Invokes supplied callbacks: canDrag, start | typescript |
| [apps/web/src/components/drag-drop/create-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-reorder.ts) | [apps/web/src/features/database/components/sort-panel.tsx](../../../../../../apps/web/src/features/database/components/sort-panel.tsx) | Invokes supplied callback: canDrag | typescript |
| [apps/web/src/components/drag-drop/create-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-reorder.ts) | [apps/web/src/features/database/components/table-navigation.tsx](../../../../../../apps/web/src/features/database/components/table-navigation.tsx) | Invokes supplied callbacks: canDrag, start | typescript |
| [apps/web/src/components/drag-drop/create-reorder.ts](../../../../../../apps/web/src/components/drag-drop/create-reorder.ts) | [apps/web/src/features/email-view/views/email-saved-views.tsx](../../../../../../apps/web/src/features/email-view/views/email-saved-views.tsx) | Invokes supplied callback: canDrag | typescript |
