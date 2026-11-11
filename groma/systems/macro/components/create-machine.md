---
type: C4 Component
title: Create machine
status: stable
groma:
  id: create-machine
  parent: macro
  code:
    - scanner: typescript
      file: packages/machine/src/create-machine.ts
  technology: TypeScript
  group: State machine
description: Maximum events processed in one synchronous drain before assuming a cycle
---

Maximum events processed in one synchronous drain before assuming a cycle.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/machine/src/create-machine.ts](../../../../packages/machine/src/create-machine.ts) | [apps/web/src/features/calendar/primitives/create-calendar-loading-transition.ts](../../../../apps/web/src/features/calendar/primitives/create-calendar-loading-transition.ts) | Invokes supplied callback: execute | typescript |
| [packages/machine/src/create-machine.ts](../../../../packages/machine/src/create-machine.ts) | [apps/web/src/features/channel/Channel/create-target-message-controller.ts](../../../../apps/web/src/features/channel/Channel/create-target-message-controller.ts) | Invokes supplied callback: execute | typescript |
| [packages/machine/src/create-machine.ts](../../../../packages/machine/src/create-machine.ts) | [apps/web/src/lib/split-router/router/runner.ts](../../../../apps/web/src/lib/split-router/router/runner.ts) | Invokes supplied callback: execute | typescript |
