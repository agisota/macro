---
type: C4 Component
title: Web module
status: stable
groma:
  id: email-folders
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/tests/e2e/fixtures/email-folders.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Production REST folder query, semantic restore mutation, invalidation, and row controls. Playwright supplies deterministic provider responses at HTTP boundaries.
