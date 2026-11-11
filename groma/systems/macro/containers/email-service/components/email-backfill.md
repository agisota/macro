---
type: C4 Component
title: Backfill
status: stable
groma:
  id: email-backfill
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/backfill.rs
      symbol: router
---
