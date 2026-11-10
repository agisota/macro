---
type: C4 Component
title: Inbox email
status: stable
groma:
  id: inbox-email
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/email/inbox-email.ts
      symbol: useInboxEmail
    - scanner: typescript
      file: apps/web/src/lib/queries/email/send-intent.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/cache-cleanup.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/graphql/draft.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/queued-sends.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/draft-cache.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/integration.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/thread-subject.ts
      symbol: representativeThreadMessage
    - scanner: typescript
      file: apps/web/src/lib/queries/email/scheduled.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/draft-lifecycle-events.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/local-draft-source.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/folder-cache.ts
      symbol: invalidateEmailFolderQueries
    - scanner: typescript
      file: apps/web/src/lib/queries/email/send-queue.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/email-send-dispatcher.ts
      symbol: createEmailSendDispatcher
    - scanner: typescript
      file: apps/web/src/lib/queries/email/local-draft-confirmation.ts
      symbol: confirmLocalDraftSave
    - scanner: typescript
      file: apps/web/src/lib/queries/email/attachment.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/focus.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/send-draft-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/quick-access.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/thread-drafts.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/local-draft-entities.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/folders.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/draft-queue.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/thread.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/server-sends.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/graphql/thread.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/read-state.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/backfill.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/email-send-journal.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/settings.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/mail-accounts.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/email-send-recovery.ts
      symbol: createEmailSendRecovery
    - scanner: typescript
      file: apps/web/src/lib/queries/email/local-drafts.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/keys.ts
      symbol: emailKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/email/send-telemetry.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/draft.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/outbox-session.ts
      symbol: setEmailOutboxSession
    - scanner: typescript
      file: apps/web/src/lib/queries/email/sync.ts
      symbol: handleRefreshEmail
    - scanner: typescript
      file: apps/web/src/lib/queries/email/email-send-restoration.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/graphql/optimistic-thread.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/link.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/graphql/mapper.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/local-draft-store.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/cancel-server-send.ts
      symbol: cancelServerEmailSend
    - scanner: typescript
      file: apps/web/src/lib/queries/email/graphql/compose.ts
  technology: SolidJS
description: Persisted independently of the optimistic layer, including after rejection.
---

Persisted independently of the optimistic layer, including after rejection.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/email/thread.ts](../../../../../../apps/web/src/lib/queries/email/thread.ts) | [apps/web/src/features/email-thread/thread-completion-adapter.tsx](../../../../../../apps/web/src/features/email-thread/thread-completion-adapter.tsx) | Invokes supplied callbacks: onError, onPushed | typescript |
