---
type: C4 Component
title: Email message
status: stable
groma:
  id: views-email-message
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-message/views/email-message.tsx
    - scanner: typescript
      file: apps/web/src/features/email-message/core/name.ts
      symbol: getFirstName
    - scanner: typescript
      file: apps/web/src/features/email-message/components/calendar-file-preview.tsx
      symbol: CalendarFilePreview
    - scanner: typescript
      file: apps/web/src/features/email-message/primitives/email-message-body.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/core/calendar-invitation-schema.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/views/message-operation-recovery.tsx
      symbol: MessageOperationRecovery
    - scanner: typescript
      file: apps/web/src/features/email-message/core/format-email-date.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/sender-icon-adapter.tsx
      symbol: EmailSenderIcon
    - scanner: typescript
      file: apps/web/src/features/email-message/components/email-user-tooltip.tsx
      symbol: EmailUserTooltip
    - scanner: typescript
      file: apps/web/src/features/email-message/core/inline-images.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/views/email-message-body.tsx
      symbol: EmailMessageBody
    - scanner: typescript
      file: apps/web/src/features/email-message/context/email-rendering-context.tsx
    - scanner: typescript
      file: apps/web/src/features/email-message/core/message-operation.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/components/message-card.tsx
      symbol: MessageCard
    - scanner: typescript
      file: apps/web/src/features/email-message/components/email-message-top-bar.tsx
      symbol: EmailMessageTopBar
    - scanner: typescript
      file: apps/web/src/features/email-message/components/message-resize-motion.ts
      symbol: createMessageResizeMotion
    - scanner: typescript
      file: apps/web/src/features/email-message/core/read-receipt.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/components/calendar-invite-card.tsx
      symbol: CalendarInviteCard
    - scanner: typescript
      file: apps/web/src/features/email-message/context/message-operation-source.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/theme.ts
      symbol: createEmailTheme
    - scanner: typescript
      file: apps/web/src/features/email-message/components/attachment-pill.tsx
      symbol: EmailAttachmentPill
    - scanner: typescript
      file: apps/web/src/features/email-message/core/email-user.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/core/email-message.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/queries/message-operation.ts
      symbol: createMessageOperationSource
    - scanner: typescript
      file: apps/web/src/features/email-message/components/message-actions.tsx
    - scanner: typescript
      file: apps/web/src/features/email-message/core/calendar-invitation.ts
    - scanner: typescript
      file: apps/web/src/features/email-message/components/collapsed-message.tsx
      symbol: CollapsedMessage
  technology: SolidJS
description: Per-message attachment and render adapters.
---

The adapter maps an attachment MIME to a block name through `fileTypeToBlockName`, falling back to `unknown`, and downloads bytes from the email attachment URL. `email-thread` imports this adapter plus message rendering, sender icon, and calendar-invitation types (`email-thread/email-thread.tsx:14-28`). This directory is the message body layer, not the thread list.
