---
type: C4 Component
title: Populate crm for user
status: stable
groma:
  id: populate-crm-for-user
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/populate_crm_for_user.rs
      symbol: populate_crm_for_user
---
