---
type: C4 Component
title: Marketing page
status: stable
groma:
  id: lib-theme-utils-themeutils
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/lib/theme/utils/themeUtils.ts
    - scanner: typescript
      file: apps/marketing/src/lib/theme/utils/themeMigrations.ts
      symbol: convertThemev0v1
    - scanner: typescript
      file: apps/marketing/src/lib/theme/signals/themeSignals.ts
    - scanner: typescript
      file: apps/marketing/src/lib/theme/components/ThemeEditorBasic.tsx
    - scanner: typescript
      file: apps/marketing/src/lib/theme/components/ThemeColorSwatch.tsx
      symbol: ThemeColorSwatch
    - scanner: typescript
      file: apps/marketing/src/lib/theme/components/ThemeList.tsx
      symbol: ThemeList
    - scanner: typescript
      file: apps/marketing/src/lib/theme/utils/themeColorUtils.ts
    - scanner: typescript
      file: apps/marketing/src/lib/theme/constants/themeConstants.ts
    - scanner: typescript
      file: apps/marketing/src/lib/theme/components/ThemeTools.tsx
      symbol: ThemeTools
    - scanner: typescript
      file: apps/marketing/src/lib/theme/signals/themeReactive.ts
    - scanner: typescript
      file: apps/marketing/src/lib/theme/types/themeTypes.ts
  technology: SolidJS
description: Public site page or component
---

Marketing source apps/marketing/src/lib/theme/utils/themeUtils.ts.
