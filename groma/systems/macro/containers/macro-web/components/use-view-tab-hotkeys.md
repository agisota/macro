---
type: C4 Component
title: Use view tab hotkeys
status: stable
groma:
  id: use-view-tab-hotkeys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/use-view-tab-hotkeys.ts
  technology: SolidJS
description: Use view tab hotkeys inside the signed-in client.
---

Tabs that Tab and Shift+Tab cycle through; defaults to `ids`.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx](../../../../../../apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx) | Invokes supplied callbacks: enabled, ids, setActiveId | typescript |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/drive-view/views/drive-workspace.tsx](../../../../../../apps/web/src/features/drive-view/views/drive-workspace.tsx) | Invokes supplied callbacks: activeId, ids | typescript |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/email-view/components/EmailSidebar.tsx](../../../../../../apps/web/src/features/email-view/components/EmailSidebar.tsx) | Invokes supplied callbacks: activeId, ids, sequentialIds, shouldHandleSequentialKeyEvent | typescript |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/home/components/HomeTabs.tsx](../../../../../../apps/web/src/features/home/components/HomeTabs.tsx) | Invokes supplied callbacks: activeId, ids | typescript |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/notifications-inbox/views/notifications-view.tsx](../../../../../../apps/web/src/features/notifications-inbox/views/notifications-view.tsx) | Invokes supplied callbacks: activeId, ids | typescript |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/reviews-view/components/ReviewsSidebar.tsx](../../../../../../apps/web/src/features/reviews-view/components/ReviewsSidebar.tsx) | Invokes supplied callbacks: activeId, ids | typescript |
| [apps/web/src/components/view-shell/use-view-tab-hotkeys.ts](../../../../../../apps/web/src/components/view-shell/use-view-tab-hotkeys.ts) | [apps/web/src/features/tasks-view/components/TasksSidebar.tsx](../../../../../../apps/web/src/features/tasks-view/components/TasksSidebar.tsx) | Invokes supplied callbacks: activeId, ids, setActiveId, shouldHandleSequentialKeyEvent | typescript |
