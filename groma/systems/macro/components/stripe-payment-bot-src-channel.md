---
type: C4 Component
title: Stripe payment bot
status: stable
groma:
  id: stripe-payment-bot-src-channel
  parent: macro
  code:
    - scanner: typescript
      file: services/bots/stripe-payment-bot/src/channel.ts
    - scanner: typescript
      file: services/bots/stripe-payment-bot/src/worker.ts
    - scanner: typescript
      file: services/bots/stripe-payment-bot/src/notification.ts
    - scanner: typescript
      file: services/bots/anthropic-status-bot/src/worker.ts
    - scanner: typescript
      file: services/bots/goalert-bot/src/worker.ts
  technology: Cloudflare Workers
  group: Service helpers
description: Posts Stripe payment events into Macro channels
---

Verifies Stripe webhooks and posts a notice through the Macro SDK to every channel the bot belongs to.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [services/bots/stripe-payment-bot/src/worker.ts](../../../../services/bots/stripe-payment-bot/src/worker.ts) | [stripe](../../../externals/stripe.md) | Verifies payment webhooks | HTTPS |
