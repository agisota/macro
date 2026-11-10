---
type: C4 Component
title: Web module
status: stable
groma:
  id: use-navigation-unread
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/use-navigation-unread.ts
      symbol: useNavigationUnread
  technology: SolidJS
description: Part of the signed-in client
---

Module scope: cached query meta outlives the hook that registered it.
