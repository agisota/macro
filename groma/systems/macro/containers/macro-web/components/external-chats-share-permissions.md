---
type: C4 Component
title: Share permissions
status: stable
groma:
  id: external-chats-share-permissions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/external-chats/share-permissions.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/external-chats/index.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/external-chats/sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/external-chats/keys.ts
      symbol: externalChatsKeys
  technology: SolidJS
description: Decoded chat operations. Production decodes generated DSS types before this seam.
---

Decoded chat operations. Production decodes generated DSS types before this seam.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/queries/external-chats/index.ts](../../../../../../apps/web/src/lib/queries/external-chats/index.ts) | [apps/web/src/features/external-chat/queries/production-api.ts](../../../../../../apps/web/src/features/external-chat/queries/production-api.ts) | Invokes supplied callbacks: delivery, detail, messages | typescript |
