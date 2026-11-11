---
type: C4 Component
title: Resync
status: stable
groma:
  id: resync
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/links/resync.rs
      symbol: resync_link_handler
---
