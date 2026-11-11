---
type: C4 Component
title: Worker
status: stable
groma:
  id: observability-src-worker
  parent: macro
  code:
    - scanner: typescript
      file: packages/observability/src/worker.ts
  technology: TypeScript
description: Shared package observability
---

Cloudflare Workers entry. Importing @microlabs/otel-cf-workers loads the `cloudflare:workers` module at module scope, so this stays in its own entry and must only be imported from code that runs in workerd.
