---
type: C4 Component
title: Native auth
status: stable
groma:
  id: native-auth
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/auth/native-auth.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/index.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/push-registration-lifecycle.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/license.ts
      symbol: useHasPaidAccess
    - scanner: typescript
      file: apps/web/src/lib/core/auth/session-refresh.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/clear-composer-storage.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/logout.ts
    - scanner: typescript
      file: apps/web/src/lib/core/auth/useAuth.ts
      symbol: updateUserAuth
    - scanner: typescript
      file: apps/web/src/lib/core/auth/authorize-github.ts
  technology: SolidJS
description: Native auth inside the signed-in client.
---

Where the hosted flow sends the desktop app's session code. The deep-link bridge turns `macro:///login?token=...` into a `/login` router navigation, and that route redeems the code — so it is pinned here rather than derived from the page the user signed in from, which is usually
