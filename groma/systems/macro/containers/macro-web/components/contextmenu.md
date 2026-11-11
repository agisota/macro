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
description: ContextMenu inside the signed-in client.
---

ContextMenu-only abstractions. The DropdownMenu equivalents that used to live alongside these (in the old `Menu.tsx`) have been retired in favor of `@ui` `Dropdown`. Right-click menus still use this file because they need separate behavior + positioning from the click-triggered D
