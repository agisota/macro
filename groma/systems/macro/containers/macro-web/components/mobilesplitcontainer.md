---
type: C4 Component
title: MobileSplitContainer
status: stable
groma:
  id: mobilesplitcontainer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/mobile/MobileSplitContainer.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/PopoverSplitRenderer.tsx
      symbol: PopoverSplitRenderer
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/registerSplitHotkeys.ts
      symbol: registerSplitHotkeys
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/utils/focusPopoverInput.ts
      symbol: focusPopoverInput
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-router/app-middleware.ts
      symbol: createAppSplitRouterMiddleware
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/components/SplitPanel.tsx
      symbol: SplitPanel
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/SplitLayout.tsx
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/splitFocusTracker.ts
      symbol: createSplitFocusTracker
    - scanner: typescript
      file: apps/web/src/components/app/split-layout/split-below-intent.ts
  technology: SolidJS
  group: App shell
description: MobileSplitContainer in App shell.
---

File apps/web/src/components/app/split-layout/mobile/MobileSplitContainer.tsx. It belongs to App shell, not a separate application.
