---
type: C4 Component
title: Browser test focus rows
status: stable
groma:
  id: focus-rows
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-view/browser-test/focus-rows.tsx
  technology: SolidJS
description: Inbox list, reader, saved views, and mail route host.
---

`AGENTS.md` describes the desktop sidebar and header, mobile pills and filter drawer, the Soup-backed thread list, and saved email views behind `enable-email-saved-views`. `EmailView` composes `EmailList`, `EmailReader`, `EmailSidebar`, and saved-view pickers, and reads saved views from `saved-views`. The mail pane route lazy-loads this feature (`lazy-route-views.ts:66-76`): compose is `EmailComposeRouteView`, a thread is `EmailDetailRouteView`, and the list is `MailRouteView`.
