---
type: C4 Component
title: HoverCard
status: stable
groma:
  id: component-hovercard
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/HoverCard.tsx
  technology: SolidJS
description: HoverCard inside the signed-in client.
---

Keeps the nearest parent hover card mounted while a portaled child surface is active. Use this for menus and editors whose content leaves the hover card's DOM subtree when it opens.
