---
type: C4 Component
title: Process
status: stable
groma:
  id: backfill-contacts-process
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_contacts/process.rs
      symbol: process_macro_id
---
