---
type: C4 Component
title: Status bot
status: stable
groma:
  id: anthropic-status-bot-src-format
  parent: dev
  code:
    - scanner: typescript
      file: services/bots/anthropic-status-bot/src/format.ts
    - scanner: typescript
      file: services/bots/anthropic-status-bot/src/server.ts
    - scanner: typescript
      file: services/bots/anthropic-status-bot/src/statuspage.ts
    - scanner: typescript
      file: services/bots/anthropic-status-bot/src/channel.ts
    - scanner: typescript
      file: services/bots/anthropic-status-bot/src/index.ts
  technology: Cloudflare Workers
description: Forwards Claude status updates into one channel
---

Accepts Atlassian Statuspage webhooks from status.claude.com and formats incident updates.
