---
type: C4 Component
title: Context
status: stable
groma:
  id: scheduled-context
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/scheduled/context.rs
      symbol: delivery_adapter
---
