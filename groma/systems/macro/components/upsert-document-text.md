---
type: C4 Component
title: Upsert document text
status: stable
groma:
  id: upsert-document-text
  parent: macro
  code:
    - scanner: rust
      file: crates/macro_db_client/src/dcs/upsert_document_text.rs
      symbol: upsert_document_text
  group: Macro db client
---
