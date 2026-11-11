---
type: C4 Component
title: Composition root DSS
status: stable
groma:
  id: document-storage-service-src-server
  parent: document-storage-service
  code:
    - scanner: rust
      file: services/document_storage_service/src/server.rs
description: Собирает хранилища, доступы и domain adapters
---

Формирует ApiContext, Soup readers, репозитории и исходящие клиенты, включая sync-service и gateway.
