---
type: C4 Component
title: Config
status: stable
groma:
  id: email-refresh-handler-src-config
  parent: email-service
  code:
    - scanner: rust
      file: services/email_refresh_handler/src/config.rs
      symbol: from_env
---
