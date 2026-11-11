---
type: C4 Component
title: Sync
status: stable
groma:
  id: email-sync
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/sync.rs
      symbol: router
---
