---
type: C4 Component
title: Views email thread
status: stable
groma:
  id: views-email-thread
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/email-thread.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/thread-messages.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/components/draft-reply-preview.tsx
      symbol: DraftReplyPreview
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/reply-actions.ts
      symbol: openEmailReplyComposerForMessage
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/thread-reply-area.ts
      symbol: createThreadReplyArea
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/thread-stops.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/mobile-email-compose.tsx
      symbol: MobileEmailCompose
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/thread-recipients.ts
      symbol: createThreadRecipients
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/message-container.tsx
      symbol: MessageContainer
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/bottom-reply-buttons.tsx
      symbol: BottomReplyButtons
    - scanner: typescript
      file: apps/web/src/features/email-thread/thread-action-adapter.tsx
      symbol: createThreadActionAdapter
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/thread-snapshot.ts
      symbol: createThreadSnapshot
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/target-message-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/thread-completion-adapter.tsx
      symbol: createThreadCompletionAdapter
    - scanner: typescript
      file: apps/web/src/features/email-thread/context/email-thread-state-context.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/calendar-invitation-day.tsx
      symbol: CalendarInvitationDay
    - scanner: typescript
      file: apps/web/src/features/email-thread/queries/invitation-conflict.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/email-participants.tsx
      symbol: EmailParticipants
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/thread-drafts.ts
      symbol: createThreadDrafts
    - scanner: typescript
      file: apps/web/src/features/email-thread/read-receipts.ts
      symbol: createThreadReadReceipts
    - scanner: typescript
      file: apps/web/src/features/email-thread/components/email-thread-title.tsx
      symbol: EmailThreadTitle
    - scanner: typescript
      file: apps/web/src/features/email-thread/email-thread-operations.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/optimistic-send.ts
      symbol: createOptimisticThreadSend
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/email-thread-state.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/queries/calendar-invitation.ts
      symbol: invitationResolution
    - scanner: typescript
      file: apps/web/src/features/email-thread/calendar-invitation.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/scroll-to-message.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/thread-reply-input.tsx
      symbol: ThreadReplyInput
    - scanner: typescript
      file: apps/web/src/features/email-thread/primitives/thread-navigation.ts
      symbol: createThreadNavigation
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/message-list.tsx
      symbol: MessageList
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/thread-window.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/components/copy-subject-button.tsx
      symbol: CopySubjectButton
    - scanner: typescript
      file: apps/web/src/features/email-thread/queries/thread-operations.ts
      symbol: useThreadOperations
    - scanner: typescript
      file: apps/web/src/features/email-thread/context/email-thread-view-context.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/thread-read-adapter.ts
      symbol: createThreadReadAdapter
    - scanner: typescript
      file: apps/web/src/features/email-thread/email-thread.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/views/email-thread-surface.tsx
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/draft-preview.ts
      symbol: draftPreviewText
  technology: SolidJS
  group: Email
description: Thread completion, read state, and invitation rendering.
---

The file opened pulls compose context from `email-compose`, attachment open/download from `email-message`, calendar preferences from `calendar`, and notification effects from `notifications`. It also clears a saved draft thread cache and reads the inbox email. Route search for a message id is declared on `emailThreadRoute` as `email_message_id` (`routes/routes.ts:567-577`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/email-thread/email-thread.tsx](../../../../../../apps/web/src/features/email-thread/email-thread.tsx) | [apps/web/src/features/email-compose/compose-adapter.ts](../../../../../../apps/web/src/features/email-compose/compose-adapter.ts) | builds reply compose context | function import |
| [apps/web/src/features/email-thread/email-thread.tsx](../../../../../../apps/web/src/features/email-thread/email-thread.tsx) | [apps/web/src/features/email-message/attachment-action-adapter.ts](../../../../../../apps/web/src/features/email-message/attachment-action-adapter.ts) | opens and downloads attachments | function import |
