---
type: C4 Component
title: SearchBar
status: stable
groma:
  id: view-shell-searchbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/SearchBar.tsx
  technology: SolidJS
description: SearchBar inside the signed-in client.
---

Called after Escape blurs the field without clearing its value. The view can restore keyboard focus to its list.
