---
type: C4 Component
title: Web module
status: stable
groma:
  id: use-view-control-hotkeys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/use-view-control-hotkeys.ts
  technology: SolidJS
description: Part of the signed-in client
---

Registers shortcuts that open a view's search, filter, and sort controls.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/agents-view/components/AgentsSidebar.tsx](../../../../../../apps/web/src/features/agents-view/components/AgentsSidebar.tsx) | Invokes supplied callbacks: condition, run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx) | Invokes supplied callback: run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/crm/views/activity-section.tsx](../../../../../../apps/web/src/features/crm/views/activity-section.tsx) | Invokes supplied callback: run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/crm/views/crm-workspace.tsx](../../../../../../apps/web/src/features/crm/views/crm-workspace.tsx) | Invokes supplied callback: run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/drive-view/views/drive-filter-menu.tsx](../../../../../../apps/web/src/features/drive-view/views/drive-filter-menu.tsx) | Invokes supplied callback: run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/drive-view/views/drive-header.tsx](../../../../../../apps/web/src/features/drive-view/views/drive-header.tsx) | Invokes supplied callbacks: condition, enabled, run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/home/components/HomeFilters.tsx](../../../../../../apps/web/src/features/home/components/HomeFilters.tsx) | Invokes supplied callback: run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/notifications-inbox/views/notifications-view.tsx](../../../../../../apps/web/src/features/notifications-inbox/views/notifications-view.tsx) | Invokes supplied callback: run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/reviews-view/reviews-view.tsx](../../../../../../apps/web/src/features/reviews-view/reviews-view.tsx) | Invokes supplied callbacks: enabled, run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/routines/routines-page.tsx](../../../../../../apps/web/src/features/routines/routines-page.tsx) | Invokes supplied callbacks: enabled, run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/scheduling/scheduling.tsx](../../../../../../apps/web/src/features/scheduling/scheduling.tsx) | Invokes supplied callbacks: enabled, run | typescript |
| [apps/web/src/components/view-shell/use-view-control-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-control-hotkeys.ts) | [apps/web/src/features/tasks-view/components/TasksHeader.tsx](../../../../../../apps/web/src/features/tasks-view/components/TasksHeader.tsx) | Invokes supplied callbacks: enabled, run | typescript |
