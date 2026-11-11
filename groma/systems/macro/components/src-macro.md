---
type: C4 Component
title: TypeScript SDK Macro
status: stable
groma:
  id: src-macro
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/src/macro.ts
      symbol: Macro
description: Публичный клиент для интеграций с Macro API
---

Собирает типизированные операции над сущностями и событиями для внешних host-приложений; не является отдельным runtime-сервисом.
