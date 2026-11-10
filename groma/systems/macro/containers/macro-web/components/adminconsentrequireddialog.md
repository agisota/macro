---
type: C4 Component
title: Inbox
status: stable
groma:
  id: adminconsentrequireddialog
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/inbox/AdminConsentRequiredDialog.tsx
      symbol: AdminConsentRequiredDialog
    - scanner: typescript
      file: apps/web/src/features/inbox/AddInboxDialog.tsx
    - scanner: typescript
      file: apps/web/src/features/inbox/ShareInboxConflictDialog.tsx
  technology: SolidJS
  group: Email
description: Add-inbox, admin-consent, and share-conflict dialogs.
---

`openAddInboxDialog` is a root-level signal so the dialog does not depend on the settings surface. Entitlement is enforced by the backend: `POST /link/gmail` answers 402, and `useAddInboxFlow` maps that to the multi-inbox paywall. `Layout.tsx` mounts `AddInboxDialog` when that signal is open (`Layout.tsx:327-328`). `Root.tsx` mounts `GlobalShareInboxConflictDialog` (`Root.tsx:236`).
