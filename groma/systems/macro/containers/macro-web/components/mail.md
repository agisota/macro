---
type: C4 Component
title: Mail
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
  group: Development tooling
description: Subset of the canonical Rust-encoded Mail fixtures
---

Subset of the canonical Rust-encoded Mail fixtures. These are API records,
