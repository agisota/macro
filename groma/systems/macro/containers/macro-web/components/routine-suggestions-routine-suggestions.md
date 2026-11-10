---
type: C4 Component
title: Routine suggestions
status: stable
groma:
  id: routine-suggestions-routine-suggestions
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/routine-suggestions.tsx
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/views/suggestion-list-view.tsx
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/primitives/suggestion-actions.ts
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/components/suggestion-card.tsx
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/components/routine-suggestion-list.tsx
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/core/suggestions.ts
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/components/routine-suggestions-card.tsx
      symbol: RoutineSuggestionsCard
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/queries/routine-suggestions.ts
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/components/routine-spark-glyph.tsx
      symbol: RoutineSparkGlyph
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/primitives/discover-seen.ts
      symbol: createDiscoverSeen
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/components/routine-suggestions-dialog.tsx
      symbol: RoutineSuggestionsDialog
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/queries/keys.ts
      symbol: routineSuggestionKeys
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/core/surfaces.ts
    - scanner: typescript
      file: apps/web/src/features/routine-suggestions/core/discover.ts
  technology: SolidJS
  group: Agents
description: Sidebar suggestions and starter templates for routines.
---

The file imports promotion visibility, routine code-step and starter-template flags, and the `RoutineSuggestion` schema. `routines-page.tsx` calls `useRoutinesDiscover` from this feature. Suggestion cards and template activation were not opened beyond those imports.
