---
type: C4 Component
title: Whatsapp linked keys
status: stable
groma:
  id: whatsapp-linked-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/whatsapp-linked/keys.ts
      symbol: whatsappLinkedKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/whatsapp-linked/index.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/whatsapp-linked/operation.ts
  technology: SolidJS
description: Keys inside the signed-in client.
---

Deliberately absent from persisted query scopes: pairing material lives only in memory while its dialog is open.
