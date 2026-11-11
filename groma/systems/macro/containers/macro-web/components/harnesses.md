---
type: C4 Component
title: Harnesses
status: stable
groma:
  id: harnesses
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/harnesses/harnesses.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/harnesses/keys.ts
      symbol: harnessKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/harnesses/connections.ts
      symbol: useHarnessConnectionStatus
  technology: SolidJS
description: Harnesses inside the signed-in client.
---

Cached callbacks outlive the hooks; keep hook scope out of these closures.
