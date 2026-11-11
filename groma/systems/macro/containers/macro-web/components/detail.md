---
type: C4 Component
title: Detail
status: stable
groma:
  id: detail
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/detail.ts
      symbol: createChannelDetailQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/access-requests.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/selection-by-id.ts
      symbol: fetchChannelSelectionById
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/channels.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/notification-refresh.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/by-ids.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/types.ts
      symbol: ChannelParticipant
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/get-or-create-dm.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/join-links.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/channel-attachments.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/register-notification-refresh.ts
      symbol: registerChannelNotificationRefresh
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/graphql.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/notifications.ts
      symbol: createChannelNotificationsQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/participants.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/notification-selection.ts
      symbol: hydrateChannelNotificationSelection
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/picture.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/keys.ts
      symbol: channelKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/channel-participants.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/presence.ts
      symbol: useChannelPresenceSubscription
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/channel-bots.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/unread-cache.ts
      symbol: cacheNewChannelUnread
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/activity.ts
  technology: SolidJS
description: Detail inside the signed-in client.
---

A conversation and its complete unread edge. Activation readers revalidate on every open; display-only readers can reuse the cache. Its variables match the open channel's unread navigation, so both share one request.
