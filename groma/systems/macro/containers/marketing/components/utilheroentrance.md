---
type: C4 Component
title: Marketing page
status: stable
groma:
  id: utilheroentrance
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/src/app/utils/utilHeroEntrance.ts
  technology: SolidJS
description: Public site page or component
---

Carry the static HTML's animation clock across Solid's client replacement. A null clock means the CSS entrance already finished (or motion is disabled). The cleanup limits this handoff to boot; later visits get a fresh entrance.
