---
type: C4 Component
title: Browser test project grouping
status: stable
groma:
  id: project-grouping
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/tasks-view/browser-test/project-grouping.tsx
  technology: SolidJS
  group: Tasks
description: Task list, board, Gantt, and project navigation host.
---

`TasksView` imports `ProjectsTab` and `openProject` from `projects`, saved views from `saved-views`, and `TutorialRow` from `video-tutorials` (`tasks-view/tasks-view.tsx:2-9`). The agent notes say Projects and CRM embed `TasksViewProvider`, and only `TasksView` mounts saved-view sources. Pane routes lazy-load `TasksRouteView`, `ProjectDetailRouteView`, and `ProjectTaskRouteView` from this feature (`lazy-route-views.ts:114-128`).
