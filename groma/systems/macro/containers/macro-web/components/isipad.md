---
type: C4 Component
title: IsIpad
status: stable
groma:
  id: isipad
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/isIpad.ts
      symbol: isIpad
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/IpadUnsupportedDialog.tsx
      symbol: IpadUnsupportedDialog
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/IosPushNotificationModal.tsx
      symbol: IosPushNotificationModal
  technology: SolidJS
description: IsIpad inside the signed-in client.
---

Whether we're running in the native iOS app on an iPad.  `getPlatform()` reports `'ios'` for iPhone and iPad alike, so this asks the native side for `UIDevice.current.userInterfaceIdiom`. iOS apps running on an Apple Silicon Mac report the iPad idiom too, and are excluded nativel
