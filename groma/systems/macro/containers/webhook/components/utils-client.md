---
type: C4 Component
title: sdk
status: stable
groma:
  id: utils-client
  parent: webhook
  code:
    - scanner: typescript
      file: packages/sdk/src/utils/client.ts
    - scanner: typescript
      file: packages/sdk/src/utils/activity.ts
    - scanner: typescript
      file: packages/sdk/src/utils/index.ts
    - scanner: typescript
      file: packages/sdk/src/utils/lazy.ts
      symbol: Lazy
    - scanner: typescript
      file: packages/sdk/src/utils/unwrap.ts
    - scanner: typescript
      file: packages/sdk/src/utils/pagination.ts
    - scanner: typescript
      file: packages/sdk/src/utils/concurrency.ts
      symbol: mapConcurrently
  technology: TypeScript
description: Shared package sdk
---

Library code in packages/sdk. Not a separately deployed service.
