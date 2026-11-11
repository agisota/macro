---
type: C4 Component
title: Transcribe
status: stable
groma:
  id: transcribe
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/dictation/transcribe.ts
  technology: SolidJS
  group: Data queries
description: Wait out the server's Retry-After, but never less than exponential backoff
---

Wait out the server's Retry-After, but never less than exponential backoff.
