---
type: C4 Component
title: Delete user
status: stable
groma:
  id: service-user-delete-user
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/service/user/delete_user.rs
      symbol: delete_user_data
---
