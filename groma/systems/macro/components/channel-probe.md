---
type: C4 Component
title: Channel probe
status: stable
groma:
  id: channel-probe
  parent: macro
  code:
    - scanner: typescript
      file: packages/sdk/examples/channel-probe.ts
  technology: TypeScript
  group: Macro SDK pieces
description: Probe which channel operations a bot API key can perform, acting as a user
---

Probe which channel operations a bot API key can perform, acting as a user. Tries: post message → react 😊 → thread reply, reporting each step.  Usage: MACRO_BOT_TOKEN=mbot_... bun examples/channel-probe.ts <channel-id> <acting-user-id>  The acting user must be a member of the channel (access is theirs; the message is attributed to the bot). Set MACRO_ENV for dev/prod/local.
