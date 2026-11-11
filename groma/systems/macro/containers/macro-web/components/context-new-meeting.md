---
type: C4 Component
title: Context new meeting
status: stable
groma:
  id: context-new-meeting
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/meetings/context/new-meeting.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/meeting-media.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/new-meeting.ts
      symbol: createNewMeeting
    - scanner: typescript
      file: apps/web/src/features/meetings/core/next-meeting-badge.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/context/meeting-session.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/meeting-session-owner.ts
      symbol: createMeetingSessionOwner
    - scanner: typescript
      file: apps/web/src/features/meetings/meeting-session-provider.tsx
      symbol: MeetingSessionProvider
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/meeting-navigation.ts
      symbol: createMeetingNavigation
    - scanner: typescript
      file: apps/web/src/features/meetings/context/meeting-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/components/meeting-participants.tsx
    - scanner: typescript
      file: apps/web/src/features/meetings/core/meeting-navigation.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/meeting-session-lifecycle.ts
      symbol: createMeetingSessionLifecycle
    - scanner: typescript
      file: apps/web/src/features/meetings/context/meeting-invite.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/views/meeting-media-setup.tsx
      symbol: MeetingMediaSetup
    - scanner: typescript
      file: apps/web/src/features/meetings/new-meeting-route.tsx
      symbol: NewMeetingRoute
    - scanner: typescript
      file: apps/web/src/features/meetings/browser/meeting-media.ts
      symbol: browserMeetingMedia
    - scanner: typescript
      file: apps/web/src/features/meetings/meeting-route.tsx
      symbol: MeetingRouteContent
    - scanner: typescript
      file: apps/web/src/features/meetings/components/meeting-call-heading.tsx
      symbol: MeetingCallHeading
    - scanner: typescript
      file: apps/web/src/features/meetings/browser/meeting-runtime.ts
      symbol: preloadMeetingRuntime
    - scanner: typescript
      file: apps/web/src/features/meetings/primitives/meeting-session.ts
      symbol: createMeetingSession
    - scanner: typescript
      file: apps/web/src/features/meetings/context/meeting-session-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/meeting-router.tsx
      symbol: MeetingRouter
    - scanner: typescript
      file: apps/web/src/features/meetings/context/meeting-session-owner.ts
    - scanner: typescript
      file: apps/web/src/features/meetings/views/meeting-page.tsx
      symbol: MeetingPage
    - scanner: typescript
      file: apps/web/src/features/meetings/queries/meeting-teammates.ts
      symbol: useMeetingTeammatesSource
    - scanner: typescript
      file: apps/web/src/features/meetings/views/meeting-invite.tsx
      symbol: MeetingInvite
  technology: SolidJS
  group: Calls
description: Meeting route and session provider.
---

A route attaches by share token. Dismissal cancels an in-flight join; a connected session stays in the provider and can be reattached. Explicit Leave releases the participant. Back navigates to `/app` without leaving the call. `Root.tsx` mounts `MeetingSessionProvider` (`Root.tsx:244`). `MeetingRouter` lazy-loads from `meetings/meeting-router` inside `withMeetingShell`, which is full screen without app chrome (`lazy-route-views.ts:82-84`, `shells.tsx:87-97`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/meetings/primitives/new-meeting.ts](../../../../../../apps/web/src/features/meetings/primitives/new-meeting.ts) | [apps/web/src/lib/queries/call/meetings.ts](../../../../../../apps/web/src/lib/queries/call/meetings.ts) | Invokes supplied callbacks: cancelRoom, prepareRoom | typescript |
