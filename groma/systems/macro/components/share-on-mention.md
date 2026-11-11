---
type: C4 Component
title: Share on mention
status: stable
groma:
  id: share-on-mention
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/share_on_mention.rs
      symbol: share_link_shared_document_with_mentioned_users
  group: Macro db client
---
