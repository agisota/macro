---
type: C4 Component
title: cla-worker
status: stable
groma:
  id: cla-worker-src-index
  parent: macro
  code:
    - scanner: typescript
      file: services/cla-worker/src/index.ts
      symbol: Env
  technology: TypeScript
description: Scanned helper for cla-worker
---

Macro CLA signing worker.  Routes: GET /cla           – the CLA text with a "Sign with GitHub" link (?signed=1 renders the post-signature confirmation) GET /cla/callback  – GitHub OAuth callback; records the signature GET /cla/check     – bearer-gated lookup for the enforcement A
