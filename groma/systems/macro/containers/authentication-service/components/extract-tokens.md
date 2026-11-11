---
type: C4 Component
title: Extract tokens
status: stable
groma:
  id: extract-tokens
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/middleware/extract_tokens.rs
      symbol: handler
---
