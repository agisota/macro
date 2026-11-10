---
type: C4 Component
title: Collaboration runtime
status: stable
groma:
  id: internal-compare
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/internal/compare.ts
      symbol: arrayEquals
    - scanner: typescript
      file: packages/collaboration/src/internal/result.ts
    - scanner: typescript
      file: packages/collaboration/src/internal/platform.ts
      symbol: isTauri
    - scanner: typescript
      file: packages/collaboration/src/internal/palette.ts
      symbol: getRandomPaletteColor
  technology: TypeScript, Loro
description: Loro sync, awareness, and the sync-service socket
---

Shared by the web app and workers. Callers pass the URL and token. It does not authenticate and does not call Gmail, GitHub, or model APIs.
