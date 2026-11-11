---
type: C4 Component
title: Login
status: stable
groma:
  id: identity-provider-login
  parent: macro
  code:
    - scanner: rust
      file: crates/fusionauth/src/identity_provider/login.rs
      symbol: complete_identity_provider_login
  group: Fusionauth
---
