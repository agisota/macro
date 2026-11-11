---
type: C4 Component
title: Call thread
status: stable
groma:
  id: call-thread
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/channel/Call/discussion/browser-test/call-thread.tsx
  technology: SolidJS
description: Channel message surface, calls, and create-channel modal.
---

`CreateChannelModal` is mounted by `AppChrome` for an authenticated member (`Layout.tsx:316`). `Root.tsx` mounts `CallProvider`, `CallKitSync`, `CallStartedNotifier`, and `FullScreenCallPrompt` from this feature's `Call` folder (`Root.tsx:14-17`, `Root.tsx:233-240`). External chat reuses channel input and message components but not channel queries (`external-chat/AGENTS.md`, opened). Alias `@channel` points here.
