---
type: C4 Component
title: Config
status: stable
groma:
  id: sdk-src-config
  parent: webhook
  code:
    - scanner: typescript
      file: packages/sdk/src/config.ts
  technology: TypeScript
description: Shared package sdk
---

The backend services the SDK talks to. Note `search` and `properties` are served on the storage host, so they point there.
