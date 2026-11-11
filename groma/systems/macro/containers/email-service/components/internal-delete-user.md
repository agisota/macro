---
type: C4 Component
title: Delete user
status: stable
groma:
  id: internal-delete-user
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/api/internal/delete_user.rs
      symbol: handler
---
