---
type: C4 Component
title: sdk
status: stable
groma:
  id: openapi-ts-config
  parent: macro-generate
  code:
    - scanner: typescript
      file: packages/sdk/openapi-ts.config.ts
  technology: TypeScript
description: Shared package sdk
---

hey-api config for the SDK's generated layer.  Everything emitted goes under ./generated/ — treat that folder as build output (do not hand-edit; it is overwritten on regenerate). The hand-written SDK code lives in ./src and imports from ./generated/.  One entry per service. Each
