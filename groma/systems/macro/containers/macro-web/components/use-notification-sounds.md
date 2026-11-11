---
type: C4 Component
title: Notification sounds use notification sounds
status: stable
groma:
  id: use-notification-sounds
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/use-notification-sounds.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/core/quiet-hours.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/components/QuietHoursSection.tsx
      symbol: QuietHoursSection
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/primitives/sound-tab.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/primitives/sound-settings.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/primitives/sound-player.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/views/NotificationSoundSettingsView.tsx
      symbol: NotificationSoundSettingsView
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/core/sounds.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/core/settings.ts
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/components/NotificationSoundSection.tsx
      symbol: NotificationSoundSection
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/core/categories.ts
  technology: SolidJS
description: Notification sound playback and tab claim.
---

`notificationSoundFor` returns a sound id and volume, or null. The comment says system alerts stay silent so the person hears one sound. Playback, settings, and a single-tab claim live in `primitives/`, imported by this hook. No chrome mount of this hook was in the files opened.
