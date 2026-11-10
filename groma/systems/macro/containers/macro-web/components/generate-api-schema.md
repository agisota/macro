---
type: C4 Component
title: Web module
status: stable
groma:
  id: generate-api-schema
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-api-schema.ts
  technology: SolidJS
description: Part of the signed-in client
---

Usage: bun run scripts/generate-api-schema.ts <service-name> // generate for specific service bun run scripts/generate-api-schema.ts               // generate for all services bun run scripts/generate-api-schema.ts --check       // verify types are up to date (for CI) bun run scr
