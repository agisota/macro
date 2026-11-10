---
type: C4 Component
title: Web module
status: stable
groma:
  id: component-hovercard
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/HoverCard.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Keeps the nearest parent hover card mounted while a portaled child surface is active. Use this for menus and editors whose content leaves the hover card's DOM subtree when it opens.
