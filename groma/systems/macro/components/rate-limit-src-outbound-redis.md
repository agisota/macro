---
type: C4 Component
title: Redis
status: stable
groma:
  id: rate-limit-src-outbound-redis
  parent: macro
  code:
    - scanner: rust
      file: crates/rate_limit/src/outbound/redis.rs
  group: Rate limit
---
