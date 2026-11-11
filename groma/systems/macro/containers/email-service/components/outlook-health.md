---
type: C4 Component
title: Outlook health
status: stable
groma:
  id: outlook-health
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/util/redis/outlook_health.rs
      symbol: claim_outlook_health_snapshot
---
