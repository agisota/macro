---
type: C4 Component
title: HTTP-маршруты AI-редактирования
status: stable
groma:
  id: ai-editing-worker-src-index
  parent: ai-editing-worker
  code:
    - scanner: typescript
      file: services/ai-editing-worker/src/index.ts
description: Регистрирует endpoints для документных AI-операций
---

Hono-приложение принимает запросы на edit, Canvas, DOCX, forms, spreadsheets и Markdown и запускает соответствующие сессии.
