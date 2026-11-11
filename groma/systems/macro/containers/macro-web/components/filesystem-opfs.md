---
type: C4 Component
title: Opfs
status: stable
groma:
  id: filesystem-opfs
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/filesystem/opfs.ts
  technology: SolidJS
description: Opfs inside the signed-in client.
---

If making breaking changes to the OPFS structure / format, increment this
