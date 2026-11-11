---
type: C4 Component
title: Nav items
status: stable
groma:
  id: nav-items
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/nav-items.ts
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/view-switcher.tsx
      symbol: ViewSwitcher
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/use-sidebar-prefs.ts
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/nav-glyph.tsx
    - scanner: typescript
      file: apps/web/src/components/app/sidebar-next/use-nav-item-gates.ts
      symbol: useNavItemGates
  technology: SolidJS
  group: App shell
description: Nav items in App shell.
---

File apps/web/src/components/app/sidebar-next/nav-items.ts. It belongs to App shell, not a separate application.
