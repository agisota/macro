---
type: C4 Component
title: Inbound
status: stable
groma:
  id: entity-registry-src-inbound
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_registry/entity_registry/src/inbound.rs
      symbol: from_request_parts
  group: Entity registry
---
