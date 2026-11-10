---
type: C4 Component
title: Web module
status: stable
groma:
  id: documentpreviewskeleton
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/DocumentPreviewSkeleton.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Shared by preview cards and their async boundaries; no document data required.
