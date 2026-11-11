---
type: C4 Component
title: Eml download adapter
status: stable
groma:
  id: eml-download-adapter
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-message/eml-download-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/image-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/core/is-personal-message.ts
      symbol: isPersonalMessage
    - scanner: typescript
      file: apps/web/src/features/email-message/attachment-action-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/email-message-operation.tsx
      symbol: EmailMessageOperation
    - scanner: typescript
      file: apps/web/src/features/email-message/rendering-adapter.ts
      symbol: createEmailRenderingContext
  technology: SolidJS
  group: Email
description: Per-message attachment and render adapters.
---

The adapter maps an attachment MIME to a block name through `fileTypeToBlockName`, falling back to `unknown`, and downloads bytes from the email attachment URL. `email-thread` imports this adapter plus message rendering, sender icon, and calendar-invitation types (`email-thread/email-thread.tsx:14-28`). This directory is the message body layer, not the thread list.
