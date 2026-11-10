---
type: C4 Component
title: Task composer
status: stable
groma:
  id: mobile-task-composer
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/task-composer/views/mobile-task-composer.tsx
      symbol: MobileTaskComposer
    - scanner: typescript
      file: apps/web/src/features/task-composer/core/types.ts
    - scanner: typescript
      file: apps/web/src/features/task-composer/source-context.ts
      symbol: taskSourceComposerContext
    - scanner: typescript
      file: apps/web/src/features/task-composer/property-defaults.ts
      symbol: DEFAULT_TASK_COMPOSER_PROPERTY_IDS
    - scanner: typescript
      file: apps/web/src/features/task-composer/views/task-composer-parts.tsx
      symbol: TaskComposer
    - scanner: typescript
      file: apps/web/src/features/task-composer/core/context.ts
      symbol: TaskComposerContext
    - scanner: typescript
      file: apps/web/src/features/task-composer/compose-task.tsx
      symbol: ComposeTask
    - scanner: typescript
      file: apps/web/src/features/task-composer/new-task-title-focus.ts
    - scanner: typescript
      file: apps/web/src/features/task-composer/views/desktop-task-composer.tsx
      symbol: DesktopTaskComposer
    - scanner: typescript
      file: apps/web/src/features/task-composer/primitives/task-composer.ts
    - scanner: typescript
      file: apps/web/src/features/task-composer/components/title-editor.tsx
    - scanner: typescript
      file: apps/web/src/features/task-composer/primitives/taskCreatedToast.ts
      symbol: showTaskCreatedToast
    - scanner: typescript
      file: apps/web/src/features/task-composer/customer-contact.ts
    - scanner: typescript
      file: apps/web/src/features/task-composer/components/customer-contact-pill.tsx
      symbol: CustomerContactPill
  technology: SolidJS
  group: Tasks
description: New-task property defaults and source context.
---

`taskSourceComposerContext` is gated by `enableTaskSourceProperty`. When on, it adds the system Source property and an initial entity reference, keyed by entity type, id, and optional message id. The composer UI files were not opened; this file is the context contract those hosts pass in.
