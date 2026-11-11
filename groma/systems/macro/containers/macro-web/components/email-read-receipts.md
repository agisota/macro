---
type: C4 Component
title: Read receipts
status: stable
groma:
  id: email-read-receipts
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/email/read-receipts.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/email/message-source.ts
      symbol: getEmailMessageEml
  technology: SolidJS
description: Read receipts inside the signed-in client.
---

The viewer's tracked sent messages in one thread, keyed by message id.
