---
type: C4 Component
title: Notifications
status: stable
groma:
  id: markmessagenotifications
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/notifications/components/MarkMessageNotifications.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications/index.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/utils/mock-websocket.ts
      symbol: createMockWebsocket
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-helpers.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/primitives/create-message-read-visibility.ts
      symbol: createMessageReadVisibility
    - scanner: typescript
      file: apps/web/src/features/notifications/notifications-blocked-message.ts
      symbol: notificationsBlockedMessage
    - scanner: typescript
      file: apps/web/src/features/notifications/vitest.config.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-sender.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/channel-thread-root.ts
      symbol: channelThreadRootId
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-source.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-resolvers.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/types.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-state.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/components/NotificationReadMarker.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-metadata.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/PendingNotificationNavigationEffect.tsx
      symbol: usePendingNotificationNavigationEffect
    - scanner: typescript
      file: apps/web/src/features/notifications/document-comment-notification.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/document-comment-location.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/apply-preference-toggle.ts
      symbol: applyPreferenceToggle
    - scanner: typescript
      file: apps/web/src/features/notifications/components/MessageReadVisibility.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications/components/Playground.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-open-trace.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/github-event-types.ts
      symbol: GITHUB_EVENT_TYPES
    - scanner: typescript
      file: apps/web/src/features/notifications/SnoozeNotificationsDialog.tsx
      symbol: openSnoozeNotifications
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-navigation-intent.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/components/PlatformNotificationProvider.tsx
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-stacking.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/row-notification.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/unread-message-notifications.ts
      symbol: indexUnreadMessageNotifications
    - scanner: typescript
      file: apps/web/src/features/notifications/queries/entities-notifications-query.ts
      symbol: fetchNotificationsForEntities
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-event-catalog.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/primitives/create-snooze-controller.ts
      symbol: createSnoozeController
    - scanner: typescript
      file: apps/web/src/features/notifications/components/BrowserNotificationModal.tsx
      symbol: BrowserNotificationModal
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-platform.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/entity-discussion.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/mark-row-seen.ts
      symbol: markRowNotificationsSeenOnOpen
    - scanner: typescript
      file: apps/web/src/features/notifications/queries/muted-entities-query.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/use-notification-updates.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/components/SnoozePicker.tsx
      symbol: SnoozePicker
    - scanner: typescript
      file: apps/web/src/features/notifications/top-level-channel-notification.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/core/snooze.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-settings.ts
    - scanner: typescript
      file: apps/web/src/features/notifications/notification-preview.ts
      symbol: NOTIFICATION_LABEL_BY_TYPE
  technology: SolidJS
description: Notification platform, navigation, and read/done helpers.
---

The index re-exports the browser modal, read markers, and entity notification helpers. `Root.tsx` mounts `BrowserNotificationModal` (`Root.tsx:40`, `Root.tsx:232`). `drive-view` imports `markRowNotificationsSeenOnOpen` from this feature (`drive-view/drive-view.tsx:22`). The inbox screen itself is `notifications-inbox`, not this directory.
