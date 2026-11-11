---
type: C4 Component
title: Клиент почтового API
status: stable
groma:
  id: service-email-client
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/service-clients/service-email/client.ts
description: Управляет письмами, черновиками и отправкой
---

Содержит операции тредов, labels, drafts, attachments и schedules с адаптацией transport-моделей.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/service-clients/service-email/client.ts](../../../../../../apps/web/src/lib/service-clients/service-email/client.ts) | [services/email_service/src/api.rs](../../../../../../services/email_service/src/api.rs) | Вызывает почтовые операции | HTTPS |
