---
type: C4 Component
title: Web module
status: stable
groma:
  id: view-shell-searchbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/view-shell/SearchBar.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Called after Escape blurs the field without clearing its value. The view can restore keyboard focus to its list.
