---
type: C4 Component
title: Revoke microsoft grant
status: stable
groma:
  id: revoke-microsoft-grant
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/internal/revoke_microsoft_grant.rs
      symbol: handler
---
