---
type: C4 Component
title: Generate keys
status: stable
groma:
  id: generate-keys
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/bin/generate_keys.rs
      symbol: main
---
