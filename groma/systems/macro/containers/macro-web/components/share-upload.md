---
type: C4 Component
title: Share upload
status: stable
groma:
  id: share-upload
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/share-upload.ts
      symbol: usePrepareSharedMediaMutation
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/unread-presence.ts
      symbol: createChannelUnreadQuery
  technology: SolidJS
description: Bounded unread evidence for the sidebar, independent of the full feed.
---

Bounded unread evidence for the sidebar, independent of the full feed.
