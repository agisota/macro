---
type: C4 Component
title: External chat
status: stable
groma:
  id: external-chat
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/external-chat/external-chat.tsx
      symbol: ExternalChat
    - scanner: typescript
      file: apps/web/src/features/external-chat/core/chat.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/core/message-data.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/system-line.tsx
      symbol: ExternalChatSystemLine
    - scanner: typescript
      file: apps/web/src/features/external-chat/queries/production-api.ts
      symbol: externalChatApi
    - scanner: typescript
      file: apps/web/src/features/external-chat/external-chat-entry.tsx
    - scanner: typescript
      file: apps/web/src/features/external-chat/providers/whatsapp/formatting.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/chat-details.tsx
      symbol: ChatDetails
    - scanner: typescript
      file: apps/web/src/features/external-chat/providers/identity.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/context/external-chat-context.tsx
    - scanner: typescript
      file: apps/web/src/features/external-chat/primitives/conversation.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/rich-cards.tsx
      symbol: RichCard
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/inbound-media.tsx
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/chat-header.tsx
      symbol: ExternalChatHeader
    - scanner: typescript
      file: apps/web/src/features/external-chat/views/external-chat-view.tsx
      symbol: ExternalChatView
    - scanner: typescript
      file: apps/web/src/features/external-chat/core/attachments.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/inbound-attachment.tsx
    - scanner: typescript
      file: apps/web/src/features/external-chat/components/message-media.tsx
      symbol: MessageMedia
    - scanner: typescript
      file: apps/web/src/features/external-chat/queries/capabilities.ts
      symbol: createExternalChatCapabilities
    - scanner: typescript
      file: apps/web/src/features/external-chat/core/mentions.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/core/task.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/core/rich.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/providers/index.ts
    - scanner: typescript
      file: apps/web/src/features/external-chat/providers/whatsapp/index.ts
      symbol: whatsappProvider
  technology: SolidJS
  group: Messages
description: External chat entity, messages, and provider registry.
---

The notes say it has its own message storage and DSS `/external-chats` queries. It renders with channel components (`ChannelMessage`, `ChannelInput` with Macro-only features off) but never uses channel queries, membership, or context. Pairing and the provider chat list belong to `whatsapp-linked`; the shell belongs to `external-view`. `external-view.tsx` imports `providerIdentity` and `externalChatApi` from here (`external-view/external-view.tsx:19-20`).
