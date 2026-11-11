---
type: C4 Component
title: Core state
status: stable
groma:
  id: core-state
  parent: macro
  code:
    - scanner: typescript
      file: packages/loro-mirror/src/core/state.ts
    - scanner: typescript
      file: packages/loro-mirror/src/core/registry.ts
      symbol: ContainerRegistry
    - scanner: typescript
      file: packages/loro-mirror/src/core/utils.ts
    - scanner: typescript
      file: packages/loro-mirror/src/core/diff.ts
    - scanner: typescript
      file: packages/loro-mirror/src/core/mirror.ts
    - scanner: typescript
      file: packages/loro-mirror/src/core/index.ts
    - scanner: typescript
      file: packages/loro-mirror/src/core/tree.ts
    - scanner: typescript
      file: packages/loro-mirror/src/core/tree-validation.ts
      symbol: validateProposedTrees
  technology: TypeScript
  group: Shared packages
description: Shared package loro-mirror
---

State management functionality for Loro Mirror
