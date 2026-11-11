---
type: C4 Component
title: Populate jwt
status: stable
groma:
  id: user-populate-jwt
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/webhooks/user/populate_jwt.rs
      symbol: handler
---
