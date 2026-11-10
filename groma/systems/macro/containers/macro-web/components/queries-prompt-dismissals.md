---
type: C4 Component
title: Web module
status: stable
groma:
  id: queries-prompt-dismissals
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/prompt-dismissals.ts
  technology: SolidJS
description: Part of the signed-in client
---

Sidebar prompts the user dismissed, stored server-side so a dismissal holds on every device. Dismissing updates the cache optimistically; a failed write refetches the server's answer.
