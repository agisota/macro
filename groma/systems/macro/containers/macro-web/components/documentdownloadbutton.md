---
type: C4 Component
title: Web module
status: stable
groma:
  id: documentdownloadbutton
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/DocumentDownloadButton.tsx
      symbol: DocumentDownloadButton
  technology: SolidJS
description: Part of the signed-in client
---

Downloads a linked file without opening its viewer or loading it on hover.
