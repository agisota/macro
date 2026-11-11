---
type: C4 Container
title: Worker AI-редактирования
status: draft
groma:
  id: ai-editing-worker
  parent: macro
  technology: TypeScript, Cloudflare Workers, Loro, QuickJS
description: AI-правки открытых документов
---

Cloudflare Worker подключается к документу как Loro peer, выполняет AI-правки через ограниченный QuickJS и фиксирует изменения в sync-service.
