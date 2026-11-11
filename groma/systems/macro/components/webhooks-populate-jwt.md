---
type: C4 Component
title: Populate jwt
status: stable
groma:
  id: webhooks-populate-jwt
  parent: macro
  code:
    - scanner: rust
      file: crates/model/src/authentication/webhooks/populate_jwt.rs
  group: Model
---
