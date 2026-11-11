---
type: C4 Component
title: Generate api schema
status: stable
groma:
  id: generate-api-schema
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-api-schema.ts
  technology: SolidJS
  group: Development tooling
description: 'Usage: bun run scripts/generate-api-schema'
---

Usage: bun run scripts/generate-api-schema.ts <service-name> // generate for specific service bun run scripts/generate-api-schema.ts               // generate for all services bun run scripts/generate-api-schema.ts --check       // verify types are up to date (for CI) bun run scripts/generate-api-schema.ts --print-cargo-bins // print the `--bin` args phase 1 builds (for CI)  This script generates OpenAPI schemas by r
