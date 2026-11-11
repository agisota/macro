---
type: C4 Component
title: Generate dcs tools
status: stable
groma:
  id: generate-dcs-tools
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/scripts/generate-dcs-tools.ts
  technology: SolidJS
  group: Development tooling
description: 'Usage: bun run scripts/generate-dcs-tools'
---

Usage: bun run scripts/generate-dcs-tools.ts  This script generates AI tool schemas by running the local Rust binary and generates TS types for use in the chat block and service package.
