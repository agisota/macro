---
type: C4 Component
title: Drive view drive view
status: stable
groma:
  id: drive-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-view.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/create-folder.tsx
      symbol: CreateFolder
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-hosted-content.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/pdf-document.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-route-state.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/tour.ts
      symbol: documentsTour
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/drive-navigation.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/core/folder-composer.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-search.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-route.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-detail-navigation.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/UnknownDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-list.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-list.tsx
      symbol: DriveList
    - scanner: typescript
      file: apps/web/src/features/drive-view/core/location-label.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-header.tsx
      symbol: DriveHeader
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-host-actions.ts
      symbol: createDriveHostActions
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-filter-menu.tsx
      symbol: DriveFilterMenu
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-folder-actions.tsx
      symbol: DriveFolderActions
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/FileDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-breadcrumbs.tsx
      symbol: DriveBreadcrumbs
    - scanner: typescript
      file: apps/web/src/features/drive-view/route-views.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-create-menu.tsx
      symbol: DriveCreateMenu
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-search.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-mobile-tabs.tsx
      symbol: DriveMobileTabs
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/drive-file-dropzone.tsx
      symbol: DriveFileDropzone
    - scanner: typescript
      file: apps/web/src/features/drive-view/core/breadcrumbs.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-databases.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/CodeDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/canvas-document.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-results.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/MarkdownDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-sidebar.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/video-document.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/core/types.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/DriveBreadcrumbs.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-query.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/file-detail-operations.tsx
      symbol: downloadFileOperation
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-workspace.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/DriveCallDetail.tsx
      symbol: DriveCallDetail
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-data-source.ts
      symbol: createDriveDataSource
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/CanvasDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-sidebar-source.ts
      symbol: createDriveSidebarSource
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-filter-drawer.tsx
      symbol: DriveFilterDrawer
    - scanner: typescript
      file: apps/web/src/features/drive-view/core/folder-tree.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-route-navigation.ts
      symbol: driveDestination
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/folder-tree.tsx
      symbol: FolderTree
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-location-menu.tsx
      symbol: DriveLocationMenu
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/folder-creation.ts
      symbol: createFolderCommands
    - scanner: typescript
      file: apps/web/src/features/drive-view/drive-view-skeleton.tsx
      symbol: DriveViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/FileDetailBreadcrumbItem.tsx
      symbol: FileDetailBreadcrumbItem
    - scanner: typescript
      file: apps/web/src/features/drive-view/util/file-detail-context.ts
      symbol: FileDetailContext
    - scanner: typescript
      file: apps/web/src/features/drive-view/folder-compose-view.tsx
      symbol: FolderComposeView
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-state.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/image-document.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-detail-trail.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/PdfDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/drive-forms.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/signed-out-drive-workspace.tsx
      symbol: SignedOutDriveWorkspace
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/VideoDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/folder-composer.ts
      symbol: createFolderComposer
    - scanner: typescript
      file: apps/web/src/features/drive-view/filters/use-drive-filters.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/drive-folder-hierarchy.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/util/document-download-name.ts
      symbol: documentDownloadName
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/folder-composer.tsx
      symbol: FolderComposer
    - scanner: typescript
      file: apps/web/src/features/drive-view/views/ImageDetail.tsx
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/code-document.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/queries/unknown-document.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/filters/drive-facets.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/primitives/drive-route-schema.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/context/drive-source.ts
    - scanner: typescript
      file: apps/web/src/features/drive-view/context/drive-context.tsx
  technology: SolidJS
description: Drive folders, tabs, and document detail.
---

The view imports spreadsheet access from `block-spreadsheet`, list open helpers from `next-soup`, soup hotkeys, tours, and `markRowNotificationsSeenOnOpen` from `notifications` (`drive-view/drive-view.tsx:2-22`). `DriveRouteView` and `DriveDetailView` lazy-load from this feature (`lazy-route-views.ts:54-64`). Document types in the route table include markdown, pdf, spreadsheet, and call (`routes/routes.ts:323-346`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/drive-view/drive-view.tsx](../../../../../../apps/web/src/features/drive-view/drive-view.tsx) | [apps/web/src/features/next-soup/utils.ts](../../../../../../apps/web/src/features/next-soup/utils.ts) | opens a list entity in a split | function import |
| [apps/web/src/features/drive-view/drive-view.tsx](../../../../../../apps/web/src/features/drive-view/drive-view.tsx) | [apps/web/src/features/notifications/mark-row-seen.ts](../../../../../../apps/web/src/features/notifications/mark-row-seen.ts) | marks row notifications seen | function import |
