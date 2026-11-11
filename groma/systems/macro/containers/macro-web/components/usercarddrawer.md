---
type: C4 Component
title: UserCardDrawer
status: stable
groma:
  id: usercarddrawer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/UserCardDrawer.tsx
  technology: SolidJS
description: UserCardDrawer inside the signed-in client.
---

Opens the user card for `user` as a bottom sheet. Touch devices never get the hover card, so tapping an avatar or an @mention opens this instead.
