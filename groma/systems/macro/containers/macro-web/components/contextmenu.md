---
type: C4 Component
title: ContextMenu
status: stable
groma:
  id: contextmenu
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ContextMenu.tsx
  technology: SolidJS
  group: Workspace core
description: ContextMenu-only abstractions
---

ContextMenu-only abstractions. The DropdownMenu equivalents that used to live alongside these (in the old `Menu.tsx`) have been retired in favor of `@ui` `Dropdown`. Right-click menus still use this file because they need
