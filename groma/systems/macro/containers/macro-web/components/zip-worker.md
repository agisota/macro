---
type: C4 Component
title: Web module
status: stable
groma:
  id: zip-worker
  parent: macro-web
  code:
    - scanner: javascript
      file: apps/web/src/lib/workers/folder-upload/zip-worker.js
      symbol: zipFiles
  technology: SolidJS
description: Part of the signed-in client
---

Explicit folder entries keep empty folders in the upload.
