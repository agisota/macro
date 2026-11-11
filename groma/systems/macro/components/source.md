---
type: C4 Component
title: Источник синхронизации документа
status: stable
groma:
  id: source
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/sync-service/source.ts
description: Передаёт обновления Loro и ожидает подтверждения
---

Реализует клиентскую сторону sync protocol: отправка updates, получение ACK и восстановление после разрыва не считаются подтверждением до ответа сервера.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [packages/collaboration/src/sync-service/source.ts](../../../../packages/collaboration/src/sync-service/source.ts) | [packages/collaboration/src/sync-service/router.ts](../../../../packages/collaboration/src/sync-service/router.ts) | Отправляет updates через router | Bebop |
| [packages/collaboration/src/sync-service/source.ts](../../../../packages/collaboration/src/sync-service/source.ts) | [services/sync-service/src/inbound/worker.rs](../../../../services/sync-service/src/inbound/worker.rs) | Отправляет updates напрямую | Bebop |
