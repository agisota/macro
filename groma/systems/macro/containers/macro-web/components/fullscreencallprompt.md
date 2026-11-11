---
type: C4 Component
title: FullScreenCallPrompt
status: stable
groma:
  id: fullscreencallprompt
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/channel/Call/FullScreenCallPrompt.tsx
      symbol: FullScreenCallPrompt
    - scanner: typescript
      file: apps/web/src/features/channel/Call/call-exit.ts
      symbol: getCallExitPath
  technology: SolidJS
  group: Messages
description: Channel message surface, calls, and create-channel modal.
---

`CreateChannelModal` is mounted by `AppChrome` for an authenticated member (`Layout.tsx:316`). `Root.tsx` mounts `CallProvider`, `CallKitSync`, `CallStartedNotifier`, and `FullScreenCallPrompt` from this feature's `Call` folder (`Root.tsx:14-17`, `Root.tsx:233-240`). External chat reuses channel input and message components but not channel queries (`external-chat/AGENTS.md`, opened). Alias `@channel` points here.
