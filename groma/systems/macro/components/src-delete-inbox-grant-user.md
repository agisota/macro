---
type: C4 Component
title: Delete inbox grant user
status: stable
groma:
  id: src-delete-inbox-grant-user
  parent: macro
  code:
    - scanner: rust
      file: crates/authentication_service_client/src/delete_inbox_grant_user.rs
      symbol: delete_inbox_grant_user
  group: Authentication service client
---
