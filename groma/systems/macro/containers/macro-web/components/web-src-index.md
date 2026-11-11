---
type: C4 Component
title: Точка входа веб-клиента
status: stable
groma:
  id: web-src-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/index.tsx
description: Загружает SolidJS и платформенные адаптеры
---

Инициализирует приложение, выбирает browser/Tauri поведение и монтирует корневой Root.
