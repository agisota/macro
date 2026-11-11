---
type: C4 Component
title: Rate limit
status: stable
groma:
  id: redis-rate-limit
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/util/redis/rate_limit.rs
---
