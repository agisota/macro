---
type: C4 Component
title: Web module
status: stable
groma:
  id: handlefileupload
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/utils/handleFileUpload.ts
      symbol: useHandleFileUpload
  technology: SolidJS
description: Part of the signed-in client
---

Refetch soup for folders once pending uploads are done, and show a success toast with an action to open the created folder/project.
