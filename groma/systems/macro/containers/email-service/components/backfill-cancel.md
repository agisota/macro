---
type: C4 Component
title: Cancel
status: stable
groma:
  id: backfill-cancel
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/backfill/cancel.rs
      symbol: handler
---
