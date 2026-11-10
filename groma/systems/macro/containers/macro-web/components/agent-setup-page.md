---
type: C4 Component
title: Agent setup
status: stable
groma:
  id: agent-setup-page
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-setup/agent-setup-page.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-setup/core/agent-setup-markdown.ts
  technology: SolidJS
  group: Agents
description: '`/agent-setup` and `/agent-setup/done` pages.'
---

`useSetupStatus` returns signed-out, pending, needs-setup, or finished. Needs-setup is an authenticated agent whose tutorial is not complete. A failed background refetch keeps its data so leaving the page does not mint a new token. `AppChrome` navigates agents with an unfinished tutorial here (`Layout.tsx:240-242`). The route is under `AuthShell` (`app-router-view.tsx:285-288`).
