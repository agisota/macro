---
type: C4 Component
title: Create selection state
status: stable
groma:
  id: create-selection-state
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/list/create-selection-state.ts
  technology: SolidJS
description: Create selection state inside the signed-in client.
---

ID-only selection state. Item payloads are always derived from current data.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/list/create-selection-state.ts](../../../../../../apps/web/src/components/list/create-selection-state.ts) | [apps/web/src/components/list/create-list-controller.ts](../../../../../../apps/web/src/components/list/create-list-controller.ts) | Invokes supplied callbacks: getKey, items | typescript |
