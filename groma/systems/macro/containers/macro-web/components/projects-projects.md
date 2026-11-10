---
type: C4 Component
title: Projects
status: stable
groma:
  id: projects-projects
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/projects/projects.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-sources.ts
    - scanner: typescript
      file: apps/web/src/features/projects/views/projects-collection.tsx
      symbol: ProjectsCollection
    - scanner: typescript
      file: apps/web/src/features/projects/queries/production-project-description.ts
      symbol: createProductionProjectDescriptionSession
    - scanner: typescript
      file: apps/web/src/features/projects/project-description.tsx
      symbol: ProjectDescription
    - scanner: typescript
      file: apps/web/src/features/projects/queries/task-project.ts
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-soup.ts
    - scanner: typescript
      file: apps/web/src/features/projects/views/add-project-tasks.tsx
      symbol: AddProjectTasks
    - scanner: typescript
      file: apps/web/src/features/projects/project-unavailable.tsx
      symbol: ProjectUnavailable
    - scanner: typescript
      file: apps/web/src/features/projects/core/assignment.ts
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-group-move.ts
    - scanner: typescript
      file: apps/web/src/features/projects/core/project.ts
    - scanner: typescript
      file: apps/web/src/features/projects/project-collaboration.tsx
      symbol: ProjectDiscussion
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-chip.tsx
      symbol: ProjectChip
    - scanner: typescript
      file: apps/web/src/features/projects/project-collection-search.ts
      symbol: projectCollectionSearch
    - scanner: typescript
      file: apps/web/src/features/projects/core/project-activity.ts
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-cache-scope.ts
      symbol: captureProjectCacheScope
    - scanner: typescript
      file: apps/web/src/features/projects/primitives/create-project.ts
    - scanner: typescript
      file: apps/web/src/features/projects/project-attachment.tsx
      symbol: ProjectAttachment
    - scanner: typescript
      file: apps/web/src/features/projects/queries/create-project.ts
    - scanner: typescript
      file: apps/web/src/features/projects/project-share.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/views/project-tasks-list.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/components/rename-project-dialog.tsx
      symbol: RenameProjectDialog
    - scanner: typescript
      file: apps/web/src/features/projects/project-property.tsx
      symbol: ProjectPickerPopover
    - scanner: typescript
      file: apps/web/src/features/projects/project-detail.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-description-composer.tsx
      symbol: ProjectDescriptionComposer
    - scanner: typescript
      file: apps/web/src/features/projects/primitives/project-collection.ts
    - scanner: typescript
      file: apps/web/src/features/projects/primitives/property-draft.ts
      symbol: withProjectPropertyValue
    - scanner: typescript
      file: apps/web/src/features/projects/views/project-assignment.tsx
      symbol: ProjectAssignment
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-row-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-model.ts
      symbol: toProjectDetail
    - scanner: typescript
      file: apps/web/src/features/projects/views/projects-gantt.tsx
      symbol: ProjectsGantt
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-timeline.ts
      symbol: projectTimelineDates
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-collaborators.tsx
      symbol: ProjectCollaborators
    - scanner: typescript
      file: apps/web/src/features/projects/core/route.ts
    - scanner: typescript
      file: apps/web/src/features/projects/views/project-workspace.tsx
      symbol: ProjectWorkspace
    - scanner: typescript
      file: apps/web/src/features/projects/project-collection-persistence.ts
      symbol: createProjectCollectionPersistence
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-identity.ts
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-task-search.tsx
      symbol: ProjectTaskSearch
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-description.ts
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-tasks.ts
      symbol: createProjectTasksDataSource
    - scanner: typescript
      file: apps/web/src/features/projects/context/projects-context.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/primitives/project-gantt-rows.ts
      symbol: createProjectGanttRows
    - scanner: typescript
      file: apps/web/src/features/projects/components/delete-projects-dialog.tsx
      symbol: DeleteProjectsDialog
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-skeletons.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/views/project-picker.tsx
      symbol: ProjectPicker
    - scanner: typescript
      file: apps/web/src/features/projects/components/project-row.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/views/create-project.tsx
      symbol: CreateProject
    - scanner: typescript
      file: apps/web/src/features/projects/core/project-menu.ts
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-revalidation.ts
    - scanner: typescript
      file: apps/web/src/features/projects/open-project.ts
    - scanner: typescript
      file: apps/web/src/features/projects/project-view.tsx
    - scanner: typescript
      file: apps/web/src/features/projects/queries/project-properties.ts
  technology: SolidJS
  group: Tasks
description: Task-project list and detail navigation.
---

`ProjectView` navigates to `projectDetailRoute` with a project id and section. `projects.tsx` imports task create actions and the initiative client. `tasks-view` imports `openProject` and `ProjectsTab` from here. This is the task-project product surface; the folder block is `block-project`.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/projects/queries/project-sources.ts](../../../../../../apps/web/src/features/projects/queries/project-sources.ts) | [apps/web/src/lib/service-clients/service-storage/graphql-soup.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/graphql-soup.ts) | Invokes supplied callback: client | typescript |
