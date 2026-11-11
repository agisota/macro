---
type: C4 Component
title: Disable
status: stable
groma:
  id: disable
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/sync/disable.rs
      symbol: disable_handler
---
