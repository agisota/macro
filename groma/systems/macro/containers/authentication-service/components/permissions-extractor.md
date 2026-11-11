---
type: C4 Component
title: Permissions extractor
status: stable
groma:
  id: permissions-extractor
  parent: authentication-service
  code:
    - scanner: rust
      file: services/authentication_service/src/api/permissions_extractor.rs
      symbol: from_request_parts
---
