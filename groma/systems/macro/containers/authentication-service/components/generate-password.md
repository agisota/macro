---
type: C4 Component
title: Generate password
status: stable
groma:
  id: generate-password
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/generate_password.rs
      symbol: generate_random_password
---
