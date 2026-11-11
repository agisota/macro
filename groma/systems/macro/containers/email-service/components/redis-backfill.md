---
type: C4 Component
title: Backfill
status: stable
groma:
  id: redis-backfill
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/util/redis/backfill.rs
---
