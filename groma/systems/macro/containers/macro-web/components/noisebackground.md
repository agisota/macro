---
type: C4 Component
title: Web module
status: stable
groma:
  id: noisebackground
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/NoiseBackground.tsx
      symbol: NoiseBackground
  technology: SolidJS
description: Part of the signed-in client
---

Marketing-hero backdrop: an ink/surface wash plus a film-grain tile. Both layers are pointer-transparent; page content must sit at z-10, between the wash (z-0) and the grain (z-20).
