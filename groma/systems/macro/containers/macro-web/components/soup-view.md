---
type: C4 Component
title: Единая лента и поиск сущностей
status: stable
groma:
  id: soup-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/next-soup/soup-view/soup-view.tsx
description: Показывает документы, задачи, каналы, почту и CRM
---

Сочетает фильтры, локальные результаты и server-backed Soup/GraphQL запросы в одном списке.
