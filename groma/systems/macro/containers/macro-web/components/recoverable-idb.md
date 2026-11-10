---
type: C4 Component
title: Web module
status: stable
groma:
  id: recoverable-idb
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/persistence/recoverable-idb.ts
      symbol: RecoverableIDB
  technology: SolidJS
description: Part of the signed-in client
---

Errors WebKit raises when it suspends or drops a connection under a running transaction.
