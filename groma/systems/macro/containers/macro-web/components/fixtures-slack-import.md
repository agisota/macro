---
type: C4 Component
title: Web module
status: stable
groma:
  id: fixtures-slack-import
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/tests/e2e/fixtures/slack-import.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Real dialog/controller/ZIP worker, deterministic fake server. Serialization and server authorization are independently covered by adapter and PostgreSQL tests.
