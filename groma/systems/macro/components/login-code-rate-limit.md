---
type: C4 Component
title: Login code rate limit
status: stable
groma:
  id: login-code-rate-limit
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_cache_client/src/login_code_rate_limit.rs
  group: Macro cache client
---
