---
type: C4 Component
title: Eventbridge
status: stable
groma:
  id: eventbridge
  parent: document-storage
  code:
    - scanner: rust
      file: services/document_upload_finalizer_handler/src/inbound/eventbridge.rs
      symbol: object_created_from_event
---
