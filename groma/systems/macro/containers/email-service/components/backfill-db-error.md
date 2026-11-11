---
type: C4 Component
title: Db error
status: stable
groma:
  id: backfill-db-error
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/db_error.rs
---
