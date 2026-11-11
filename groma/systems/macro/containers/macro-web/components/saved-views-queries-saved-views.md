---
type: C4 Component
title: Saved views
status: stable
groma:
  id: saved-views-queries-saved-views
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/saved-views/queries/saved-views.ts
    - scanner: typescript
      file: apps/web/src/features/saved-views/queries/saved-view-changes.ts
      symbol: refreshOnSavedViewChanges
    - scanner: typescript
      file: apps/web/src/features/saved-views/components/saved-view-list.tsx
    - scanner: typescript
      file: apps/web/src/features/saved-views/queries/saved-view-actions.ts
    - scanner: typescript
      file: apps/web/src/features/saved-views/core/saved-view.ts
    - scanner: typescript
      file: apps/web/src/features/saved-views/context/saved-views-source.ts
    - scanner: typescript
      file: apps/web/src/features/saved-views/components/saved-view-menu.tsx
      symbol: SavedViewMenuItems
    - scanner: typescript
      file: apps/web/src/features/saved-views/components/saved-view-picker.tsx
      symbol: SavedViewPicker
    - scanner: typescript
      file: apps/web/src/features/saved-views/components/saved-view-dialog.tsx
    - scanner: typescript
      file: apps/web/src/features/saved-views/views/saved-view-dialogs.tsx
  technology: SolidJS
  group: Shell
description: Saved-view queries, dialogs, and list chrome.
---

The notes say the generic feature does not interpret consumer configuration. Task filters stay in `tasks-view`; email filters stay in `email-view`. Writes from elsewhere appear through a `saved_views_changed` push that carries no definition. Both `email-view` and `tasks-view` import `useSavedView` / `useSavedViews` (seen in their import blocks). CRM's legacy personal views are explicitly out of scope in the notes.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/saved-views/queries/saved-view-actions.ts](../../../../../../apps/web/src/features/saved-views/queries/saved-view-actions.ts) | [apps/web/src/features/email-view/views/email-saved-views.tsx](../../../../../../apps/web/src/features/email-view/views/email-saved-views.tsx) | Invokes supplied callback: refresh | typescript |
