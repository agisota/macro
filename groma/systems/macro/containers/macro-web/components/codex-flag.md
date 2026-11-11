---
type: C4 Component
title: Codex flag
status: stable
groma:
  id: codex-flag
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/codex/flag.ts
      symbol: useCodexAgentsAccess
  technology: SolidJS
description: Flag inside the signed-in client.
---

Codex surfaces require both the agent rollout and the Codex rollout.
