---
type: C4 Component
title: Enqueue delete document
status: stable
groma:
  id: enqueue-delete-document
  parent: macro
  code:
    - scanner: rust
      file: crates/sqs_client/src/document/enqueue_delete_document.rs
  group: Sqs client
---
