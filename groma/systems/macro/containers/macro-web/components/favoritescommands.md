---
type: C4 Component
title: Command FavoritesCommands
status: stable
groma:
  id: favoritescommands
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/command/FavoritesCommands.tsx
    - scanner: typescript
      file: apps/web/src/features/command/mobile/MobileSearchInput.tsx
      symbol: MobileSearchInput
  technology: SolidJS
description: Command-K menu and create launcher.
---

`CommandMenu.tsx` imports CRM contact discovery, analytics, hotkey registration, and database discovery sync. `AppChrome` mounts `CommandMenu`, `FavoritesCommands`, and `Launcher` for an authenticated desktop session (`Layout.tsx:7-13`, `Layout.tsx:304`, `Layout.tsx:389`). `tutorial` imports `CommandState` from this feature (`tutorial/InteractiveOnboarding.tsx:2`).
