---
type: C4 Component
title: Email message
status: stable
groma:
  id: invitation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-message/browser-test/invitation.tsx
  technology: SolidJS
description: Per-message attachment and render adapters.
---

The adapter maps an attachment MIME to a block name through `fileTypeToBlockName`, falling back to `unknown`, and downloads bytes from the email attachment URL. `email-thread` imports this adapter plus message rendering, sender icon, and calendar-invitation types (`email-thread/email-thread.tsx:14-28`). This directory is the message body layer, not the thread list.
