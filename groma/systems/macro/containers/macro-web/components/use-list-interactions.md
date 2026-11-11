---
type: C4 Component
title: Use list interactions
status: stable
groma:
  id: use-list-interactions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/use-list-interactions.ts
  technology: SolidJS
description: Use list interactions inside the signed-in client.
---

Minimal scrolling contract implemented by virtualized list handles.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/channel/Calls/ChannelCallsTab.tsx](../../../../../../apps/web/src/features/channel/Calls/ChannelCallsTab.tsx) | Invokes supplied callbacks: createMetadata, onNavigate | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx) | Invokes supplied callbacks: createMetadata, getFocusKey, getKey, isExpanded, isHeader, onBeforeMove, onNavigate, scrollHandle, setExpanded | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/drive-view/views/drive-list.tsx](../../../../../../apps/web/src/features/drive-view/views/drive-list.tsx) | Invokes supplied callbacks: createMetadata, onNavigate | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/email-view/components/EmailList.tsx](../../../../../../apps/web/src/features/email-view/components/EmailList.tsx) | Invokes supplied callbacks: createMetadata, enabled, onNavigate, shouldHandleKeyEvent | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/home/components/HomeList.tsx](../../../../../../apps/web/src/features/home/components/HomeList.tsx) | Invokes supplied callbacks: createMetadata, onNavigate | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/notifications-inbox/views/notifications-view.tsx](../../../../../../apps/web/src/features/notifications-inbox/views/notifications-view.tsx) | Invokes supplied callbacks: createMetadata, getFocusKey, getKey, isHeader, onNavigate, shouldHandleKeyEvent | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/projects/views/projects-collection.tsx](../../../../../../apps/web/src/features/projects/views/projects-collection.tsx) | Invokes supplied callbacks: createMetadata, enabled, getFocusKey, getKey, isHeader, onNavigate | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/reviews-view/components/ReviewsList.tsx](../../../../../../apps/web/src/features/reviews-view/components/ReviewsList.tsx) | Invokes supplied callback: createMetadata | typescript |
| [apps/web/src/components/list/use-list-interactions.ts](../../../../../../apps/web/src/components/list/use-list-interactions.ts) | [apps/web/src/features/tasks-view/components/task-list/TaskList.tsx](../../../../../../apps/web/src/features/tasks-view/components/task-list/TaskList.tsx) | Invokes supplied callbacks: createMetadata, getFocusKey, getKey, isExpanded, isHeader, onBeforeMove, onNavigate, setExpanded | typescript |
