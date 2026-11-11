---
type: C4 Component
title: Backfill outbox
status: stable
groma:
  id: backfill-outbox
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/backfill_outbox.rs
---
