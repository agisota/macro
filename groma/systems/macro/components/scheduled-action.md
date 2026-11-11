---
type: C4 Component
title: Scheduled action
status: stable
groma:
  id: scheduled-action
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/inbound/axum_extractors/scheduled_action.rs
      symbol: from_request_parts
  group: Entity access
---
