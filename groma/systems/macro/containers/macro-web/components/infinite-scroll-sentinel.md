---
type: C4 Component
title: Web module
status: stable
groma:
  id: infinite-scroll-sentinel
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/primitives/infinite-scroll-sentinel.ts
      symbol: useInfiniteScrollSentinel
  technology: SolidJS
description: Part of the signed-in client
---

Ref to the sentinel element placed at the bottom of the list.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/crm/views/record-item-list.tsx](../../../../../../apps/web/src/features/crm/views/record-item-list.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage, isFetchingNextPage | typescript |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/next-soup/soup-view/soup-group-continuation.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/soup-group-continuation.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage, isFetchingNextPage | typescript |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/reviews-view/components/ReviewsList.tsx](../../../../../../apps/web/src/features/reviews-view/components/ReviewsList.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage | typescript |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/settings/connections/catalog-rows.tsx](../../../../../../apps/web/src/features/settings/connections/catalog-rows.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage, isFetchingNextPage | typescript |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/tasks-view/components/task-list/TaskListContinuationRow.tsx](../../../../../../apps/web/src/features/tasks-view/components/task-list/TaskListContinuationRow.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage, isFetchingNextPage | typescript |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/tasks-view/views/task-board-view.tsx](../../../../../../apps/web/src/features/tasks-view/views/task-board-view.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage, isFetchingNextPage | typescript |
| [apps/web/src/lib/primitives/infinite-scroll-sentinel.ts](../../../../../../apps/web/src/lib/primitives/infinite-scroll-sentinel.ts) | [apps/web/src/features/tasks-view/views/task-gantt-view.tsx](../../../../../../apps/web/src/features/tasks-view/views/task-gantt-view.tsx) | Invokes supplied callbacks: fetchNextPage, hasNextPage, isFetchingNextPage | typescript |
