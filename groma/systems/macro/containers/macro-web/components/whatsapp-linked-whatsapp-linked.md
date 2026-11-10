---
type: C4 Component
title: Whatsapp linked
status: stable
groma:
  id: whatsapp-linked-whatsapp-linked
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/whatsapp-linked.tsx
      symbol: WhatsAppLinked
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/chat-list.tsx
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/core/pairing.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/queries/production-capabilities.ts
      symbol: createWhatsAppLinkedCapabilities
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/views/whatsapp-page.tsx
      symbol: WhatsAppPage
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/core/account.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/core/new-chat.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/whatsapp-tile.tsx
      symbol: WhatsAppTile
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/primitives/open-sections.ts
      symbol: createOpenSections
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/context/whatsapp-linked-context.tsx
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/queries/decode.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/primitives/countdown.ts
      symbol: createCountdown
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/primitives/pairing-flow.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/conversation-sections.tsx
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/core/add.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/queries/authenticator.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/connection-code.tsx
      symbol: ConnectionCode
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/core/chat.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/core/history-import.ts
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/pairing-dialog.tsx
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/account-card.tsx
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/new-chat-dialog.tsx
      symbol: NewChatDialog
    - scanner: typescript
      file: apps/web/src/features/whatsapp-linked/components/history-import-prompt.tsx
      symbol: WhatsAppHistoryImportPrompt
  technology: SolidJS
  group: Messages
description: WhatsApp device link, chat list, and history import.
---

The notes say each person sends from their own account, behind `enable-whatsapp-linked`. Production wiring is `whatsapp-linked.tsx`; the page is `views/whatsapp-page.tsx`. Adding a chat is `POST /external-chats` with `provider: 'whatsapp'`. `external-view` imports `WhatsAppLinked` (`external-view/external-view.tsx:22`).
