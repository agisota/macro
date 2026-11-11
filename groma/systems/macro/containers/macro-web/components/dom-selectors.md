---
type: C4 Component
title: Dom selectors
status: stable
groma:
  id: dom-selectors
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/dom-selectors.ts
  technology: SolidJS
  group: Workspace core
description: 'Marks a hotkey-neutral region: chrome that lives outside every split (the sidebar, the dock) where taking focus should NOT change the active'
---

Marks a hotkey-neutral region: chrome that lives outside every split (the sidebar, the dock) where taking focus should NOT change the active hotkey scope. Without it, focusing anything outside a DOM scope activates the 'global' scope, muting every split/block command until the user clicks back into a split. Overlays (dialogs, menus) must NOT be marked neutral — their fall-through to 'global' is what mutes app hotkeys
