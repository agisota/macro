---
type: C4 Component
title: Prompt dismissals
status: stable
groma:
  id: queries-prompt-dismissals
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/prompt-dismissals.ts
  technology: SolidJS
  group: Data queries
description: Sidebar prompts the user dismissed, stored server-side so a dismissal holds on every device
---

Sidebar prompts the user dismissed, stored server-side so a dismissal holds on every device. Dismissing updates the cache optimistically; a failed write refetches the server's answer.
