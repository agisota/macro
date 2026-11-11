---
type: C4 Component
title: Queries
status: stable
groma:
  id: routes-queries
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/queries.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/path.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/search-params.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/types.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/codec.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/targets.ts
      symbol: resolveTarget
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/manifest.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/define.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/search.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/routes/layout-param.ts
  technology: SolidJS
description: Queries inside the signed-in client.
---

Params of the first `depth` matches, with descendants overriding ancestors.
