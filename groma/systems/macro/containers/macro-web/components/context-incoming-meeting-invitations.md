---
type: C4 Component
title: Meetings
status: stable
groma:
  id: context-incoming-meeting-invitations
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/meetings/context/incoming-meeting-invitations.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/manage-meetings-dialog.tsx
      symbol: ManageMeetingsDialog
    - scanner: typescript
      file: apps/web/src/features/meetings/queries/upcoming-calendar-events.ts
      symbol: useUpcomingCalendarEventsSource
    - scanner: typescript
      file: apps/web/src/features/meetings/views/incoming-call-notifications.tsx
      symbol: IncomingCallNotifications
    - scanner: typescript
      file: apps/web/src/features/meetings/context/call-sidebar.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/components/call-sidebar.tsx
      symbol: CallSidebar
    - scanner: typescript
      file: apps/web/src/features/meetings/components/incoming-call-notification.tsx
      symbol: IncomingCallNotification
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/invitation-countdown.ts
      symbol: createInvitationCountdown
    - scanner: typescript
      file: apps/web/src/features/meetings/core/meeting-invitations.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/core/upcoming-calendar-events.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/incoming-meeting-invitations.tsx
      symbol: IncomingMeetingInvitationsProvider
    - scanner: typescript
      file: apps/web/src/features/meetings/views/call-sidebar.tsx
      symbol: CallSidebar
    - scanner: typescript
      file: apps/web/src/features/meetings/core/calendar-calls.ts
      symbol: calendarCallNavigation
    - scanner: typescript
      file: apps/web/src/features/meetings/components/live-calls-sidebar.tsx
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/incoming-meeting-invitations.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/components/meeting-list.tsx
    - scanner: typescript
      file: apps/web/src/features/meetings/use-quick-calls-flag.ts
      symbol: useQuickCallsFlag
    - scanner: typescript
      file: apps/web/src/features/meetings/components/meeting-copy-button.tsx
      symbol: MeetingCopyButton
    - scanner: typescript
      file: apps/web/src/features/meetings/views/meeting-discussion-host.tsx
      symbol: MeetingDiscussionHost
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/call-sidebar.ts
      symbol: createCallSidebarClock
    - scanner: typescript
      file: apps/web/src/features/meetings/queries/active-quick-calls.ts
      symbol: useActiveQuickCallsSource
    - scanner: typescript
      file: apps/web/src/features/meetings/components/next-meeting-badge-pill.tsx
      symbol: NextMeetingBadgePill
  technology: SolidJS
description: Meeting route and session provider.
---

A route attaches by share token. Dismissal cancels an in-flight join; a connected session stays in the provider and can be reattached. Explicit Leave releases the participant. Back navigates to `/app` without leaving the call. `Root.tsx` mounts `MeetingSessionProvider` (`Root.tsx:244`). `MeetingRouter` lazy-loads from `meetings/meeting-router` inside `withMeetingShell`, which is full screen without app chrome (`lazy-route-views.ts:82-84`, `shells.tsx:87-97`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/meetings/primitives/incoming-meeting-invitations.ts](../../../../../../apps/web/src/features/meetings/primitives/incoming-meeting-invitations.ts) | [apps/web/src/features/notifications/notification-resolvers.ts](../../../../../../apps/web/src/features/notifications/notification-resolvers.ts) | Invokes supplied callback: callerName | typescript |
