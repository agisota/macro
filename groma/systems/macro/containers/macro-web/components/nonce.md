---
type: C4 Component
title: Nonce
status: stable
groma:
  id: nonce
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/nonce.ts
  technology: SolidJS
  group: Data queries
description: Nonce storage for optimistic update deduplication
---

Nonce storage for optimistic update deduplication.  Problem When a user performs an action (e.g., sends a message), we: 1. Apply the change optimistically to the UI 2. Send the request to the server 3. Receive a WebSocket event when the server broadcasts the change  Without deduplication, step 3 would re-apply the change, causing duplicates.  Solution: Nonce-based deduplication 1. In `onMutate`: Generate a unique non
