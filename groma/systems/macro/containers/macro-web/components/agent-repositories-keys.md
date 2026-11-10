---
type: C4 Component
title: Keys
status: stable
groma:
  id: agent-repositories-keys
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-repositories/keys.ts
      symbol: agentRepositoryKeys
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-repositories/repositories.ts
      symbol: useAgentRepositoriesQuery
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-repositories/branches.ts
      symbol: useAgentRepositoryBranchesQuery
  technology: SolidJS
description: 'The GitHub repositories the signed-in user can hand a coding session: every repository under an installation of Macro''s GitHub App they or their teams made. The'
---

The GitHub repositories the signed-in user can hand a coding session: every repository under an installation of Macro's GitHub App they or their teams made. The same list the create-session API authorizes an explicit repository against, so what a picker offers is exactly what a session may select.  Kept fresh for a while: the harness caches the listing for ten minutes itself, and installing the App somewhere new is rare and deliberate.
