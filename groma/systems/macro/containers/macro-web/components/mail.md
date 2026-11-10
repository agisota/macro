---
type: C4 Component
title: Web module
status: stable
groma:
  id: mail
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/tests/native/fixtures/mail.ts
    - scanner: typescript
      file: apps/web/tests/native/fixtures/filter-corpus.ts
    - scanner: typescript
      file: apps/web/tests/native/generate-fixtures.ts
  technology: SolidJS
description: Part of the signed-in client
---

Subset of the canonical Rust-encoded Mail fixtures. These are API records, not cache writes or precomputed filter results. Keep the capsule facts intact.
