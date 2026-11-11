---
type: C4 Component
title: CreateFindBarController
status: stable
groma:
  id: createfindbarcontroller
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/createFindBarController.ts
  technology: SolidJS
description: CreateFindBarController inside the signed-in client.
---

When false, `previous()` stops at index 1. Defaults to true.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/core/component/createFindBarController.ts](../../../../../../apps/web/src/lib/core/component/createFindBarController.ts) | [apps/web/src/features/channel/Channel/create-channel-find-bar.ts](../../../../../../apps/web/src/features/channel/Channel/create-channel-find-bar.ts) | Invokes supplied callback: onBeforeSubmit | typescript |
