---
type: C4 Component
title: Agent cards
status: stable
groma:
  id: routine-card
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/routine-card.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/kit/parts.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/collection.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/item-card.tsx
      symbol: ItemCard
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/reference-card.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/core/tag-ontology.ts
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/tags-card.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/event-card.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/debug/Gallery.tsx
      symbol: AgentCardsGallery
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/agenda.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/components/kit/card.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-cards/core/labels.ts
    - scanner: typescript
      file: apps/web/src/features/agent-cards/core/event-time.ts
    - scanner: typescript
      file: apps/web/src/features/agent-cards/core/types.ts
  technology: SolidJS
  group: Agents
description: Presentational cards for agent-produced views.
---

`CardItem` is a type, id, optional file type, and optional recurring-event occurrence key. Types are imported from `dynamic-ui/view` (`agent-cards/core/types.ts:1-5`). Components for item, reference, routine, event, and tags cards exist beside this file; they were not opened.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/agent-cards/core/types.ts](../../../../../../apps/web/src/features/agent-cards/core/types.ts) | [apps/web/src/features/dynamic-ui/view.ts](../../../../../../apps/web/src/features/dynamic-ui/view.ts) | reuses card view types | type import |
