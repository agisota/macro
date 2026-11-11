---
type: C4 Component
title: Channel webhook
status: stable
groma:
  id: channel-webhook
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/examples/channel-webhook.ts
  technology: TypeScript
description: Shared package sdk
---

Post to a channel using a webhook token copied out of the Macro web UI.  The token is an ordinary bot token, so this is just `channel.send()` — the SDK works out that the credential can only reach the webhook endpoint and routes there. Mentions still land, because `msg` embeds `<
