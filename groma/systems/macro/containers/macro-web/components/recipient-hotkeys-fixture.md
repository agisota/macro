---
type: C4 Component
title: Browser test recipient hotkeys fixture
status: stable
groma:
  id: recipient-hotkeys-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/recipient-hotkeys-fixture.tsx
    - scanner: typescript
      file: apps/web/src/features/email-message/tests/messages.ts
      symbol: message
  technology: SolidJS
description: Route-backed new email composer.
---

`EmailCompose` creates a compose context, a route draft, and a route host, then renders `EmailComposeView`. The draft id prefers the route over props because a moved draft lives only in the URL. `email-thread` imports the same compose context and host when a thread needs a reply composer (`email-thread/email-thread.tsx:12-13`).
