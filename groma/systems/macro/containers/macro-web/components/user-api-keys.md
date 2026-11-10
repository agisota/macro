---
type: C4 Component
title: User api keys
status: stable
groma:
  id: user-api-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/user-api-keys/user-api-keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/user-api-keys/name.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/user-api-keys/keys.ts
      symbol: userApiKeyKeys
  technology: SolidJS
description: Matches `user_api_key::domain::models::MAX_KEY_NAME_LEN`. Matches `user_api_key::domain::service::MAX_KEYS_PER_USER`.
---

Matches `user_api_key::domain::models::MAX_KEY_NAME_LEN`. Matches `user_api_key::domain::service::MAX_KEYS_PER_USER`.
