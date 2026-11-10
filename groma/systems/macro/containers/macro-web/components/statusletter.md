---
type: C4 Component
title: Web module
status: stable
groma:
  id: statusletter
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/diff-view/StatusLetter.tsx
      symbol: StatusLetter
  technology: SolidJS
description: Part of the signed-in client
---

The one-letter change status, coloured like the diff it describes.
