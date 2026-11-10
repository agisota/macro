---
type: C4 Component
title: External view
status: stable
groma:
  id: external-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/external-view/external-view.tsx
      symbol: ExternalView
    - scanner: typescript
      file: apps/web/src/features/external-view/route-views.tsx
    - scanner: typescript
      file: apps/web/src/features/external-view/components/in-macro-section.tsx
    - scanner: typescript
      file: apps/web/src/features/external-view/hosted-content.ts
      symbol: externalChatContent
    - scanner: typescript
      file: apps/web/src/features/external-view/external-view-skeleton.tsx
      symbol: ExternalViewSkeleton
  technology: SolidJS
  group: Messages
description: External tab; WhatsApp is the only provider today.
---

`ExternalView` lists providers from `ExternalChatProvider`, opens chats at `/external/chat/:chatId`, and on touch drills from the list into the chat. It mounts `WhatsAppLinked` and uses that feature's open-section state. The route is lazy-loaded from this feature (`app-router-view.tsx:211-213`). The calls/folders/recent/search confusion does not apply here: External's own route view is in this directory.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/external-view/external-view.tsx](../../../../../../apps/web/src/features/external-view/external-view.tsx) | [apps/web/src/features/whatsapp-linked/whatsapp-linked.tsx](../../../../../../apps/web/src/features/whatsapp-linked/whatsapp-linked.tsx) | mounts WhatsApp account page | component import |
| [apps/web/src/features/external-view/external-view.tsx](../../../../../../apps/web/src/features/external-view/external-view.tsx) | [apps/web/src/features/external-chat/providers/identity.ts](../../../../../../apps/web/src/features/external-chat/providers/identity.ts) | reads provider label and logo | function import |
