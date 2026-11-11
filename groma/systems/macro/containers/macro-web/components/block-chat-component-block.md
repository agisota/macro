---
type: C4 Component
title: Block chat
status: stable
groma:
  id: block-chat-component-block
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-chat/component/Block.tsx
      symbol: ChatBlock
    - scanner: typescript
      file: apps/web/src/features/block-chat/signal/pendingLocationParams.ts
      symbol: pendingLocationParamsSignal
    - scanner: typescript
      file: apps/web/src/features/block-chat/blockClient.ts
      symbol: BlockChatSpec
    - scanner: typescript
      file: apps/web/src/features/block-chat/signal/chatBlockData.ts
      symbol: chatBlockData
    - scanner: typescript
      file: apps/web/src/features/block-chat/component/sidepanel/ChatSidePanelSections.tsx
      symbol: ChatSidePanelSections
    - scanner: typescript
      file: apps/web/src/features/block-chat/component/TopBar.tsx
      symbol: TopBar
    - scanner: typescript
      file: apps/web/src/features/block-chat/component/Chat.tsx
      symbol: Chat
    - scanner: typescript
      file: apps/web/src/features/block-chat/definition.ts
  technology: SolidJS
  group: Messages
description: Chat-document block, app-local.
---

The readme says this is an app-local feature installed and run through `apps/web`. It is not the channel transcript and not the agent handoff in `chat/`. No route in the opened router file names this block directly.
