---
type: C4 Component
title: UserTooltip
status: stable
groma:
  id: usertooltip
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/UserTooltip.tsx
      symbol: UserTooltip
  technology: SolidJS
description: UserTooltip inside the signed-in client.
---

The user card as a hover surface. `UserCardDrawer` renders the same card from the same actions for touch devices, which never hover.
