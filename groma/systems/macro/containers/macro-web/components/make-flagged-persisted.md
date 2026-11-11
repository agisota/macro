---
type: C4 Component
title: Make flagged persisted
status: stable
groma:
  id: make-flagged-persisted
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/preferences/make-flagged-persisted.ts
      symbol: makeFlaggedPersisted
  technology: SolidJS
description: Make flagged persisted inside the signed-in client.
---

Whether persistence should currently be active.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/preferences/make-flagged-persisted.ts](../../../../../../apps/web/src/lib/preferences/make-flagged-persisted.ts) | [apps/web/src/features/next-soup/soup-view/soup-view-context.tsx](../../../../../../apps/web/src/features/next-soup/soup-view/soup-view-context.tsx) | Invokes supplied callback: enabled | typescript |
