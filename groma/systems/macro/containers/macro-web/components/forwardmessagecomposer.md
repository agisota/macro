---
type: C4 Component
title: Web module
status: stable
groma:
  id: forwardmessagecomposer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/ForwardMessageComposer.tsx
  technology: SolidJS
description: Part of the signed-in client
---

Source under apps/web/src/lib/core/component/ForwardMessageComposer.tsx.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/component/ForwardMessageComposer.tsx](../../../../../../apps/web/src/lib/core/component/ForwardMessageComposer.tsx) | [apps/web/src/lib/core/component/ForwardToChannel.tsx](../../../../../../apps/web/src/lib/core/component/ForwardToChannel.tsx) | Invokes supplied callback: uploadFile | typescript |
