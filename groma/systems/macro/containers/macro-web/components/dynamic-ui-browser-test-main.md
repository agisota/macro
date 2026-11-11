---
type: C4 Component
title: Dynamic ui browser test main
status: stable
groma:
  id: dynamic-ui-browser-test-main
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/dynamic-ui/browser-test/main.tsx
  technology: SolidJS
  group: Development tooling
description: Agent dashboard widgets.
---

The comment says it lives in the app package because the dynamic-ui lib depends on app internals; the core tool handler lazy-imports the default export to avoid a cycle. `agent-cards` imports `AgendaEvent`, `CardItemType`, and `TagNode` from `dynamic-ui/view` (`agent-cards/core/types.ts:1-5`). A debug route id `dynamic-ui` exists only when `LOCAL_ONLY` (`routes/routes.ts:860-888`).
