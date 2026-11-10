---
type: C4 Component
title: Web module
status: stable
groma:
  id: sessionexpiredredirect
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/SessionExpiredRedirect.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Sends a session the server rejected to a newly loaded /welcome, after confirming it with a fresh refresh; the base path and the app chrome render it on a stale login.
