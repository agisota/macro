---
type: C4 Component
title: Tasks view tasks view
status: stable
groma:
  id: tasks-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-view.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/types.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/TaskListContinuationRow.tsx
      symbol: TaskListContinuationRow
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/use-tasks-query.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/primitives/create-task-saved-view-draft.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-board.tsx
      symbol: TasksBoard
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/task-gantt-queries.ts
      symbol: createTaskGanttQueries
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-deadline-move-dialog.tsx
      symbol: TaskDeadlineMoveDialog
    - scanner: typescript
      file: apps/web/src/features/tasks-view/filters/task-facets.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/route-views.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/TaskList.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksControls.tsx
      symbol: TasksControls
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-board-property.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/views/task-board-view.tsx
      symbol: TaskBoardView
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-view-skeleton.tsx
      symbol: TasksViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/tasks-view/filters/task-saved-view.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-view-context.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-board.tsx
      symbol: TaskBoard
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/task-query.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/task-board.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/task-board-queries.ts
      symbol: createTaskBoardQueries
    - scanner: typescript
      file: apps/web/src/features/tasks-view/primitives/create-task-deadline-move.ts
      symbol: createTaskDeadlineMove
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/TaskGroupHeader.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksMobileTabs.tsx
      symbol: TasksMobileTabs
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TaskDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-gantt.tsx
      symbol: TasksGantt
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/task-search.ts
      symbol: buildTaskSearchRequest
    - scanner: typescript
      file: apps/web/src/features/tasks-view/core/task-board-optimism.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/task-gantt.ts
      symbol: taskGanttDates
    - scanner: typescript
      file: apps/web/src/features/tasks-view/filters/task-people-options.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-create-action.tsx
      symbol: TasksCreateAction
    - scanner: typescript
      file: apps/web/src/features/tasks-view/primitives/create-date-bucket-boundaries.ts
      symbol: createDateBucketBoundariesSignal
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksFilterDrawer.tsx
      symbol: TasksFilterDrawer
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/TaskGridLayout.tsx
      symbol: TaskGridLayout
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/TaskListHeader.tsx
      symbol: TaskListHeader
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-due-date-range-dialog.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksSidebar.tsx
      symbol: TasksSidebar
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-tab-search.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/context/task-board.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/primitives/create-tasks-view-search.ts
      symbol: createTasksViewSearch
    - scanner: typescript
      file: apps/web/src/features/tasks-view/core/task-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksDetailView.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tasks-content.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/persistence.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/constants.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/task-composer.ts
      symbol: taskBoardComposerContext
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/scoped-task-search.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/primitives/create-task-board.ts
      symbol: createTaskBoard
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksCreateMenu.tsx
      symbol: TasksCreateMenu
    - scanner: typescript
      file: apps/web/src/features/tasks-view/filters/task-predicates.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/filters/ai-task-filter.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/tour.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/views/task-saved-views.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/filters/use-task-filters.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/TasksHeader.tsx
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/task-grid-template.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/components/task-list/TaskListEntity.tsx
      symbol: TaskListEntity
    - scanner: typescript
      file: apps/web/src/features/tasks-view/views/task-gantt-view.tsx
      symbol: TaskGanttView
    - scanner: typescript
      file: apps/web/src/features/tasks-view/queries/ai-task-filter-plan.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/core/task-board.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/core/task-due-date.ts
    - scanner: typescript
      file: apps/web/src/features/tasks-view/project-detail-search.ts
      symbol: projectDetailSearch
  technology: SolidJS
  group: Tasks
description: Task list, board, Gantt, and project navigation host.
---

`TasksView` imports `ProjectsTab` and `openProject` from `projects`, saved views from `saved-views`, and `TutorialRow` from `video-tutorials` (`tasks-view/tasks-view.tsx:2-9`). The agent notes say Projects and CRM embed `TasksViewProvider`, and only `TasksView` mounts saved-view sources. Pane routes lazy-load `TasksRouteView`, `ProjectDetailRouteView`, and `ProjectTaskRouteView` from this feature (`lazy-route-views.ts:114-128`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/tasks-view/tasks-view.tsx](../../../../../../apps/web/src/features/tasks-view/tasks-view.tsx) | [apps/web/src/features/projects/open-project.ts](../../../../../../apps/web/src/features/projects/open-project.ts) | opens a project | function import |
| [apps/web/src/features/tasks-view/tasks-view.tsx](../../../../../../apps/web/src/features/tasks-view/tasks-view.tsx) | [apps/web/src/features/video-tutorials/index.ts](../../../../../../apps/web/src/features/video-tutorials/index.ts) | renders tutorial row | component import |
