---
type: C4 Component
title: Depopulate crm for user
status: stable
groma:
  id: depopulate-crm-for-user
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/pubsub/backfill/depopulate_crm_for_user.rs
      symbol: depopulate_crm_for_user
---
