---
type: C4 Component
title: RecipientMenuContent
status: stable
groma:
  id: recipientmenucontent
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/RecipientMenuContent.tsx
      symbol: RecipientMenuContent
  technology: SolidJS
description: RecipientMenuContent inside the signed-in client.
---

Kobalte's default dismissal schedules a second close. It can arrive after the user refocuses and types a new query, cancelling the new window.
