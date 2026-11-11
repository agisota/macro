---
type: C4 Component
title: HandleFileUpload
status: stable
groma:
  id: handlefileupload
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/utils/handleFileUpload.ts
      symbol: useHandleFileUpload
  technology: SolidJS
description: HandleFileUpload inside the signed-in client.
---

Refetch soup for folders once pending uploads are done, and show a success toast with an action to open the created folder/project.
