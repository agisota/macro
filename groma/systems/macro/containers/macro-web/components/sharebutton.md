---
type: C4 Component
title: ShareButton
status: stable
groma:
  id: sharebutton
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/ShareButton.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/Bar.tsx
      symbol: Bar
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/shareModal.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/ShareDialogFrame.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/LoginButton.tsx
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/Center.tsx
      symbol: Center
    - scanner: typescript
      file: apps/web/src/lib/core/component/TopBar/linkShare.ts
  technology: SolidJS
description: Define levels of truncation for top bar.  @example  const context = useContext(BarContext);
---

Define levels of truncation for top bar.  @example  const context = useContext(BarContext);
