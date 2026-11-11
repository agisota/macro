---
type: C4 Component
title: MailtoComposerHandler
status: stable
groma:
  id: mailtocomposerhandler
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/app/mailtoComposerHandler.ts
      symbol: registerMailtoComposerHandler
  technology: SolidJS
  group: App shell
description: Opens a `mailto:` URL in the in-app email composer, prefilling the recipients
---

Opens a `mailto:` URL in the in-app email composer, prefilling the recipients. Returns false — so `openExternalUrl` falls through to opening the URL normally (the OS mail client) — when the URL isn't a mailto or the split manager isn't ready yet.
