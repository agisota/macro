---
type: C4 Component
title: Email api error
status: stable
groma:
  id: backfill-email-api-error
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/email_api_error.rs
      symbol: map_email_api_error
---
