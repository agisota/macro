---
type: C4 Component
title: Create list controller
status: stable
groma:
  id: create-list-controller
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/create-list-controller.ts
  technology: SolidJS
description: Create list controller inside the signed-in client.
---

Logical identity used for selection and bulk actions. Defaults to the rendered item key. Multiple rendered occurrences may share this key.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/agents-view/components/AgentsSidebar.tsx](../../../../../../apps/web/src/features/agents-view/components/AgentsSidebar.tsx) | Invokes supplied callbacks: getKey, items | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/channel/Calls/ChannelCallsTab.tsx](../../../../../../apps/web/src/features/channel/Calls/ChannelCallsTab.tsx) | Invokes supplied callback: getKey | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/channels-view/components/ChannelsMobileView.tsx](../../../../../../apps/web/src/features/channels-view/components/ChannelsMobileView.tsx) | Invokes supplied callback: getKey | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx) | Invokes supplied callbacks: getKey, onActivate | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/drive-view/primitives/drive-list.ts](../../../../../../apps/web/src/features/drive-view/primitives/drive-list.ts) | Invokes supplied callbacks: getKey, onActivate | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/email-view/email-view-context.tsx](../../../../../../apps/web/src/features/email-view/email-view-context.tsx) | Invokes supplied callbacks: getKey, onActivate | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/home/components/HomeList.tsx](../../../../../../apps/web/src/features/home/components/HomeList.tsx) | Invokes supplied callback: getKey | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/next-soup/actions/entity-action-context.ts](../../../../../../apps/web/src/features/next-soup/actions/entity-action-context.ts) | Invokes supplied callbacks: getKey, items | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/notifications-inbox/views/notifications-view.tsx](../../../../../../apps/web/src/features/notifications-inbox/views/notifications-view.tsx) | Invokes supplied callbacks: getKey, onActivate | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/projects/primitives/project-collection.ts](../../../../../../apps/web/src/features/projects/primitives/project-collection.ts) | Invokes supplied callbacks: getKey, onActivate | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/reviews-view/primitives/create-reviews-list-controller.ts](../../../../../../apps/web/src/features/reviews-view/primitives/create-reviews-list-controller.ts) | Invokes supplied callbacks: getKey, onActivate | typescript |
| [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | [apps/web/src/features/tasks-view/tasks-view-context.tsx](../../../../../../apps/web/src/features/tasks-view/tasks-view-context.tsx) | Invokes supplied callbacks: getKey, onActivate | typescript |
