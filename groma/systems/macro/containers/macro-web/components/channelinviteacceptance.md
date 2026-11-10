---
type: C4 Component
title: Channel invitations
status: stable
groma:
  id: channelinviteacceptance
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/channel-invitations/ChannelInviteAcceptance.tsx
      symbol: ChannelInviteAcceptance
  technology: SolidJS
  group: Messages
description: '`/channel-invite` acceptance page.'
---

`ChannelInviteAcceptance` reads `code` from search params and navigates to `/` on success. It is mounted under `AuthShell`, so it has no app chrome (`app-router-view.tsx:319-322`). Login is a separate handler in the same file.
