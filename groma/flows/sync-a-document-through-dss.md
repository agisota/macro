---
type: Groma Flow
title: Синхронизация документа через DSS
groma:
  id: sync-a-document-through-dss
---

При включённом sync-via-gateway клиент использует один multiplexed WebSocket к DSS. DSS проксирует кадры в sync-service, а Durable Object документа проверяет scoped token и владеет состоянием.

## Steps

| From | To | Action |
| --- | --- | --- |
| [Участник](../actors/workspace-member.md) | [Sync source factory](../systems/macro/containers/macro-web/components/helpers.md) | Открыть документ |
| [Sync source factory](../systems/macro/containers/macro-web/components/helpers.md) | [SyncRouterTransport](../systems/macro/components/router.md) | Выбрать gateway transport |
| [SyncRouterTransport](../systems/macro/components/router.md) | [DSS `/sync/ws`](../systems/macro/containers/document-storage-service/components/sync.md) | Открыть router WebSocket |
| [DSS `/sync/ws`](../systems/macro/containers/document-storage-service/components/sync.md) | [Sync Worker](../systems/macro/containers/sync-service/components/worker.md) | Проксировать document frames |
| [Sync Worker](../systems/macro/containers/sync-service/components/worker.md) | [Durable Object](../systems/macro/containers/sync-service/components/durable-object.md) | Выбрать комнату документа |
