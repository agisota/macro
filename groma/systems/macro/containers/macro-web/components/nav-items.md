---
type: C4 Component
title: Web module
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
description: Part of the signed-in client
---

A SidebarRail nav button's definition: a `SidebarItem` plus the filled icon the button switches to while its view is active. Both are required here, unlike `SidebarItem['icon']` — a rail button is nothing but its glyph.
