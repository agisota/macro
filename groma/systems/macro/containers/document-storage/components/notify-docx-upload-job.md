---
type: C4 Component
title: Notify docx upload job
status: stable
groma:
  id: notify-docx-upload-job
  parent: document-storage
  code:
    - scanner: rust
      file: services/docx_unzip_handler/src/service/document/notify_docx_upload_job.rs
      symbol: handle_docx_unzip_failure
---
