---
type: C4 Component
title: Email thread
status: stable
groma:
  id: core-email-thread
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/email-thread.ts
      symbol: EmailThread
    - scanner: typescript
      file: apps/web/src/features/email-thread/queries/thread-source.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/adjacent-email.ts
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/thread-keyboard.ts
      symbol: EmailThreadKeyboardHandlers
    - scanner: typescript
      file: apps/web/src/features/email-thread/core/location.ts
      symbol: URL_PARAMS
    - scanner: typescript
      file: apps/web/src/features/email-thread/context/email-thread-context.ts
  technology: SolidJS
  group: Email
description: Thread completion, read state, and invitation rendering.
---

The file opened pulls compose context from `email-compose`, attachment open/download from `email-message`, calendar preferences from `calendar`, and notification effects from `notifications`. It also clears a saved draft thread cache and reads the inbox email. Route search for a message id is declared on `emailThreadRoute` as `email_message_id` (`routes/routes.ts:567-577`).
