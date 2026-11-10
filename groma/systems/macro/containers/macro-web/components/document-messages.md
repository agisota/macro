---
type: C4 Component
title: Web module
status: stable
groma:
  id: document-messages
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/document-messages.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/timeline.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/posted-comment.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/reconcile.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/timeline-entries.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/thread-preview.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/thread-replies.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/typing.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/mutations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/message-sender.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/reactions.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/messages/subscription.ts
      symbol: useMessageSubscription
  technology: SolidJS
description: Part of the signed-in client
---

Positioning annotations needs every root, but never fetches every root's replies.
