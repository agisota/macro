---
type: C4 Component
title: Create router
status: stable
groma:
  id: create-router
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/create-router.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/run.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/layout.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/phases.ts
      symbol: createPhaseScopes
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/runner.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/entries.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/middleware.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/types.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/url.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/pane-list.ts
      symbol: createPaneList
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/leave-guards.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/claims.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/url-gate.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/preload.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/pane-navigation.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/router/url-navigation.ts
      symbol: createUrlNavigation
  technology: SolidJS
description: 'One navigation at a time as a state machine: each pane has one, and so do URL navigations. Pure: `runner.ts` does each phase''s work and reports it; this module '
---

One navigation at a time as a state machine: each pane has one, and so do URL navigations. Pure: `runner.ts` does each phase's work and reports it; this module decides what it means.  Lifecycle:  idle → guards → middleware → preload → idle  A new navigation replaces the one in flight, whatever phase it is in.
