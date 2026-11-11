---
type: C4 Component
title: Browser test mentions
status: stable
groma:
  id: browser-test-mentions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/block-agent/browser-test/mentions.tsx
  technology: SolidJS
description: '`agent` block and pending-session id.'
---

Load accepts a DSS id. The comment says a just-created session's id is the real one from the first frame, so a reloaded URL loads it like any other. `chat/ChatWithAgentButton.tsx` imports `startPendingSession` from this feature's `context/pending-session`. Live tracking is off.
