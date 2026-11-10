---
type: C4 Component
title: sdk
status: stable
groma:
  id: local-portmap
  parent: webhook
  code:
    - scanner: typescript
      file: packages/sdk/src/local-portmap.ts
  technology: TypeScript
description: Shared package sdk
---

Load a generated local-stack port map, if one is available.
