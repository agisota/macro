---
type: C4 Component
title: Generate image
status: stable
groma:
  id: generate-image
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/examples/generate-image.ts
  technology: TypeScript
  group: Macro SDK pieces
description: Generate an image and post it to a channel as an image attachment
---

Generate an image and post it to a channel as an image attachment.  Usage: MACRO_API_KEY=mak_... bun examples/generate-image.ts <channel-id> [prompt]  The image is charged to your AI allowance. Set MACRO_ENV for dev/prod/local.
