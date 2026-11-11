---
type: C4 Component
title: User
status: stable
groma:
  id: webhooks-user
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/webhooks/user.rs
      symbol: router
---
