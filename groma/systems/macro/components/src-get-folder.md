---
type: C4 Component
title: Get folder
status: stable
groma:
  id: src-get-folder
  parent: macro
  code:
    - scanner: rust
      file: crates/s3_client/src/get_folder.rs
      symbol: get_folder_content_names
  group: S3 client
---
