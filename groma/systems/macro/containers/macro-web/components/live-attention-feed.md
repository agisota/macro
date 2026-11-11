---
type: C4 Component
title: Live attention feed
status: stable
groma:
  id: live-attention-feed
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/attention-feed/live-attention-feed.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/attention-feed/attention-feed-updates.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/attention-feed/attention-feed-cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/attention-feed/attention-feed-types.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/attention-feed/attention-feed-entity.ts
      symbol: attentionFeedSoupItem
  technology: SolidJS
  group: Data queries
description: First delay before following a feed again after its live stream ended
---

First delay before following a feed again after its live stream ended.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/attention-feed/attention-feed-cache.ts](../../../../../../apps/web/src/lib/queries/attention-feed/attention-feed-cache.ts) | [apps/web/src/features/home/work-feed/queries/work-feed-shape.ts](../../../../../../apps/web/src/features/home/work-feed/queries/work-feed-shape.ts) | Invokes supplied callbacks: change, entries, key, nextPosition, sortAt, withEntries | typescript |
| [apps/web/src/lib/queries/attention-feed/attention-feed-cache.ts](../../../../../../apps/web/src/lib/queries/attention-feed/attention-feed-cache.ts) | [apps/web/src/features/notifications-inbox/queries/notification-inbox-shape.ts](../../../../../../apps/web/src/features/notifications-inbox/queries/notification-inbox-shape.ts) | Invokes supplied callbacks: change, entries, key, nextPosition, sortAt, withEntries | typescript |
| [apps/web/src/lib/queries/attention-feed/attention-feed-updates.ts](../../../../../../apps/web/src/lib/queries/attention-feed/attention-feed-updates.ts) | [apps/web/src/features/home/work-feed/primitives/work-feed.ts](../../../../../../apps/web/src/features/home/work-feed/primitives/work-feed.ts) | Invokes supplied callback: patches | typescript |
| [apps/web/src/lib/queries/attention-feed/attention-feed-updates.ts](../../../../../../apps/web/src/lib/queries/attention-feed/attention-feed-updates.ts) | [apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts](../../../../../../apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts) | Invokes supplied callback: patches | typescript |
| [apps/web/src/lib/queries/attention-feed/live-attention-feed.ts](../../../../../../apps/web/src/lib/queries/attention-feed/live-attention-feed.ts) | [apps/web/src/features/home/work-feed/home-work-feed.ts](../../../../../../apps/web/src/features/home/work-feed/home-work-feed.ts) | Invokes supplied callback: client | typescript |
| [apps/web/src/lib/queries/attention-feed/live-attention-feed.ts](../../../../../../apps/web/src/lib/queries/attention-feed/live-attention-feed.ts) | [apps/web/src/features/home/work-feed/primitives/work-feed.ts](../../../../../../apps/web/src/features/home/work-feed/primitives/work-feed.ts) | Invokes supplied callbacks: onPatches, onRefetched, variables | typescript |
| [apps/web/src/lib/queries/attention-feed/live-attention-feed.ts](../../../../../../apps/web/src/lib/queries/attention-feed/live-attention-feed.ts) | [apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts](../../../../../../apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts) | Invokes supplied callbacks: onPatches, onRefetched, variables | typescript |
| [apps/web/src/lib/queries/attention-feed/live-attention-feed.ts](../../../../../../apps/web/src/lib/queries/attention-feed/live-attention-feed.ts) | [apps/web/src/lib/service-clients/service-storage/graphql-soup.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/graphql-soup.ts) | Invokes supplied callbacks: cacheHost, client, onReconnected | typescript |
