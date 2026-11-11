---
type: C4 Component
title: Backfill init service
status: stable
groma:
  id: backfill-init-service
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/backfill_init_service.rs
---
