---
type: C4 Component
title: Delete entity mentions by source
status: stable
groma:
  id: delete-entity-mentions-by-source
  parent: macro
  code:
    - scanner: rust
      file: crates/comms_db_client/src/entity_mentions/delete_entity_mentions_by_source.rs
      symbol: delete_entity_mentions_by_source
  group: Comms db client
---
