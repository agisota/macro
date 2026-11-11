---
type: C4 Component
title: Клиент DSS API
status: stable
groma:
  id: service-storage-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-storage/client.ts
description: Выполняет HTTP и GraphQL операции над сущностями
---

Покрывает Soup, документы, сообщения, задачи и permission tokens; браузер не обращается напрямую к внутренним Rust-доменам.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-storage/client.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/client.ts) | [services/document_storage_service/src/api/documents/permissions_token/create_permission_token.rs](../../../../../../services/document_storage_service/src/api/documents/permissions_token/create_permission_token.rs) | Запрашивает permission token | HTTPS |
| [apps/web/src/lib/service-clients/service-storage/client.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/client.ts) | [services/document_storage_service/src/api.rs](../../../../../../services/document_storage_service/src/api.rs) | Вызывает entity и Soup API | HTTP/GraphQL |
