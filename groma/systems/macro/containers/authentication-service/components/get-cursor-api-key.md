---
type: C4 Component
title: Get cursor api key
status: stable
groma:
  id: get-cursor-api-key
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/cursor_api_key/get_cursor_api_key.rs
      symbol: handler
---
