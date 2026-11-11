---
type: C4 Component
title: Session login
status: stable
groma:
  id: session-login
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/session/session_login.rs
      symbol: handler
---
