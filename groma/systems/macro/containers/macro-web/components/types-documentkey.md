---
type: C4 Component
title: Types documentKey
status: stable
groma:
  id: types-documentkey
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/filesystem/types/documentKey.ts
      symbol: DocumentKeyParts
  technology: SolidJS
description: DocumentKey inside the signed-in client.
---

Note that this is only for DSS documents. Temp files have document keys of a different format, and will be handled in {@link documentOverrideInfoAtom}. @returns The individual parts the make up a document key @see {@link getDocumentKeyParts}
