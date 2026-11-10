---
type: C4 Component
title: App router view
status: stable
groma:
  id: app-router-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/routes/app-router-view.tsx
      symbol: AppRouterView
    - scanner: typescript
      file: apps/web/src/routes/Root.tsx
      symbol: Root
    - scanner: typescript
      file: apps/web/src/observability/typing-burst.ts
      symbol: startTypingBurstTelemetry
    - scanner: typescript
      file: apps/web/src/routes/BasePath.tsx
      symbol: BasePathComponent
    - scanner: typescript
      file: apps/web/src/routes/public-booking-shell.tsx
      symbol: PublicBookingShell
    - scanner: typescript
      file: apps/web/src/observability/navigation-breadcrumb.ts
    - scanner: typescript
      file: apps/web/src/observability/os-type.ts
    - scanner: typescript
      file: apps/web/src/routes/use-sync-login-cookie.ts
      symbol: useSyncLoginCookie
    - scanner: typescript
      file: apps/web/src/index.tsx
    - scanner: typescript
      file: apps/web/src/routes/pages.tsx
    - scanner: typescript
      file: apps/web/src/observability/native-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/routes/lazy-route-views.ts
    - scanner: typescript
      file: apps/web/src/routes/TaskRoute.tsx
      symbol: TaskRoute
    - scanner: typescript
      file: apps/web/src/observability/native-call-tracing.ts
      symbol: configureNativeCallTracing
    - scanner: typescript
      file: apps/web/src/routes/shells.tsx
    - scanner: typescript
      file: apps/web/src/observability/browser.ts
      symbol: initializeBrowserObservability
    - scanner: typescript
      file: apps/web/src/observability/boot.ts
      symbol: startBootTrace
  technology: SolidJS
description: 'Before any await: the desktop link''s ad parameters have to be stored before signup navigates away to the identity provider.'
---

Before any await: the desktop link's ad parameters have to be stored before signup navigates away to the identity provider.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/index.tsx](../../../../../../apps/web/src/index.tsx) | [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | Renders the shell | SolidJS |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/lib/analytics/posthog.tsx](../../../../../../apps/web/src/lib/analytics/posthog.tsx) | Identifies the member | PostHog |
| [apps/web/src/index.tsx](../../../../../../apps/web/src/index.tsx) | [apps/web/src/observability/browser.ts](../../../../../../apps/web/src/observability/browser.ts) | awaits browser observability | local module |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | routes every path | solid-router |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/features/channel/Call/CallContext.tsx](../../../../../../apps/web/src/features/channel/Call/CallContext.tsx) | provides call state | solid context |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/features/block-call/sidebar/incoming-calls.ts](../../../../../../apps/web/src/features/block-call/sidebar/incoming-calls.ts) | mounts incoming-call events | solid-js |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/features/meetings/meeting-session-provider.tsx](../../../../../../apps/web/src/features/meetings/meeting-session-provider.tsx) | provides meeting sessions | solid context |
| [apps/web/src/routes/Root.tsx](../../../../../../apps/web/src/routes/Root.tsx) | [apps/web/src/features/gtm-invite/usePendingInviteRedemption.ts](../../../../../../apps/web/src/features/gtm-invite/usePendingInviteRedemption.ts) | redeems pending invite | hook |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/activity/route-views.tsx](../../../../../../apps/web/src/features/activity/route-views.tsx) | lazy-loads activity pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/agents-view/route-views.tsx](../../../../../../apps/web/src/features/agents-view/route-views.tsx) | lazy-loads agents pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/block-call/route-views.tsx](../../../../../../apps/web/src/features/block-call/route-views.tsx) | lazy-loads call detail | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/calls-view/views/call-detail.tsx](../../../../../../apps/web/src/features/calls-view/views/call-detail.tsx) | lazy-loads calls call detail | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/notifications-inbox/route-views.tsx](../../../../../../apps/web/src/features/notifications-inbox/route-views.tsx) | lazy-loads notifications pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/block-pr/route-views.tsx](../../../../../../apps/web/src/features/block-pr/route-views.tsx) | lazy-loads PR detail | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/calendar-view/route-views.tsx](../../../../../../apps/web/src/features/calendar-view/route-views.tsx) | lazy-loads calendar pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/channels-view/channels-view.tsx](../../../../../../apps/web/src/features/channels-view/channels-view.tsx) | lazy-loads channel detail | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/channels-view/route-views.tsx](../../../../../../apps/web/src/features/channels-view/route-views.tsx) | lazy-loads channels pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/crm/route-views.tsx](../../../../../../apps/web/src/features/crm/route-views.tsx) | lazy-loads companies pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/drive-view/route-views.tsx](../../../../../../apps/web/src/features/drive-view/route-views.tsx) | lazy-loads drive pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/email-view/route-views.tsx](../../../../../../apps/web/src/features/email-view/route-views.tsx) | lazy-loads mail pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/meetings/meeting-router.tsx](../../../../../../apps/web/src/features/meetings/meeting-router.tsx) | lazy-loads meeting router | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/next-soup/route-views.tsx](../../../../../../apps/web/src/features/next-soup/route-views.tsx) | lazy-loads calls, folders, recent, search | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/reviews-view/route-views.tsx](../../../../../../apps/web/src/features/reviews-view/route-views.tsx) | lazy-loads reviews pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/settings/route-views.tsx](../../../../../../apps/web/src/features/settings/route-views.tsx) | lazy-loads settings pane | dynamic import |
| [apps/web/src/routes/lazy-route-views.ts](../../../../../../apps/web/src/routes/lazy-route-views.ts) | [apps/web/src/features/tasks-view/route-views.tsx](../../../../../../apps/web/src/features/tasks-view/route-views.tsx) | lazy-loads tasks and project panes | dynamic import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/home/route-views.tsx](../../../../../../apps/web/src/features/home/route-views.tsx) | mounts home pane | direct import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/scheduling/route-views.tsx](../../../../../../apps/web/src/features/scheduling/route-views.tsx) | lazy-loads booking links | dynamic import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/external-view/route-views.tsx](../../../../../../apps/web/src/features/external-view/route-views.tsx) | lazy-loads external pane | dynamic import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/system-status/views/SystemStatusDashboard.tsx](../../../../../../apps/web/src/features/system-status/views/SystemStatusDashboard.tsx) | lazy-loads staff status page | dynamic import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/account-manager/account-manager-page.tsx](../../../../../../apps/web/src/features/account-manager/account-manager-page.tsx) | lazy-loads grant page | dynamic import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/agent-setup/agent-setup-page.tsx](../../../../../../apps/web/src/features/agent-setup/agent-setup-page.tsx) | lazy-loads agent setup | dynamic import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/auth/auth.tsx](../../../../../../apps/web/src/features/auth/auth.tsx) | mounts agent and mobile signup | direct import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/team-invitations/TeamInviteAcceptance.tsx](../../../../../../apps/web/src/features/team-invitations/TeamInviteAcceptance.tsx) | mounts team invite page | direct import |
| [apps/web/src/routes/app-router-view.tsx](../../../../../../apps/web/src/routes/app-router-view.tsx) | [apps/web/src/features/channel-invitations/ChannelInviteAcceptance.tsx](../../../../../../apps/web/src/features/channel-invitations/ChannelInviteAcceptance.tsx) | mounts channel invite page | direct import |
