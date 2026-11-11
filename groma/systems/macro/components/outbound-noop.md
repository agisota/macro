---
type: C4 Component
title: Noop
status: stable
groma:
  id: outbound-noop
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_authorization/src/outbound/noop.rs
      symbol: validate_credential
  group: Macro authorization
---
