---
type: C4 Component
title: Channels view
status: stable
groma:
  id: channels-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/channels-view/channels-view.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/queries/channel-detail-source.ts
      symbol: createChannelDetailSource
    - scanner: typescript
      file: apps/web/src/features/channels-view/queries/channel-search-source.ts
      symbol: createChannelSearchSource
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelsRailContext.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/context/channel-detail-source.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/live-calls-sidebar.tsx
      symbol: ChannelsLiveCallsSidebar
    - scanner: typescript
      file: apps/web/src/features/channels-view/queries/channel-threads.ts
      symbol: useChannelThreadsQuery
    - scanner: typescript
      file: apps/web/src/features/channels-view/utils.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/hooks/useChannelRailState.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/hooks/useOffscreenActivity.ts
      symbol: useOffscreenActivity
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/useFavoriteReorder.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/channels-view-skeleton.tsx
      symbol: ChannelsViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelSectionHeading.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelLabelNameDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/route-views.tsx
      symbol: ChannelsRouteView
    - scanner: typescript
      file: apps/web/src/features/channels-view/core/channel-label-eligibility.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelFavoriteRows.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelRailItems.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/primitives/create-channel-detail.ts
      symbol: createChannelDetail
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ExpandedChannelsRail.tsx
      symbol: ExpandedChannelsRail
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelLabelRows.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ExpandedChannelsRail.tsx
      symbol: ExpandedChannelsRail
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/hooks/useChannelLabelActions.ts
      symbol: useChannelLabelActions
    - scanner: typescript
      file: apps/web/src/features/channels-view/channels-view-context.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ResizableRailSection.tsx
      symbol: ResizableRailSection
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/SectionDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/ChannelsEmptyState.tsx
      symbol: ChannelsEmptyState
    - scanner: typescript
      file: apps/web/src/features/channels-view/channels-route.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/hooks/useChannelCalls.ts
      symbol: useChannelCalls
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/hooks/useChannelRailActivity.ts
      symbol: useChannelRailActivity
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelSectionDropZone.tsx
      symbol: ChannelSectionDropZone
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/hooks/useChannelSectionNotifications.ts
      symbol: useChannelSectionNotifications
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/build-channel-rail-rows.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/queries.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/ConversationsCreateMenu.tsx
      symbol: ConversationsCreateMenu
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/PendingDirectMessageDetail.tsx
      symbol: PendingDirectMessageDetail
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelLabelRows.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelsRail.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/ChannelThreadsView.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/ChannelsMobileView.tsx
      symbol: ChannelsMobileView
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelFavoriteRow.tsx
      symbol: ChannelFavoriteRow
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelSortDropdown.tsx
      symbol: ChannelSortDropdown
    - scanner: typescript
      file: apps/web/src/features/channels-view/core/channel-threads-query.ts
      symbol: channelThreadsQueryArgs
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelRailVirtualizer.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/queries/channel-list-search-pool.ts
      symbol: useChannelListSearchPool
    - scanner: typescript
      file: apps/web/src/features/channels-view/persistence.ts
      symbol: createChannelsViewPersistence
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/ChannelPins.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/build-channel-rail-rows.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/tour.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/constants.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/SectionChannelsDialog.tsx
      symbol: promptSectionChannels
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelSectionMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/ChannelSectionEmptyState.tsx
      symbol: ChannelSectionEmptyState
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/SmartTagDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/ChannelDetailView.tsx
      symbol: ChannelDetailView
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelOption.tsx
      symbol: ChannelOption
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelListViews.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/core/channel-sort.ts
      symbol: sortChannels
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/ChannelsRailSection.tsx
    - scanner: typescript
      file: apps/web/src/features/channels-view/components/rail/next/useSectionReorder.ts
      symbol: useSectionReorder
    - scanner: typescript
      file: apps/web/src/features/channels-view/core/smart-tags.ts
    - scanner: typescript
      file: apps/web/src/features/channels-view/types.ts
  technology: SolidJS
description: Channel list pane and channel detail route.
---

`ChannelsView` mounts a provider around the list. The file imports channel loading, access denied, unavailable, and prefetch helpers from `channel`, plus tours and video-tutorial pills. The channels pane lazy-loads `ChannelsRouteView` and `ChannelDetailRouteView` from this feature (`lazy-route-views.ts:42-48`). Detail search keeps `channel_message_id` and `channel_thread_id` (`routes/routes.ts:396-406`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/channels-view/queries/channel-detail-source.ts](../../../../../../apps/web/src/features/channels-view/queries/channel-detail-source.ts) | [apps/web/src/features/channel/Channel/channel-entity.ts](../../../../../../apps/web/src/features/channel/Channel/channel-entity.ts) | Invokes supplied callback: createQuery | typescript |
