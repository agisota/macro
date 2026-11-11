---
type: C4 Component
title: Backend
status: stable
groma:
  id: loro-backend
  parent: macro
  code:
    - scanner: typescript
      file: packages/graphics/src/loro/backend.ts
    - scanner: typescript
      file: packages/graphics/src/loro/solid/index.tsx
    - scanner: typescript
      file: packages/graphics/src/loro/presence.ts
    - scanner: typescript
      file: packages/graphics/src/loro/artifact-library.ts
    - scanner: typescript
      file: packages/graphics/src/loro/solid/presence-motion.ts
      symbol: createPresenceMotion
    - scanner: typescript
      file: packages/graphics/src/loro/solid/pointer.ts
      symbol: attachPresencePointer
    - scanner: typescript
      file: packages/graphics/src/loro/presence-state.ts
    - scanner: typescript
      file: packages/graphics/src/loro/index.ts
    - scanner: typescript
      file: packages/graphics/src/loro/scene-mapping.ts
    - scanner: typescript
      file: packages/graphics/src/loro/schema.ts
  technology: TypeScript
  group: Graphics
description: Host bookkeeping is durable but must not become a scene undo step
---

Host bookkeeping is durable but must not become a scene undo step.
