---
type: C4 Component
title: Web module
status: stable
groma:
  id: make-flagged-persisted
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/preferences/make-flagged-persisted.ts
      symbol: makeFlaggedPersisted
  technology: SolidJS
description: Part of the signed-in client
---

Whether persistence should currently be active.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/preferences/make-flagged-persisted.ts](../../../../../../apps/web/src/lib/preferences/make-flagged-persisted.ts) | [apps/web/src/features/next-soup/soup-view/soup-view-context.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/soup-view-context.tsx) | Invokes supplied callback: enabled | typescript |
