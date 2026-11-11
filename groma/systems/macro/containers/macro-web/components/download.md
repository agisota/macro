---
type: C4 Component
title: Download
status: stable
groma:
  id: download
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/filesystem/download.ts
      symbol: downloadFile
  technology: SolidJS
description: Download inside the signed-in client.
---

Hands a Blob to the platform's save flow. Browsers download immediately; Android opens a save dialog. `saved` is false when the user cancels or the save fails; failures are already reported with a toast, so callers only need the outcome to decide what happens next.
