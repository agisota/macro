---
type: C4 Component
title: Web module
status: stable
groma:
  id: core-email-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/email/index.ts
  technology: SolidJS
description: Part of the signed-in client
---

Compatibility entry point for the editor's HTML decorator and quoted replies. The implementation lives in the framework-independent renderer package.
