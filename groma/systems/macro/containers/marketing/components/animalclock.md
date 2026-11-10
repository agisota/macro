---
type: C4 Component
title: Marketing page
status: stable
groma:
  id: animalclock
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/lib/animal/utils/animalClock.ts
    - scanner: typescript
      file: apps/marketing/src/lib/animal/types/animalTypes.ts
    - scanner: typescript
      file: apps/marketing/src/lib/animal/utils/animalInterpolate.ts
      symbol: getEasingFn
  technology: SolidJS
description: Public site page or component
---

The clock is reference-counted by animate() subscriptions: it only ticks while at least one animation is live, so routes (or scenes paused while offscreen) with no subscribers cost zero rAF work. Time stays monotonic from performance.now(), so phase is preserved across stop/start
