---
type: C4 Component
title: Command create call command
status: stable
groma:
  id: create-call-command
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/command/create-call-command.ts
      symbol: createCallCommand
    - scanner: typescript
      file: apps/web/src/features/command/CommandMenu.tsx
    - scanner: typescript
      file: apps/web/src/features/command/useCommandItems.ts
    - scanner: typescript
      file: apps/web/src/features/command/Launcher.tsx
    - scanner: typescript
      file: apps/web/src/features/command/mobile/MobileSearchResults.tsx
      symbol: MobileSearchResults
    - scanner: typescript
      file: apps/web/src/features/command/debug/CreateMenuDemo.tsx
      symbol: CreateMenuDemo
    - scanner: typescript
      file: apps/web/src/features/command/project-items.ts
    - scanner: typescript
      file: apps/web/src/features/command/rank-command-search-items.ts
      symbol: rankCommandSearchItems
    - scanner: typescript
      file: apps/web/src/features/command/core/creatable.ts
    - scanner: typescript
      file: apps/web/src/features/command/components/LauncherDetails.tsx
      symbol: LauncherDetails
    - scanner: typescript
      file: apps/web/src/features/command/context/create-context.tsx
    - scanner: typescript
      file: apps/web/src/features/command/core/universal-input-mode.ts
      symbol: shouldUseUniversalInput
    - scanner: typescript
      file: apps/web/src/features/command/mobile/mobile-search-route-state.ts
    - scanner: typescript
      file: apps/web/src/features/command/state.ts
    - scanner: typescript
      file: apps/web/src/features/command/mobile/MobileCreateSheet.tsx
      symbol: MobileCreateSheet
    - scanner: typescript
      file: apps/web/src/features/command/contact-items.ts
    - scanner: typescript
      file: apps/web/src/features/command/mobile/create-search-pagination.ts
      symbol: createSearchPagination
    - scanner: typescript
      file: apps/web/src/features/command/components/CarouselCards.tsx
      symbol: CarouselCards
    - scanner: typescript
      file: apps/web/src/features/command/mobile/create-mobile-search-entry.ts
      symbol: createMobileSearchEntry
    - scanner: typescript
      file: apps/web/src/features/command/CommandItem.tsx
    - scanner: typescript
      file: apps/web/src/features/command/mobile/mobileSearchState.ts
    - scanner: typescript
      file: apps/web/src/features/command/components/CreateMenuPreview.tsx
      symbol: CreateMenuPreview
    - scanner: typescript
      file: apps/web/src/features/command/views/command-results.tsx
      symbol: CommandResults
    - scanner: typescript
      file: apps/web/src/features/command/sidebar/sidebar-create-menu.tsx
    - scanner: typescript
      file: apps/web/src/features/command/open-command-result.ts
      symbol: createCommandResultOpener
    - scanner: typescript
      file: apps/web/src/features/command/core/launcher-history.ts
    - scanner: typescript
      file: apps/web/src/features/command/sidebar/tour.ts
      symbol: APP_TOUR
    - scanner: typescript
      file: apps/web/src/features/command/category-search-filters.ts
      symbol: getCategorySearchFilters
    - scanner: typescript
      file: apps/web/src/features/command/mobile/create-search-result-window.ts
      symbol: createSearchResultWindow
    - scanner: typescript
      file: apps/web/src/features/command/CarouselLauncher.tsx
      symbol: CarouselLauncher
    - scanner: typescript
      file: apps/web/src/features/command/types.ts
    - scanner: typescript
      file: apps/web/src/features/command/queries/entity-search.ts
    - scanner: typescript
      file: apps/web/src/features/command/queries/mobile-full-text-search.ts
      symbol: createMobileFullTextSearch
    - scanner: typescript
      file: apps/web/src/features/command/view-create-menu.tsx
      symbol: ViewCreateMenu
    - scanner: typescript
      file: apps/web/src/features/command/components/CreateMenuAction.tsx
      symbol: CreateMenuAction
    - scanner: typescript
      file: apps/web/src/features/command/core/create-menu-details.ts
    - scanner: typescript
      file: apps/web/src/features/command/mobile/create-search-scroll-restoration.ts
      symbol: createSearchScrollRestoration
    - scanner: typescript
      file: apps/web/src/features/command/core/default-result-index.ts
      symbol: defaultCommandResultIndex
    - scanner: typescript
      file: apps/web/src/features/command/DetailsLauncher.tsx
      symbol: DetailsLauncher
    - scanner: typescript
      file: apps/web/src/features/command/recency.ts
    - scanner: typescript
      file: apps/web/src/features/command/index.ts
    - scanner: typescript
      file: apps/web/src/features/command/mobile/use-mobile-search-category.ts
      symbol: useMobileSearchCategory
  technology: SolidJS
description: Command-K menu and create launcher.
---

`CommandMenu.tsx` imports CRM contact discovery, analytics, hotkey registration, and database discovery sync. `AppChrome` mounts `CommandMenu`, `FavoritesCommands`, and `Launcher` for an authenticated desktop session (`Layout.tsx:7-13`, `Layout.tsx:304`, `Layout.tsx:389`). `tutorial` imports `CommandState` from this feature (`tutorial/InteractiveOnboarding.tsx:2`).

## Relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/command/CommandMenu.tsx](../../../../../../apps/web/src/features/command/CommandMenu.tsx) | [apps/web/src/features/crm/record-adapter.ts](../../../../../../apps/web/src/features/crm/record-adapter.ts) | discovers CRM contacts | hook import |

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/features/command/queries/entity-search.ts](../../../../../../apps/web/src/features/command/queries/entity-search.ts) | [apps/web/src/features/crm/record-adapter.ts](../../../../../../apps/web/src/features/crm/record-adapter.ts) | Invokes supplied callback: contactDiscovery | typescript |
