---
type: C4 Component
title: Delete
status: stable
groma:
  id: email-links-delete
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/email/links/delete.rs
      symbol: delete_link_handler
---
