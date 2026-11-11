---
type: C4 Component
title: Init
status: stable
groma:
  id: backfill-init
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/init.rs
      symbol: init_backfill
---
