---
type: C4 Component
title: Web module
status: stable
groma:
  id: state-liveindicators
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/state/liveIndicators.ts
      symbol: useUserIndicators
    - scanner: typescript
      file: apps/web/src/lib/core/state/clipboard.ts
  technology: SolidJS
description: Part of the signed-in client
---

Source under apps/web/src/lib/core/state/liveIndicators.ts.
