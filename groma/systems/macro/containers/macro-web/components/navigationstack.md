---
type: C4 Component
title: Web module
status: stable
groma:
  id: navigationstack
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/navigation-stack/NavigationStack.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Whether `navigate` would open inline; callers with a split path ask first.
