---
type: C4 Component
title: Collaboration runtime
status: stable
groma:
  id: collaboration-src-index
  parent: macro
  code:
    - scanner: typescript
      file: packages/collaboration/src/index.ts
description: Общая библиотека совместного редактирования
---

Собирает Loro manager, sync engine, snapshots, WAL и awareness; это библиотека, а не отдельный backend.
