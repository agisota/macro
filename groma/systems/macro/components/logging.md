---
type: C4 Component
title: Logging
status: stable
groma:
  id: logging
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/logging.ts
      symbol: Logging
  technology: TypeScript
  group: Observability
description: Shared package observability
---

provider: LoggerProvider | undefined;
