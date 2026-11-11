---
type: C4 Component
title: Chat ChatWithAgentButton
status: stable
groma:
  id: chatwithagentbutton
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/chat/ChatWithAgentButton.tsx
    - scanner: typescript
      file: apps/web/src/features/chat/SoupChatInput.tsx
      symbol: SoupChatInput
  technology: SolidJS
  group: Messages
description: '"Chat with agent" handoff, not the channel transcript.'
---

`ChatWithAgentButton.tsx` imports agent route ids and the composer opener from `agents-view`, and `startPendingSession` from `block-agent`. Entity types it accepts include email, document, project, and channel. `block-pptx` and `block-write` import `ChatWithAgentButton` (`block-pptx/pptx-block.tsx:7`, `block-write/DocxBlock.tsx:1`). `scheduling` imports `openChatWithInput` from the same file (`scheduling/scheduling.tsx:2`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/chat/ChatWithAgentButton.tsx](../../../../../../apps/web/src/features/chat/ChatWithAgentButton.tsx) | [apps/web/src/features/block-agent/context/pending-session.ts](../../../../../../apps/web/src/features/block-agent/context/pending-session.ts) | starts a pending session | function import |
