---
type: C4 Component
title: ContentLoading
status: stable
groma:
  id: contentloading
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/ContentLoading.tsx
      symbol: ContentLoading
  technology: SolidJS
  group: App shell
description: 'A view''s frame while its code or data loads: a header and a few rows, in the same shimmer as list skeletons'
---

A view's frame while its code or data loads: a header and a few rows, in the same shimmer as list skeletons. Visible immediately, even when the surrounding mobile chrome is hidden.
