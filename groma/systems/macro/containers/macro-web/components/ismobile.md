---
type: C4 Component
title: IsMobile
status: stable
groma:
  id: ismobile
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/isMobile.ts
      symbol: isMobile
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/safeAreaInsets.ts
      symbol: getSafeAreaInset
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/usePreserveFocusOnButtonTaps.ts
      symbol: usePreserveFocusOnButtonTaps
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/storePlatform.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/native-network-status.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/mobileWidth.ts
      symbol: isMobileWidth
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/mobileClipboardImageRecovery.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/virtualKeyboard.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/iosFiles.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/nativeStagedUpload.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/isTouchDevice.ts
      symbol: isTouchDevice
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/native-update-link.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/exportAndroidFileWithProgress.ts
      symbol: exportAndroidFileWithProgress
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/nativeFileExport.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/androidFiles.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/nativePhotoLibrary.ts
      symbol: pickPhotoLibraryMediaOrFiles
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/nativeUpdateRequired.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/isNativeMobilePlatform.ts
      symbol: isNativeMobilePlatform
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/nativeEditMenu.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/androidWindowInsets.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/inputModality.ts
      symbol: isModality
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/useTouchOutsideToDismissKeyboard.ts
      symbol: useTouchOutsideToDismissKeyboard
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/haptics.ts
      symbol: hapticImpact
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/androidBack.ts
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/WrapUnlessMobile.tsx
      symbol: WrapUnlessMobile
    - scanner: typescript
      file: apps/web/src/lib/core/mobile/NativeAppUpdateRequiredDialog.tsx
      symbol: NativeAppUpdateRequiredDialog
  technology: SolidJS
  group: Workspace core
description: Returns true if the device is likely in a mobile context
---

Returns true if the device is likely in a mobile context. This checks for both a narrow screen width AND a primarily touch-based device. Use this for behavior that should differ on phones vs tablets/desktops.
