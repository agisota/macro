---
type: C4 Component
title: Harness
status: stable
groma:
  id: channel-browser-test-harness
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/browser-test/harness.tsx
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/tests/detail-cache-fixture.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/channel/browser-test/adapters.ts
  technology: SolidJS
description: A controlled network and cache; query observers and the normalized exchange are real. Each mailbox waits for an actual result, without timers or polling.
---

A controlled network and cache; query observers and the normalized exchange are real. Each mailbox waits for an actual result, without timers or polling.
