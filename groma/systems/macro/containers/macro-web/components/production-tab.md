---
type: C4 Component
title: Web module
status: stable
groma:
  id: production-tab
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/graphql-cache/worker/browser-test/production-tab.ts
  technology: SolidJS
description: Part of the signed-in client
---

Exercise the real coordinator identity even when builds share its script URL.
