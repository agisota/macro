---
type: C4 Component
title: Get thread owner
status: stable
groma:
  id: internal-get-thread-owner
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/internal/get_thread_owner.rs
      symbol: handler
---
