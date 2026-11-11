---
type: C4 Component
title: Tab
status: stable
groma:
  id: browser-test-tab
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/tab.ts
  technology: SolidJS
  group: Development tooling
description: The harness intentionally releases liveness early and discards a callback result that no caller consumes.
---

The harness intentionally releases liveness early and discards a callback result that no caller consumes.
