---
type: C4 Component
title: Email view
status: stable
groma:
  id: email-view
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-view/email-view.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailRowActions.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailFilterFields.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/inbox-selection.ts
      symbol: normalizeInboxSelection
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/advance-empty-alias-pages.ts
      symbol: advanceEmptyAliasPages
    - scanner: typescript
      file: apps/web/src/features/email-view/focus-due.ts
      symbol: emailFocusDue
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/use-reminder-email-source.ts
      symbol: useReminderEmailSource
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailFilterDrawer.tsx
      symbol: EmailFilterDrawer
    - scanner: typescript
      file: apps/web/src/features/email-view/tab-availability.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/email-results.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/route-views.tsx
      symbol: MailRouteView
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailControls.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/use-email-list-hotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/use-reading-pane-list-width.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/views/email-saved-views.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/types.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailHeader.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/primitives/inbox-selection-reconciliation.ts
      symbol: createInboxSelectionReconciliation
    - scanner: typescript
      file: apps/web/src/features/email-view/use-email-view-hotkeys.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/email-view-context.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailSavedViewFields.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/email-view-skeleton.tsx
      symbol: EmailViewSkeleton
    - scanner: typescript
      file: apps/web/src/features/email-view/tour.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailSidebar.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/tabs.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/use-email-query.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/persistence.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailEmptyState.tsx
      symbol: EmailEmptyState
    - scanner: typescript
      file: apps/web/src/features/email-view/constants.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/use-visible-email-tab.ts
      symbol: useVisibleEmailTab
    - scanner: typescript
      file: apps/web/src/features/email-view/filters/use-email-filters.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/use-email-saved-view-unread.ts
      symbol: useEmailSavedViewUnread
    - scanner: typescript
      file: apps/web/src/features/email-view/reader-pane.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/compose-email.ts
      symbol: composeEmail
    - scanner: typescript
      file: apps/web/src/features/email-view/primitives/row-action-state.ts
      symbol: createEmailRowActionState
    - scanner: typescript
      file: apps/web/src/features/email-view/filters/email-saved-view.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/primitives/folder-restore.ts
      symbol: createEmailFolderRestore
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/email-query.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/filters/email-facets.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/use-scheduled-email-source.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/email-route.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/primitives/scroll-anchor.ts
      symbol: createScrollAnchor
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/use-email-participant-suggestions.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/use-focus-email-source.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailList.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailDateGroupHeader.tsx
      symbol: EmailDateGroupHeader
    - scanner: typescript
      file: apps/web/src/features/email-view/use-reading-pane-hotkey.ts
      symbol: useReadingPaneHotkey
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailFocusBadges.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/primitives/create-email-saved-view-draft.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/email-search.ts
      symbol: buildEmailSearchRequest
    - scanner: typescript
      file: apps/web/src/features/email-view/queries/read-admission.ts
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailInboxSelector.tsx
    - scanner: typescript
      file: apps/web/src/features/email-view/components/EmailReader.tsx
      symbol: EmailReader
    - scanner: typescript
      file: apps/web/src/features/email-view/focus-reason.ts
      symbol: emailFocusReason
  technology: SolidJS
  group: Email
description: Inbox list, reader, saved views, and mail route host.
---

`AGENTS.md` describes the desktop sidebar and header, mobile pills and filter drawer, the Soup-backed thread list, and saved email views behind `enable-email-saved-views`. `EmailView` composes `EmailList`, `EmailReader`, `EmailSidebar`, and saved-view pickers, and reads saved views from `saved-views`. The mail pane route lazy-loads this feature (`lazy-route-views.ts:66-76`): compose is `EmailComposeRouteView`, a thread is `EmailDetailRouteView`, and the list is `MailRouteView`.
