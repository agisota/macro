---
type: C4 Component
title: Web module
status: stable
groma:
  id: session-writes
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/session-writes.ts
  technology: SolidJS
description: Part of the signed-in client
---

REST responses can arrive after logout or native account replacement. Track their durable cache mutations so a wipe cannot overtake an admitted write.
