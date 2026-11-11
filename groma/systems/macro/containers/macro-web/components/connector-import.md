---
type: C4 Component
title: Connector import connector import
status: stable
groma:
  id: connector-import
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/connector-import/connector-import.tsx
    - scanner: typescript
      file: apps/web/src/features/connector-import/context/contracts.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/connector-import-dialog.tsx
      symbol: ConnectorImportDialogHost
    - scanner: typescript
      file: apps/web/src/features/connector-import/context/connector-import-context.tsx
    - scanner: typescript
      file: apps/web/src/features/connector-import/components/security-note.tsx
      symbol: SecurityNote
    - scanner: typescript
      file: apps/web/src/features/connector-import/views/import-dialog.tsx
    - scanner: typescript
      file: apps/web/src/features/connector-import/core/providers.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/core/agent-handoff.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/primitives/promotion.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/core/catalog.ts
    - scanner: typescript
      file: apps/web/src/features/connector-import/components/provider-row.tsx
  technology: SolidJS
description: Pipedream-backed import promotions.
---

The prompt applies only after connector import is rolled out and the Pipedream stack is on. It lazy-loads `ConnectorImportDialogHost`. Categories come from `./core/catalog`. `slack-import` can hide this promotion (`slack-import/slack-import.tsx:1`).
