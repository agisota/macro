---
type: C4 Component
title: Update metadata
status: stable
groma:
  id: update-metadata
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/update_metadata.rs
      symbol: update_thread_metadata
---
