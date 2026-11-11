---
type: C4 Component
title: Ingress worker
status: stable
groma:
  id: ingress-worker
  parent: macro
  code:
    - scanner: rust
      file: crates/notification/src/inbound/ingress_worker.rs
  group: Notification
---
