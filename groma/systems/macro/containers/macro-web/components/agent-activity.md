---
type: C4 Component
title: Agent activity
status: stable
groma:
  id: agent-activity
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-activity/agent-activity.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-activity/components/presented-view.tsx
      symbol: PresentedView
    - scanner: typescript
      file: apps/web/src/features/agent-activity/agent-typing.tsx
      symbol: AgentTyping
    - scanner: typescript
      file: apps/web/src/features/agent-activity/components/activity-rows.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-activity/components/typing-row.tsx
      symbol: TypingRow
    - scanner: typescript
      file: apps/web/src/features/agent-activity/core/live-reply.ts
    - scanner: typescript
      file: apps/web/src/features/agent-activity/debug/ProgressPlayground.tsx
      symbol: ProgressPlayground
    - scanner: typescript
      file: apps/web/src/features/agent-activity/components/live-tail.tsx
      symbol: LiveTail
    - scanner: typescript
      file: apps/web/src/features/agent-activity/queries/live-session.ts
    - scanner: typescript
      file: apps/web/src/features/agent-activity/components/activity-line.tsx
      symbol: ActivityLine
    - scanner: typescript
      file: apps/web/src/features/agent-activity/components/activity-summary.tsx
      symbol: ActivitySummary
    - scanner: typescript
      file: apps/web/src/features/agent-activity/queries/code-activity.ts
      symbol: createCodeActivityRows
  technology: SolidJS
  group: Agents
description: Live and sealed agent activity rows in a message.
---

While a run is open it is one shimmering line naming the current step, live from the session fold. Once sealed, or for a viewer who cannot read the session, the server snapshot in the message keeps status and label. Raw commands and tool-input details are only in the authorized live session view.
