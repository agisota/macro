---
type: C4 Component
title: ScopedPortal
status: stable
groma:
  id: scopedportal
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ScopedPortal.tsx
  technology: SolidJS
description: ScopedPortal inside the signed-in client.
---

Portal with some extra scoping logic. If passed a specific mount prop or no props at all – it is just a regular solid Portal. @param props.scope - The scope of the portal. If 'local' it will mount to the closest element with the '.portal-scope' class. If 'block' it will mount to
