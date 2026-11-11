---
type: C4 Component
title: CreatePriorityCollapser
status: stable
groma:
  id: createprioritycollapser
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/priority-collapse/createPriorityCollapser.ts
  technology: SolidJS
description: CreatePriorityCollapser inside the signed-in client.
---

Lower numbers collapse first.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/components/priority-collapse/createPriorityCollapser.ts](../../../../../../apps/web/src/components/priority-collapse/createPriorityCollapser.ts) | [apps/web/src/components/app/split-layout/components/CollapsibleItem.tsx](../../../../../../apps/web/src/components/app/split-layout/components/CollapsibleItem.tsx) | Invokes supplied callback: onCollapsedChange | typescript |
