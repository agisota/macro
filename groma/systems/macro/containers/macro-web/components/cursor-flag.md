---
type: C4 Component
title: Web module
status: stable
groma:
  id: cursor-flag
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/cursor/flag.ts
      symbol: useCursorAgentsAccess
  technology: SolidJS
description: Part of the signed-in client
---

Whether the built-in Cursor mention is included in this user's rollout.
