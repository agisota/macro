---
type: C4 Component
title: Notification sounds browser test fixture
status: stable
groma:
  id: notification-sounds-browser-test-fixture
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/notification-sounds/browser-test/fixture.tsx
  technology: SolidJS
  group: Development tooling
description: Notification sound playback and tab claim.
---

`notificationSoundFor` returns a sound id and volume, or null. The comment says system alerts stay silent so the person hears one sound. Playback, settings, and a single-tab claim live in `primitives/`, imported by this hook. No chrome mount of this hook was in the files opened.
