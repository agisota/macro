---
type: C4 Container
title: Служба синхронизации документов
status: draft
groma:
  id: sync-service
  parent: macro
  technology: Rust, Cloudflare Workers, Durable Objects, Loro
description: CRDT-комнаты документов и совместных поверхностей
---

Cloudflare Worker держит по Durable Object на документ, проверяет scoped токены и подтверждает только принятые обновления Loro.
