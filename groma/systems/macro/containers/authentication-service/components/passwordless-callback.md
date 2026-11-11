---
type: C4 Component
title: Passwordless callback
status: stable
groma:
  id: passwordless-callback
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/oauth/passwordless_callback.rs
      symbol: handler
---
