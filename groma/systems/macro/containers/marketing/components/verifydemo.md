---
type: C4 Component
title: VerifyDemo
status: stable
groma:
  id: verifydemo
  parent: marketing
  code:
    - scanner: typescript
      file: apps/marketing/scripts/verifyDemo.ts
      symbol: verifyDemo
    - scanner: typescript
      file: apps/marketing/scripts/prerender.ts
    - scanner: typescript
      file: apps/marketing/scripts/prerenderEntry.tsx
    - scanner: typescript
      file: apps/marketing/scripts/verifyHomepage.ts
      symbol: verifyHomepage
    - scanner: typescript
      file: apps/marketing/scripts/verifyProductPages.ts
      symbol: verifyProductPages
    - scanner: typescript
      file: apps/marketing/scripts/verifyCrmMotion.ts
      symbol: verifyCrmMotion
  technology: SolidJS
description: Public site page or component
---

The sample workspace must be styled even before its application JS loads.
