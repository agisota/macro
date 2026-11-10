---
type: C4 Component
title: Web module
status: stable
groma:
  id: recipientsourcecontrols
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/RecipientSourceControls.tsx
      symbol: RecipientSourceControls
  technology: SolidJS
description: Part of the signed-in client
---

Pagination remains available even when a bounded local window has no rows.
