---
type: C4 Component
title: Verify email rate limit
status: stable
groma:
  id: verify-email-rate-limit
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_cache_client/src/verify_email_rate_limit.rs
  group: Macro cache client
---
