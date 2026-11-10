---
type: C4 Component
title: Block channel
status: stable
groma:
  id: block-channel-constants
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-channel/constants.ts
      symbol: URL_PARAMS
    - scanner: typescript
      file: apps/web/src/features/block-channel/definition.ts
    - scanner: typescript
      file: apps/web/src/features/block-channel/component/Compose.tsx
      symbol: ChannelCompose
    - scanner: typescript
      file: apps/web/src/features/block-channel/component/NewChannelBlockAdapter.tsx
    - scanner: typescript
      file: apps/web/src/features/block-channel/utils/link.ts
    - scanner: typescript
      file: apps/web/src/features/block-channel/component/Top.tsx
      symbol: ChannelTopLeft
    - scanner: typescript
      file: apps/web/src/features/block-channel/utils/target-message.ts
  technology: SolidJS
  group: Messages
description: '`channel` block adapter.'
---

Load accepts a DSS id and returns it. The component is a lazy `NewChannelBlockAdapter`, with `ChannelLoading` as the loading state. Live tracking is enabled. The channels view is the list; this block is the entity mount used when a channel is opened as a block.
