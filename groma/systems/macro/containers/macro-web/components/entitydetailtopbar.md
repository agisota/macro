---
type: C4 Component
title: Web module
status: stable
groma:
  id: entitydetailtopbar
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/entity-detail/EntityDetailTopBar.tsx
      symbol: EntityDetailTopBar
  technology: SolidJS
description: Part of the signed-in client
---

Header actions drop their labels first, at `@max-[600px]/split-header`.
