---
type: C4 Component
title: Web module
status: stable
groma:
  id: zipworkerclient
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/client/zipWorkerClient.ts
    - scanner: typescript
      file: apps/web/src/lib/core/client/folderUploadPaths.ts
  technology: SolidJS
description: Part of the signed-in client
---

NOTE: you can expect a 30-40% decrease in folder size when zipped
