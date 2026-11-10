---
type: C4 Component
title: Drive view
status: stable
groma:
  id: drivedetailview
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/drive-view/components/DriveDetailView.tsx
      symbol: DriveDetailView
  technology: SolidJS
  group: Files
description: Drive folders, tabs, and document detail.
---

The view imports spreadsheet access from `block-spreadsheet`, list open helpers from `next-soup`, soup hotkeys, tours, and `markRowNotificationsSeenOnOpen` from `notifications` (`drive-view/drive-view.tsx:2-22`). `DriveRouteView` and `DriveDetailView` lazy-load from this feature (`lazy-route-views.ts:54-64`). Document types in the route table include markdown, pdf, spreadsheet, and call (`routes/routes.ts:323-346`).
