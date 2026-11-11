---
type: C4 Component
title: Document event publisher
status: stable
groma:
  id: document-event-publisher
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_storage_service/src/service/document_event_publisher.rs
      symbol: publish_document_purged_event
---
