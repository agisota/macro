---
type: C4 Component
title: Agent interactions
status: stable
groma:
  id: permissioncard
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/components/PermissionCard.tsx
      symbol: PermissionCard
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/components/PermissionOptions.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/components/ElicitationForm.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts
      symbol: createInteractionController
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/state/elicitation-review-sink.ts
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/components/LiveElicitation.tsx
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/components/InteractionCard.tsx
      symbol: InteractionCard
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/context/interaction.ts
    - scanner: typescript
      file: apps/web/src/features/agent-interactions/state/elicitation-form.ts
  technology: SolidJS
  group: Agents
description: Permission and elicitation cards for a live session.
---

The controller guards the gap before a worker fold's optimistic update reaches every surface, while leaving the request outcome in the fold. Answering requires `canEdit()`. `agent-updates` imports this controller (`agent-updates/primitives/create-agent-updates.ts:1`).

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts](../../../../../../apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts) | [apps/web/src/features/agent-activity/agent-typing.tsx](../../../../../../apps/web/src/features/agent-activity/agent-typing.tsx) | Invokes supplied callbacks: issue, onFailure, sessionId | typescript |
| [apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts](../../../../../../apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts) | [apps/web/src/features/agent-updates/primitives/create-agent-updates.ts](../../../../../../apps/web/src/features/agent-updates/primitives/create-agent-updates.ts) | Invokes supplied callbacks: canEdit, issue, sessionId | typescript |
| [apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts](../../../../../../apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts) | [apps/web/src/features/block-agent/agent-session-provider.tsx](../../../../../../apps/web/src/features/block-agent/agent-session-provider.tsx) | Invokes supplied callbacks: canEdit, pending | typescript |
| [apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts](../../../../../../apps/web/src/features/agent-interactions/primitives/create-interaction-controller.ts) | [apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/create-magic-chip-model.ts](../../../../../../apps/web/src/lib/core/component/LexicalMarkdown/component/decorator/MagicChip/create-magic-chip-model.ts) | Invokes supplied callbacks: issue, pending, sessionId | typescript |
