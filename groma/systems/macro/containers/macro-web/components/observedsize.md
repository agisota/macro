---
type: C4 Component
title: ObservedSize
status: stable
groma:
  id: observedsize
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/directive/observedSize.ts
      symbol: observedSize
    - scanner: typescript
      file: apps/web/src/lib/core/directive/folderSelector.ts
      symbol: folderSelector
    - scanner: typescript
      file: apps/web/src/lib/core/directive/touchHandler.ts
    - scanner: typescript
      file: apps/web/src/lib/core/directive/internalDragState.ts
    - scanner: typescript
      file: apps/web/src/lib/core/directive/fileDrop.ts
      symbol: fileDrop
    - scanner: typescript
      file: apps/web/src/lib/core/directive/focusInput.ts
    - scanner: typescript
      file: apps/web/src/lib/core/directive/fileFolderDrop.ts
      symbol: fileFolderDrop
    - scanner: typescript
      file: apps/web/src/lib/core/directive/clickOutside.ts
      symbol: clickOutside
    - scanner: typescript
      file: apps/web/src/lib/core/directive/fileSelector.ts
      symbol: fileSelector
  technology: SolidJS
  group: Workspace core
description: CSS class added while the touch highlight is active.
---

CSS class added while the touch highlight is active.
