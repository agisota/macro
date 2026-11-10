---
type: C4 Component
title: Web module
status: stable
groma:
  id: contentloading
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/ContentLoading.tsx
      symbol: ContentLoading
  technology: SolidJS
description: Part of the signed-in client
---

A view's frame while its code or data loads: a header and a few rows, in the same shimmer as list skeletons. Visible immediately, even when the surrounding mobile chrome is hidden.
