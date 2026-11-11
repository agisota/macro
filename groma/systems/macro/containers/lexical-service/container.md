---
type: C4 Container
title: Служба Lexical
status: draft
groma:
  id: lexical-service
  parent: macro
  technology: TypeScript, Bun, Hono, Lexical
description: Внутренние преобразования Lexical и Markdown
---

Выполняет stateless-конвертации документов в plaintext, HTML, XML, Markdown и agent-ready представления; содержимое и CRDT остаются в sync-service.
