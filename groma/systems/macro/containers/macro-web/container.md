---
type: C4 Container
title: Web client
status: stable
groma:
  id: macro-web
  parent: macro
  technology: SolidJS, Vite, Tauri
description: Signed-in workspace UI
---

SolidJS application in apps/web. index.tsx boots it and Root mounts the shared frame: session, channels, calls, and the router. The same UI is packaged with Tauri for desktop. It calls Macro hosts through service clients and does not embed the Rust services.
