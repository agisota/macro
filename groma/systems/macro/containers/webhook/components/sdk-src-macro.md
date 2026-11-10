---
type: C4 Component
title: Macro SDK
status: stable
groma:
  id: sdk-src-macro
  parent: webhook
  code:
    - scanner: typescript
      file: packages/sdk/src/macro.ts
      symbol: Macro
  technology: TypeScript
description: Public TypeScript client for Macro hosts
---

Macro class wraps generated HeyAPI clients for auth, storage, email, calendar, and cognition. Credentials are one of an API key, a bot token, or a bearer session.
