---
type: C4 Component
title: Crm entity users
status: stable
groma:
  id: crm-entity-users
  parent: macro
  code:
    - scanner: rust
      file: crates/entity_access/src/outbound/pg_access_repo/queries/crm_entity_users.rs
      symbol: get_crm_entity_users
  group: Entity access
---
