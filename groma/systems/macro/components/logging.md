---
type: C4 Component
title: observability
status: stable
groma:
  id: logging
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/logging.ts
      symbol: Logging
  technology: TypeScript
description: Shared package observability
---

provider: LoggerProvider | undefined;
