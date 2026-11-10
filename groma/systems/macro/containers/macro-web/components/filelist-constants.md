---
type: C4 Component
title: Web module
status: stable
groma:
  id: filelist-constants
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileList/constants.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileList/itemOperations.ts
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileList/useItemOperations.ts
      symbol: useItemOperations
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileList/buildFileTree.ts
      symbol: buildFileTree
    - scanner: typescript
      file: apps/web/src/lib/core/component/FileList/TruncatedText.tsx
      symbol: TruncatedText
  technology: SolidJS
description: Part of the signed-in client
---

Standard size options
