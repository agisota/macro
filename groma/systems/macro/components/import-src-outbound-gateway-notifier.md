---
type: C4 Component
title: Gateway notifier
status: stable
groma:
  id: import-src-outbound-gateway-notifier
  parent: macro
  code:
    - scanner: rust
      file: crates/import/src/outbound/gateway_notifier.rs
      symbol: gateway_import_notify
  group: Import
---
