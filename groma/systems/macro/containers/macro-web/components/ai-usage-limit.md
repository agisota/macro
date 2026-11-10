---
type: C4 Component
title: ai usage limit.ts
status: stable
groma:
  id: ai-usage-limit
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/ai-usage-limit.ts
  technology: TypeScript
description: Client for the ai usage limit.ts host
---

Only explicit quota refusals are usage limits; other 402s are unrelated.
