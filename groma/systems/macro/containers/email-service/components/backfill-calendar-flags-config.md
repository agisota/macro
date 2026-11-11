---
type: C4 Component
title: Config
status: stable
groma:
  id: backfill-calendar-flags-config
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/bin/backfill_calendar_flags/config.rs
      symbol: from_env
---
