---
type: C4 Component
title: MacrodPairingApprover
status: stable
groma:
  id: macrodpairingapprover
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/tauri/MacrodPairingApprover.tsx
      symbol: MacrodPairingApprover
  technology: SolidJS
  group: Desktop shell
description: Approves every pairing code the bundled macrod daemon opens, with the signed-in session, wherever the user is in the app
---

Approves every pairing code the bundled macrod daemon opens, with the signed-in session, wherever the user is in the app. The daemon re-pairs on its own (an expired credential, a supervisor restart), and nobody types a code on the desktop app, so approval cannot wait for Settings to be open. Mounted by `LocalRuntimeHost`.
