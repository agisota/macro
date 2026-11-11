---
type: C4 Component
title: Native update preparation
status: stable
groma:
  id: native-update-preparation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/native-update-preparation.ts
      symbol: createNativeUpdatePreparation
  technology: SolidJS
description: Native update preparation inside the signed-in client.
---

Owned by one Tauri provider; editors register saves while they are mounted.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/lib/tauri/native-update-preparation.ts](../../../../../../apps/web/src/lib/tauri/native-update-preparation.ts) | [apps/web/src/lib/core/util/reloadForNewerBuild.ts](../../../../../../apps/web/src/lib/core/util/reloadForNewerBuild.ts) | Invokes supplied callback: isBlocked | typescript |
