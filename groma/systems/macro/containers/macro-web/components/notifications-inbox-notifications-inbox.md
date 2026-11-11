---
type: C4 Component
title: Notifications inbox
status: stable
groma:
  id: notifications-inbox-notifications-inbox
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/notifications-inbox.tsx
      symbol: NotificationsInbox
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/inbox-date-headers.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/row-entity.ts
      symbol: rowEntity
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/queries/notification-inbox-mutations.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/route-views.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-clear-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-filter-menu.tsx
      symbol: InboxFilterMenu
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/queries/decode.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/core/inbox-row.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/views/notifications-view.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/queries/row-actions.ts
      symbol: resolveAccessRequest
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/context/notifications-inbox-context.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/row-actions.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/views/notifications-calendar-pane.tsx
      symbol: NotificationsCalendarPane
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-kind-icon.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/views/notifications-none-selected.tsx
      symbol: NotificationsNoneSelected
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/open-notification-in-split.ts
      symbol: openNotificationInSplit
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-sender-avatar.tsx
      symbol: InboxSenderAvatar
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/context/notifications-calendar-context.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/inbox-selection.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/inbox-filters.ts
      symbol: createInboxFilters
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/use-unified-notifications-flag.ts
      symbol: useUnifiedNotificationsFlag
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/notification-stack-item.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-row-icon.tsx
      symbol: InboxRowIcon
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/describe-row.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/queries/notification-inbox-groups.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-filter-groups.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/inbox-list.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/inbox-location.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/notification-row.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/row-action-buttons.tsx
      symbol: RowActionButtons
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/notification-location.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-clear-drawer.tsx
      symbol: InboxClearDrawer
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/primitives/inbox-telemetry.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-status-tabs.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/core/inbox-filters.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/queries/notification-inbox-shape.ts
      symbol: notificationInboxShape
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-date-header.tsx
      symbol: InboxDateHeader
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/notifications-calendar-preview.ts
    - scanner: typescript
      file: apps/web/src/features/notifications-inbox/components/inbox-filter-drawer.tsx
      symbol: InboxFilterDrawer
  technology: SolidJS
  group: Shell
description: Notifications pane, including an inline calendar preview.
---

`NotificationsInbox` uses the split panel, settings, calendar join-request mutation, and a calendar preview. It builds its source from `queries/notification-inbox-source` and opens rows with `openNotificationInSplit`. `NotificationsRouteView` lazy-loads this feature (`lazy-route-views.ts:30-32`). The route nests a calendar period path (`app-router-view.tsx:401-408`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts](../../../../../../apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts) | [apps/web/src/lib/queries/notification/revalidation.ts](../../../../../../apps/web/src/lib/queries/notification/revalidation.ts) | Invokes supplied callback: revalidateNotifications | typescript |
| [apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts](../../../../../../apps/web/src/features/notifications-inbox/queries/notification-inbox-source.ts) | [apps/web/src/lib/service-clients/service-storage/graphql-soup.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/graphql-soup.ts) | Invokes supplied callback: client | typescript |
