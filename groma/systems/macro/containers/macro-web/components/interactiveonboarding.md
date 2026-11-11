---
type: C4 Component
title: Tutorial
status: stable
groma:
  id: interactiveonboarding
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/tutorial/InteractiveOnboarding.tsx
      symbol: InteractiveOnboarding
    - scanner: typescript
      file: apps/web/src/features/tutorial/create-onboarding-state.ts
      symbol: createOnboardingState
    - scanner: typescript
      file: apps/web/src/features/tutorial/components-lib.tsx
    - scanner: typescript
      file: apps/web/src/features/tutorial/components/MockAppChrome.tsx
      symbol: MockAppChrome
    - scanner: typescript
      file: apps/web/src/features/tutorial/lessons/markdown-mentions.tsx
      symbol: markdownMentionsLesson
    - scanner: typescript
      file: apps/web/src/features/tutorial/lessons/index.ts
      symbol: LESSONS
    - scanner: typescript
      file: apps/web/src/features/tutorial/use-list-navigation.ts
      symbol: useListNavigation
    - scanner: typescript
      file: apps/web/src/features/tutorial/OnboardingEntityList.tsx
      symbol: OnboardingEntityList
    - scanner: typescript
      file: apps/web/src/features/tutorial/types.ts
    - scanner: typescript
      file: apps/web/src/features/tutorial/lessons/command-k.tsx
    - scanner: typescript
      file: apps/web/src/features/tutorial/lessons/sidebar-nav.tsx
      symbol: sidebarNavLesson
    - scanner: typescript
      file: apps/web/src/features/tutorial/OnboardingProgress.tsx
      symbol: OnboardingProgress
    - scanner: typescript
      file: apps/web/src/features/tutorial/onboarding-context.tsx
    - scanner: typescript
      file: apps/web/src/features/tutorial/sandbox/sandbox-store.ts
    - scanner: typescript
      file: apps/web/src/features/tutorial/InteractiveOnboardingModal.tsx
      symbol: InteractiveOnboardingModal
    - scanner: typescript
      file: apps/web/src/features/tutorial/lessons/create-entity.tsx
      symbol: createEntityLesson
  technology: SolidJS
  group: Shell
description: Interactive onboarding modal and sandbox lessons.
---

The component tracks tutorial completion, registers hotkeys, and can ignore an already-completed tutorial. It imports `CommandState` from `command`. `InitialInteractiveOnboardingModal` is imported by `Layout.tsx` from the app components folder, not shown mounted in the ranges opened. This is separate from `onboarding`, which is the signed-in setup flow.
