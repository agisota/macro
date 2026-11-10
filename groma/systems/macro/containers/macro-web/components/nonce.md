---
type: C4 Component
title: Web module
status: stable
groma:
  id: nonce
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/nonce.ts
  technology: SolidJS
description: Part of the signed-in client
---

Nonce storage for optimistic update deduplication.  Problem When a user performs an action (e.g., sends a message), we: 1. Apply the change optimistically to the UI 2. Send the request to the server 3. Receive a WebSocket event when the server broadcasts the change  Without dedup
