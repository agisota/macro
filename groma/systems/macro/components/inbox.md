---
type: C4 Component
title: inbox
status: stable
groma:
  id: inbox
  parent: macro
  code:
    - scanner: typescript
      file: crates/routine_program/src/catalog/inbox.ts
      symbol: main
    - scanner: typescript
      file: crates/routine_program/src/catalog/triage.ts
      symbol: main
    - scanner: typescript
      file: crates/routine_program/src/catalog/invoices.ts
      symbol: main
    - scanner: typescript
      file: crates/routine_program/src/catalog/document_tags.ts
      symbol: main
    - scanner: typescript
      file: crates/routine_program/src/catalog/email_tags.ts
      symbol: main
    - scanner: typescript
      file: crates/routine_program/src/catalog/updates.ts
      symbol: main
  group: Unscanned Rust helpers
description: Scanned source
---

The labels the owner made in the inbox this email arrived in.
