---
type: C4 Component
title: Web module
status: stable
groma:
  id: transcribe
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/dictation/transcribe.ts
  technology: SolidJS
description: Part of the signed-in client
---

Wait out the server's Retry-After, but never less than exponential backoff.
