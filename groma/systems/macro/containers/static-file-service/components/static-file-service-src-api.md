---
type: C4 Component
title: HTTP API файлов
status: stable
groma:
  id: static-file-service-src-api
  parent: static-file-service
  code:
    - scanner: rust
      file: services/static_file_service/src/api.rs
      symbol: setup_and_serve
description: Обслуживает загрузку, чтение и удаление объектов
---

Регистрирует файловые routes и служебные endpoints, проверяя доступные размеры и идентификаторы.
