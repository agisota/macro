---
type: C4 Component
title: Mention links
status: stable
groma:
  id: mention-links
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-router/mention-links.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/mobile/createMobileForwardAnimation.ts
      symbol: createMobileForwardAnimation
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/should-autofocus-navigation.ts
      symbol: shouldAutofocusNavigation
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitFileMenu.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/utils/createOwnedSlots.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/TiledSplits.tsx
      symbol: TiledSplits
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/CollapsibleItem.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-router/app-pane-policy.ts
      symbol: createAppPanePolicy
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/entry-state.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/layoutUtils.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitToolbar.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/mobile/createMobileSplitMotion.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/contentInstanceRegistry.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/layers.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitDrawer.tsx
      symbol: SplitDrawer
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/view-state.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/back-interceptor.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitHeader.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/SplitButtons.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-geometry.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/HeaderIsland.tsx
      symbol: HeaderIsland
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/context.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/mobile/createMobileSwipeBackGesture.ts
      symbol: createMobileSwipeBackGesture
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/mobile/createMobilePaneStack.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/layoutManager.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/splitContentSizing.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/content-reference.ts
      symbol: contentReference
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitDrawerContext.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts
      symbol: createSplitAutofocus
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitHeaderContextMenu.tsx
      symbol: SplitHeaderContextMenu
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitLabel.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/layout.ts
      symbol: useSplitLayout
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/open-folders.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/entry-persistence.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-router/legacy-route.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/view-restoration.ts
      symbol: useViewRestoration
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/utils/canSpotlight.ts
      symbol: canSpotlight
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/componentRegistry.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitBottomPanel.tsx
      symbol: SplitBottomPanel
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/history.ts
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-router/app-route-shell.tsx
  technology: SolidJS
description: Interpret a matched app route as an entity without importing eager view routes.
---

Interpret a matched app route as an entity without importing eager view routes.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/app/split-layout/entry-persistence.ts](../../../../../../apps/web/src/components/app/split-layout/entry-persistence.ts) | [apps/web/src/features/channels-view/persistence.ts](../../../../../../apps/web/src/features/channels-view/persistence.ts) | Invokes supplied callbacks: restore, select | typescript |
| [apps/web/src/components/app/split-layout/entry-persistence.ts](../../../../../../apps/web/src/components/app/split-layout/entry-persistence.ts) | [apps/web/src/features/crm/activity-state-adapter.ts](../../../../../../apps/web/src/features/crm/activity-state-adapter.ts) | Invokes supplied callbacks: restore, select | typescript |
| [apps/web/src/components/app/split-layout/entry-persistence.ts](../../../../../../apps/web/src/components/app/split-layout/entry-persistence.ts) | [apps/web/src/features/email-view/persistence.ts](../../../../../../apps/web/src/features/email-view/persistence.ts) | Invokes supplied callbacks: restore, select | typescript |
| [apps/web/src/components/app/split-layout/entry-persistence.ts](../../../../../../apps/web/src/components/app/split-layout/entry-persistence.ts) | [apps/web/src/features/home/persistence.ts](../../../../../../apps/web/src/features/home/persistence.ts) | Invokes supplied callbacks: restore, select | typescript |
| [apps/web/src/components/app/split-layout/entry-persistence.ts](../../../../../../apps/web/src/components/app/split-layout/entry-persistence.ts) | [apps/web/src/features/tasks-view/persistence.ts](../../../../../../apps/web/src/features/tasks-view/persistence.ts) | Invokes supplied callbacks: restore, select | typescript |
| [apps/web/src/components/app/split-layout/layoutManager.ts](../../../../../../apps/web/src/components/app/split-layout/layoutManager.ts) | [apps/web/src/lib/core/mobile/isNativeMobilePlatform.ts](../../../../../../apps/web/src/lib/core/mobile/isNativeMobilePlatform.ts) | Invokes supplied callback: stacked | typescript |
| [apps/web/src/components/app/split-layout/split-router/app-pane-policy.ts](../../../../../../apps/web/src/components/app/split-layout/split-router/app-pane-policy.ts) | [apps/web/src/lib/core/mobile/isNativeMobilePlatform.ts](../../../../../../apps/web/src/lib/core/mobile/isNativeMobilePlatform.ts) | Invokes supplied callback: stacked | typescript |
| [apps/web/src/components/app/split-layout/split-router/app-pane-policy.ts](../../../../../../apps/web/src/components/app/split-layout/split-router/app-pane-policy.ts) | [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | Invokes supplied callback: defaultLocation | typescript |
| [apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts](../../../../../../apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts) | [apps/web/src/components/app/split-layout/components/SplitPanel.tsx](../../../../../../apps/web/src/components/app/split-layout/components/SplitPanel.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts](../../../../../../apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts) | [apps/web/src/features/email-view/components/EmailDetailView.tsx](../../../../../../apps/web/src/features/email-view/components/EmailDetailView.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts](../../../../../../apps/web/src/components/app/split-layout/utils/createSplitAutofocus.ts) | [apps/web/src/features/email-view/components/EmailList.tsx](../../../../../../apps/web/src/features/email-view/components/EmailList.tsx) | Invokes supplied callback: enabled | typescript |
| [apps/web/src/components/app/split-layout/view-state.ts](../../../../../../apps/web/src/components/app/split-layout/view-state.ts) | [apps/web/src/components/app/split-layout/SplitLayout.tsx](../../../../../../apps/web/src/components/app/split-layout/SplitLayout.tsx) | Invokes supplied callback: sessionKey | typescript |
