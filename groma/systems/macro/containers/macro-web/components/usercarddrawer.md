---
type: C4 Component
title: Web module
status: stable
groma:
  id: usercarddrawer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/UserCardDrawer.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Opens the user card for `user` as a bottom sheet. Touch devices never get the hover card, so tapping an avatar or an @mention opens this instead.
