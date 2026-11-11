---
type: C4 Component
title: Video tutorials
status: stable
groma:
  id: video-tutorials-index
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/index.ts
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/primitives/create-support-link.ts
      symbol: createSupportLink
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/primitives/create-tutorial-state.ts
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/views/BlockTutorial.tsx
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/components/TutorialShelf.tsx
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/catalog.ts
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/core/support-channel.ts
      symbol: findSupportChannelId
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/components/TutorialEntries.tsx
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/core/presenter.ts
      symbol: TUTORIAL_PRESENTER
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/components/TutorialVideoDialog.tsx
      symbol: TutorialVideoDialog
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/components/TutorialSupportLip.tsx
      symbol: TutorialSupportLip
    - scanner: typescript
      file: apps/web/src/features/video-tutorials/core/tutorial-id.ts
  technology: SolidJS
  group: Shell
description: Tutorial catalog and embeddable tutorial rows.
---

The catalog imports mp4/poster pairs for agents, calendar, calls, canvas, chat, CRM, databases, docs, drive, GitHub, home, macrod, mail, and scheduling. The index exports `TutorialPill`, `TutorialRow`, and `TutorialSidebarItem`. `tasks-view` imports `TutorialRow` (`tasks-view/tasks-view.tsx:9`). `channels-view` and `external-view` import tutorial pills or sidebar items.
