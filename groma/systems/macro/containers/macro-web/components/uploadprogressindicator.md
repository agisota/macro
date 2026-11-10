---
type: C4 Component
title: Web module
status: stable
groma:
  id: uploadprogressindicator
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/UploadProgress/UploadProgressIndicator.tsx
      symbol: UploadProgressIndicator
    - scanner: typescript
      file: apps/web/src/lib/core/component/UploadProgress/uploadProgress.ts
  technology: SolidJS
description: Part of the signed-in client
---

Compact, non-dismissable indicator for every upload in flight.
