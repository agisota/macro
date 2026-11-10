---
type: C4 Component
title: Agent work
status: stable
groma:
  id: create-registered-work
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-work/primitives/create-registered-work.ts
      symbol: createRegisteredWork
    - scanner: typescript
      file: apps/web/src/features/agent-work/views/use-work-client.ts
      symbol: useWorkClient
    - scanner: typescript
      file: apps/web/src/features/agent-work/components/WorkIdentity.tsx
      symbol: WorkIdentity
    - scanner: typescript
      file: apps/web/src/features/agent-work/components/WorkList.tsx
      symbol: WorkList
    - scanner: typescript
      file: apps/web/src/features/agent-work/core/work-visibility.ts
    - scanner: typescript
      file: apps/web/src/features/agent-work/primitives/create-work-arrivals.ts
      symbol: createWorkArrivals
    - scanner: typescript
      file: apps/web/src/features/agent-work/views/call-work.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-work/views/open-work-item.ts
      symbol: useOpenWorkItem
    - scanner: typescript
      file: apps/web/src/features/agent-work/core/work-item.ts
    - scanner: typescript
      file: apps/web/src/features/agent-work/views/dm-work.tsx
  technology: SolidJS
  group: Agents
description: Work list items for running, blocked, failed, and idle sessions.
---

`WorkItem` carries a registration id, account id, session id, title, and state (`running`, `needs_input`, `failed`, `idle`). State is derived from the session turn. The file imports `parseGithubPrUrl` from `block-pr` so a linked pull request number can be shown. Views for DM work and call work were not opened.

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/agent-work/core/work-item.ts](../../../../../../apps/web/src/features/agent-work/core/work-item.ts) | [apps/web/src/features/block-pr/util/prKey.ts](../../../../../../apps/web/src/features/block-pr/util/prKey.ts) | parses a GitHub PR URL | function import |

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/agent-work/primitives/create-registered-work.ts](../../../../../../apps/web/src/features/agent-work/primitives/create-registered-work.ts) | [apps/web/src/lib/service-clients/service-storage/graphql-soup.ts](../../../../../../apps/web/src/lib/service-clients/service-storage/graphql-soup.ts) | Invokes supplied callback: onReconnected | typescript |
| [apps/web/src/features/agent-work/views/call-work.tsx](../../../../../../apps/web/src/features/agent-work/views/call-work.tsx) | [apps/web/src/features/channel/Call/CallOverlay.tsx](../../../../../../apps/web/src/features/channel/Call/CallOverlay.tsx) | Invokes supplied callback: accountIds | typescript |
