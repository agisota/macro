---
type: C4 Component
title: Heic utils
status: stable
groma:
  id: heic-utils
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/heic/utils.ts
    - scanner: typescript
      file: apps/web/src/lib/core/heic/service.ts
      symbol: heicConversionService
    - scanner: typescript
      file: apps/web/src/lib/core/heic/performance.ts
    - scanner: typescript
      file: apps/web/src/lib/core/heic/logger.ts
    - scanner: typescript
      file: apps/web/src/lib/core/heic/types.ts
    - scanner: javascript
      file: apps/web/src/lib/core/heic/heic-worker.js
      symbol: getLibheifModule
    - scanner: typescript
      file: apps/web/src/lib/core/heic/constants.ts
    - scanner: typescript
      file: apps/web/src/lib/core/heic/workerPool.ts
      symbol: HeicWorkerPool
    - scanner: typescript
      file: apps/web/src/lib/core/heic/index.ts
  technology: SolidJS
  group: Workspace core
description: Utility functions for file type detection
---

Utility functions for file type detection
