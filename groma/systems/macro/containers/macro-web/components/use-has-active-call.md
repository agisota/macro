---
type: C4 Component
title: Channels view use has active call
status: stable
groma:
  id: use-has-active-call
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/channels-view/use-has-active-call.ts
      symbol: useHasActiveChannelsCall
  technology: SolidJS
  group: Messages
description: Channel list pane and channel detail route.
---

`ChannelsView` mounts a provider around the list. The file imports channel loading, access denied, unavailable, and prefetch helpers from `channel`, plus tours and video-tutorial pills. The channels pane lazy-loads `ChannelsRouteView` and `ChannelDetailRouteView` from this feature (`lazy-route-views.ts:42-48`). Detail search keeps `channel_message_id` and `channel_thread_id` (`routes/routes.ts:396-406`).
