---
type: C4 Component
title: Delete inbox grant user
status: stable
groma:
  id: internal-delete-inbox-grant-user
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/internal/delete_inbox_grant_user.rs
      symbol: handler
---
