---
type: C4 Component
title: Views email compose
status: stable
groma:
  id: views-email-compose
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/email-compose.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/compose-host-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/cc-bcc-hotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/email-editor-commands.ts
      symbol: TOGGLE_APPEND_EMAIL_THREAD_COMMAND
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/meeting-intent.ts
      symbol: proposesMeeting
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/flatten-consecutive-paragraphs.ts
      symbol: flattenConsecutiveParagraphs
    - scanner: typescript
      file: apps/web/src/features/email-compose/make-attachment-public.ts
      symbol: makeAttachmentPublic
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/compose-layout.tsx
      symbol: ComposeLayout
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/send-readiness.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/reply-composer.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/reply-composer-focus.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/date-selector.tsx
      symbol: DateSelector
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/attachment-viewer.tsx
      symbol: createAttachmentViewer
    - scanner: typescript
      file: apps/web/src/features/email-compose/upload-documents.ts
      symbol: uploadAttachmentDocuments
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/undo-send-claim.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/draft-sync-status.tsx
      symbol: DraftSyncStatus
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/email-date-selector.tsx
      symbol: EmailDateSelector
    - scanner: typescript
      file: apps/web/src/features/email-compose/queued-send-status.tsx
      symbol: QueuedSendStatus
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/email-form-state.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/draft-editor-html.ts
      symbol: draftEditorHtml
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-persistence.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/queries/inbox-source.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/undo-send.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-transfer.ts
      symbol: createDraftTransfer
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/compose-toolbar.tsx
      symbol: EmailComposeToolbar
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/email-composer.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/context/compose-context.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/email-send-schedule.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/email-recipient.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-identity.ts
      symbol: observeDraftIdentity
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/macro-signature-button.tsx
      symbol: MacroSignatureButton
    - scanner: typescript
      file: apps/web/src/features/email-compose/context/editor-capabilities.ts
      symbol: ComposeBodyActions
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/reply-recipient-fields.ts
      symbol: createReplyRecipientFields
    - scanner: typescript
      file: apps/web/src/features/email-compose/queries/queued-draft.ts
      symbol: queuedDraftSaveArgs
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/mention-to-cc.ts
      symbol: addUserMentionToCc
    - scanner: typescript
      file: apps/web/src/features/email-compose/compose-params.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/email-sender.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/reply-type.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/email-compose.tsx
      symbol: EmailCompose
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/compose-body.tsx
      symbol: ComposeBody
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/subject-text.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/recipient-drop-row.tsx
      symbol: RecipientDropRow
    - scanner: typescript
      file: apps/web/src/features/email-compose/queries/send-progress.ts
      symbol: watchEmailSendProgress
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/constants.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/prepare-email-body.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-action-hotkeys.ts
      symbol: registerDraftActionHotkeys
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/recipient-conversion.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/compose-recipients.tsx
      symbol: ComposeRecipients
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/plain-text-to-html.ts
      symbol: plainTextToHtml
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-sync-status.ts
      symbol: createDraftSyncStatus
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/subject-limit.ts
      symbol: subjectLimitHint
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/decode-base64.ts
      symbol: decodeBase64Utf8
    - scanner: typescript
      file: apps/web/src/features/email-compose/email-event.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/queued-send-notice.ts
      symbol: announceQueuedSend
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/compose-recipient-input.tsx
      symbol: ComposeRecipientInput
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/from-inbox-selector.tsx
      symbol: FromInboxSelector
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/forwarded-attachments.ts
      symbol: forwardedAttachments
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/reply-input.tsx
      symbol: ReplyInputView
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/signature-preview.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/compose-subject.tsx
      symbol: ComposeSubject
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/compose-subject-field.tsx
      symbol: ComposeSubjectField
    - scanner: typescript
      file: apps/web/src/features/email-compose/context/compose-hotkey-scope.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-session.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/compose-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/undo-store.ts
      symbol: createEmailUndoStore
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/mobile-compose-actions.tsx
      symbol: MobileComposeActions
    - scanner: typescript
      file: apps/web/src/features/email-compose/compose-route-draft.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/views/reply-envelope.tsx
      symbol: ReplyEnvelope
    - scanner: typescript
      file: apps/web/src/features/email-compose/context/email-form-inputs.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/context/email-form-context.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/queries/draft-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/email-form-types.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/local-draft.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/written-text.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/context/compose-capabilities.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/compose-field-row.tsx
      symbol: ComposeFieldRow
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/compose-view-state.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-save-notice.ts
      symbol: createDraftSaveNotice
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/attachment-limit.ts
      symbol: partitionByAttachmentLimit
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/attachment-persistence.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/create-event-button.tsx
      symbol: CreateEventButton
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-restoration.ts
      symbol: observeDraftRestoration
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/format-shortcuts.ts
      symbol: EMAIL_FORMAT_SHORTCUTS
    - scanner: typescript
      file: apps/web/src/features/email-compose/editor-adapter.ts
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/email-schedule-summary.tsx
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/draft-autosave.ts
      symbol: createDraftAutosave
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/mobile-reply-toolbar.tsx
      symbol: MobileReplyToolbar
    - scanner: typescript
      file: apps/web/src/features/email-compose/core/email-draft.ts
      symbol: EmailDraft
    - scanner: typescript
      file: apps/web/src/features/email-compose/components/draft-back-menu.tsx
      symbol: DraftBackMenu
    - scanner: typescript
      file: apps/web/src/features/email-compose/primitives/attachment-links.ts
  technology: SolidJS
  group: Email
description: Route-backed new email composer.
---

`EmailCompose` creates a compose context, a route draft, and a route host, then renders `EmailComposeView`. The draft id prefers the route over props because a moved draft lives only in the URL. `email-thread` imports the same compose context and host when a thread needs a reply composer (`email-thread/email-thread.tsx:12-13`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/email-compose/primitives/attachment-links.ts](../../../../../../apps/web/src/features/email-compose/primitives/attachment-links.ts) | [apps/web/src/lib/core/component/AI/component/tool/email/DraftComposer.tsx](../../../../../../apps/web/src/lib/core/component/AI/component/tool/email/DraftComposer.tsx) | Invokes supplied callbacks: canEdit, confirm, version | typescript |
| [apps/web/src/features/email-compose/primitives/draft-restoration.ts](../../../../../../apps/web/src/features/email-compose/primitives/draft-restoration.ts) | [apps/web/src/features/email-thread/views/email-thread.tsx](../../../../../../apps/web/src/features/email-thread/views/email-thread.tsx) | Invokes supplied callbacks: accepts, cancelPendingSave, restore, setPending | typescript |
