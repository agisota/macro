---
type: C4 Component
title: sdk
status: stable
groma:
  id: webhook-events
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/examples/webhook-events.ts
  technology: TypeScript
description: Shared package sdk
---

`as const` keeps the literal types so `.on()` infers each event's payload; `satisfies` makes a typo in this list a compile error.
