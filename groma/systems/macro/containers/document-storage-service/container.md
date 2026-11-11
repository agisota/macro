---
type: C4 Container
title: Служба хранения документов (DSS)
status: stable
groma:
  id: document-storage-service
  parent: macro
  technology: Rust, Axum, GraphQL, Postgres
description: API графа рабочего пространства и метаданных
---

Владеет document/item CRUD, Soup GraphQL, каналами, задачами, CRM, историей и document-scoped токенами; содержимое совместного редактирования живёт в sync-service. DSS также исполняет часть email GraphQL-домена in-process; этот путь не является HTTP-вызовом standalone Email Service.
