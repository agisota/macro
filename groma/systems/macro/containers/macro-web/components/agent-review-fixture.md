---
type: C4 Component
title: Browser test agent review fixture
status: stable
groma:
  id: agent-review-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/email-compose/browser-test/agent-review-fixture.tsx
  technology: SolidJS
  group: Development tooling
description: Route-backed new email composer.
---

`EmailCompose` creates a compose context, a route draft, and a route host, then renders `EmailComposeView`. The draft id prefers the route over props because a moved draft lives only in the URL. `email-thread` imports the same compose context and host when a thread needs a reply composer (`email-thread/email-thread.tsx:12-13`).
