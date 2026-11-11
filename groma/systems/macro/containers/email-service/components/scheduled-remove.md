---
type: C4 Component
title: Remove
status: stable
groma:
  id: scheduled-remove
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/drafts/scheduled/remove.rs
      symbol: handler
---
