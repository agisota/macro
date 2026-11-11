---
type: C4 Component
title: Dynamic ui render
status: stable
groma:
  id: dynamic-ui-render
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/render.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widget.ts
      symbol: Widget
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/Gallery.tsx
      symbol: Gallery
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/core/Layout.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/TaskResultRow.tsx
      symbol: TaskResultRow
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/tokens.ts
      symbol: TEXT
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/Tags.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/core/view-title.ts
      symbol: titledWidgets
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/List.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/DashboardToolView.lazy.ts
      symbol: DashboardToolView
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/Timeline.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/view.ts
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/ChannelMessage.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/Md.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/DashboardToolView.tsx
      symbol: DashboardToolView
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/generated/types.ts
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/Events.tsx
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/widgets/Cards.tsx
  technology: SolidJS
  group: Shell
description: Agent dashboard widgets.
---

The comment says it lives in the app package because the dynamic-ui lib depends on app internals; the core tool handler lazy-imports the default export to avoid a cycle. `agent-cards` imports `AgendaEvent`, `CardItemType`, and `TagNode` from `dynamic-ui/view` (`agent-cards/core/types.ts:1-5`). A debug route id `dynamic-ui` exists only when `LOCAL_ONLY` (`routes/routes.ts:860-888`).
