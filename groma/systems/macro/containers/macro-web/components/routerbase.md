---
type: C4 Component
title: Web module
status: stable
groma:
  id: routerbase
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/constants/routerBase.ts
  technology: SolidJS
description: Part of the signed-in client
---

Strip the router base from a `location.pathname` (which includes it, e.g. `/app/home`) so it can be compared to — and reused with — the base-relative paths that `navigate()` and route definitions use.
