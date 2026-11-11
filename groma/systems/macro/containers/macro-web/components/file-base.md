---
type: C4 Component
title: Base
status: stable
groma:
  id: file-base
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/filesystem/file/base.ts
    - scanner: typescript
      file: apps/web/src/lib/filesystem/file/index.ts
    - scanner: typescript
      file: apps/web/src/lib/filesystem/file/documentStorageService.ts
    - scanner: typescript
      file: apps/web/src/lib/filesystem/file/ephemeral.ts
      symbol: EphemeralFile
  technology: SolidJS
description: Base inside the signed-in client.
---

typed as any since it has not been implemented yet
