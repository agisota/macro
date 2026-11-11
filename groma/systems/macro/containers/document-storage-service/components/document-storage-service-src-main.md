---
type: C4 Component
title: Запуск DSS
status: stable
groma:
  id: document-storage-service-src-main
  parent: document-storage-service
  code:
    - scanner: rust
      file: services/document_storage_service/src/main.rs
      symbol: main
description: Создаёт конфигурацию и запускает сервис документов
---

Является deployable entry point и вызывает собранный в library server.
