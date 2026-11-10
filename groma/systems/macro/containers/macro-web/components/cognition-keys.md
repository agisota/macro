---
type: C4 Component
title: Web module
status: stable
groma:
  id: cognition-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/cognition/keys.ts
      symbol: chatDataQueryKey
    - scanner: typescript
      file: apps/web/src/lib/queries/cognition/chat-data.ts
  technology: SolidJS
description: Part of the signed-in client
---

Scoped under `entity` so `invalidateQueries({ queryKey: ['entity'] })` (fired from the move/rename mutations) refreshes it.
