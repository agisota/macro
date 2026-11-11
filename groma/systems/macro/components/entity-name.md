---
type: C4 Component
title: Entity name
status: stable
groma:
  id: entity-name
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/entity_name.rs
      symbol: get_entity_name_and_owner
  group: Macro db client
---
