---
type: C4 Component
title: Openapi ts config
status: stable
groma:
  id: openapi-ts-config
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/openapi-ts.config.ts
  group: Macro SDK pieces
description: hey-api config for the SDK's generated layer
---

hey-api config for the SDK's generated layer.  Everything emitted goes under ./generated/ — treat that folder as build output (do not hand-edit; it is overwritten on regenerate). The hand-written SDK code lives in ./src and imports from ./generated/.  One entry per service. Each service produces: - ./generated/<service>/sdk.gen.ts        (typed SDK functions) - ./generated/<service>/types.gen.ts      (generated TS mo
