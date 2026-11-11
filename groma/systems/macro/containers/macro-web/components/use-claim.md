---
type: C4 Component
title: Use claim
status: stable
groma:
  id: use-claim
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/use-claim.ts
      symbol: useClaim
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/route.tsx
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/pane-scope.tsx
      symbol: PaneScope
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/memo-record.ts
      symbol: createMemoRecord
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/use-before-leave.ts
      symbol: useBeforeLeave
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/hooks.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/context.tsx
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/split-router.tsx
      symbol: SplitRouter
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/outlet.tsx
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/create-search-params.ts
    - scanner: typescript
      file: apps/web/src/lib/split-router/solid/router.tsx
  technology: SolidJS
  group: Split layout
description: Registers a resource this view shows outside a pane route, such as an inline preview, so opening it elsewhere activates this pane instead
---

Registers a resource this view shows outside a pane route, such as an inline preview, so opening it elsewhere activates this pane instead.
