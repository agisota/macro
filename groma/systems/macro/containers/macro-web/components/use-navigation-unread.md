---
type: C4 Component
title: Use navigation unread
status: stable
groma:
  id: use-navigation-unread
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/use-navigation-unread.ts
      symbol: useNavigationUnread
  technology: SolidJS
  group: App shell
description: 'Module scope: cached query meta outlives the hook that registered it'
---

Module scope: cached query meta outlives the hook that registered it.
