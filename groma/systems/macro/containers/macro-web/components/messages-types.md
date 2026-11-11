---
type: C4 Component
title: Messages types
status: stable
groma:
  id: messages-types
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/messages/types.ts
    - scanner: typescript
      file: apps/web/src/lib/core/messages/MessageLoadError.tsx
      symbol: MessageLoadError
    - scanner: typescript
      file: apps/web/src/lib/core/messages/scroll-to-rendered-target.ts
    - scanner: typescript
      file: apps/web/src/lib/core/messages/message-data.ts
      symbol: messageToMessageData
    - scanner: typescript
      file: apps/web/src/lib/core/messages/EntityConversation.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/messages/MessageThread.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/messages/comment-link.ts
      symbol: COMMENT_LINK_PARAM
    - scanner: typescript
      file: apps/web/src/lib/core/messages/create-message-composer.ts
      symbol: createMessageComposer
    - scanner: typescript
      file: apps/web/src/lib/core/messages/EntityDiscussion.tsx
      symbol: EntityDiscussion
    - scanner: typescript
      file: apps/web/src/lib/core/messages/message-reference-navigation.ts
      symbol: MessageReferenceNavigation
    - scanner: typescript
      file: apps/web/src/lib/core/messages/configured-message-editor.ts
  technology: SolidJS
description: Types inside the signed-in client.
---

A reaction as the row shows it; `names` names reactors outside Macro (an external chat's people), by their id in `users`.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/messages/create-message-composer.ts](../../../../../../apps/web/src/lib/core/messages/create-message-composer.ts) | [apps/web/src/features/channel/Input/ChannelInput.tsx](../../../../../../apps/web/src/features/channel/Input/ChannelInput.tsx) | Invokes supplied callbacks: clearEditor, restoreEditor, trackTyping | typescript |
