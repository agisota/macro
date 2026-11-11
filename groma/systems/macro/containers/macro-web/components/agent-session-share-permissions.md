---
type: C4 Component
title: Agent session share permissions
status: stable
groma:
  id: agent-session-share-permissions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/share-permissions.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/mention-types.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/graphql-mentions.ts
      symbol: createGraphqlAgentSessionMentionPreview
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/session.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/mentions.ts
      symbol: useAgentSessionMentionPreview
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/subscription.ts
      symbol: useAgentSessionSubscription
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/warm.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/realtime-protocol.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/preview.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/changes-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/changes.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/mention-batcher.ts
      symbol: createAgentSessionMentionBatcher
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/auto-archive.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/list-sync.ts
      symbol: refreshAgentSessionLists
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/session-metadata-sync.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/log.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/pull-requests.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/code-execution.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/keys.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/app-connections.ts
      symbol: reportAgentSessionAppConnected
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/tool-approvals.ts
      symbol: answerAgentSessionToolApproval
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/entity-mutations.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/mention-fetchers.ts
    - scanner: typescript
      file: apps/web/src/lib/queries/agent-session/queue-sync.ts
  technology: SolidJS
description: Share permissions inside the signed-in client.
---

The shared share dialog owns loading and refreshing these permissions.
