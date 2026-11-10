---
type: C4 Component
title: Web module
status: stable
groma:
  id: useappsquishhandlers
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/useAppSquishHandlers.ts
      symbol: useAppSquishHandlers
  technology: SolidJS
description: Part of the signed-in client
---

A `keyboardWillShow` / `keyboardWillHide` event as dispatched by the native virtual keyboard bridge. `detail` is native-supplied, so it is read defensively rather than trusted: it is absent on hide, and `CustomEvent` leaves it `null` whenever the dispatcher omits it.
