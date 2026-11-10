---
type: C4 Component
title: Web module
status: stable
groma:
  id: channel-labels-channel-labels
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/channel-labels/channel-labels.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel-labels/keys.ts
      symbol: channelLabelKeys
  technology: SolidJS
description: Part of the signed-in client
---

Shared labels for team members; account-private labels otherwise.
