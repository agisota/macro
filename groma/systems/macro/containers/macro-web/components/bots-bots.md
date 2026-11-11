---
type: C4 Component
title: Bots
status: stable
groma:
  id: bots-bots
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/bots/bots.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/bots/first-party-bot-name.ts
      symbol: firstPartyBotName
    - scanner: typescript
      file: apps/web/src/lib/queries/bots/keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/bots/profiles.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/bots/bot-id.ts
      symbol: isHexHyphenatedId
  technology: SolidJS
description: Bots inside the signed-in client.
---

PATCH /bots/{bot_id} leaves every omitted field unchanged.
