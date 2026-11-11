---
type: C4 Component
title: Contact search
status: stable
groma:
  id: contact-search
  parent: macro
  code:
    - scanner: rust
      file: crates/client/cache-turso/src/storage/contact_search.rs
      symbol: validate_indexes
  group: Client
---
