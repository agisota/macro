---
type: C4 Component
title: Email index
status: stable
groma:
  id: core-email-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/email/index.ts
  technology: SolidJS
description: Index inside the signed-in client.
---

Compatibility entry point for the editor's HTML decorator and quoted replies. The implementation lives in the framework-independent renderer package.
