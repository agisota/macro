---
type: C4 Component
title: Recoverable idb
status: stable
groma:
  id: recoverable-idb
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/persistence/recoverable-idb.ts
      symbol: RecoverableIDB
  technology: SolidJS
description: Recoverable idb inside the signed-in client.
---

Errors WebKit raises when it suspends or drops a connection under a running transaction.
