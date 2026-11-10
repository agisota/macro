---
type: C4 Component
title: GoAlert bot
status: stable
groma:
  id: src-goalert
  parent: macro-dev
  code:
    - scanner: typescript
      file: services/bots/goalert-bot/src/goalert.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/traced.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/channel.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/index.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/format.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/store.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/server.ts
  technology: Cloudflare Workers
description: Posts GoAlert incidents into Macro
---

Receives GoAlert outgoing webhooks and opens one alerts thread per page, ack, or close.
