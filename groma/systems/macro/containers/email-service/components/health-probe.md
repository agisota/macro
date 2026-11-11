---
type: C4 Component
title: Health probe
status: stable
groma:
  id: health-probe
  parent: email-service
  code:
    - scanner: rust
      file: services/email_service/src/util/redis/health_probe.rs
---
