---
type: C4 Component
title: Pre save
status: stable
groma:
  id: pre-save
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/api/documents/pre_save.rs
      symbol: presave_document_handler
---
