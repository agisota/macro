---
type: C4 Component
title: PhotoLibraryPlugin
status: stable
groma:
  id: photolibraryplugin
  parent: macro-web
  code:
    - scanner: swift
      file: apps/web/tauri/photo_library_plugin/ios/Sources/PhotoLibraryPlugin.swift
    - scanner: typescript
      file: apps/web/vite-ci.config.ts
    - scanner: javascript
      file: apps/web/public/sw.js
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallPictureInPicture.kt
      symbol: CallPictureInPicture
    - scanner: kotlin
      file: apps/web/tauri/android_push_plugin/android/src/main/java/com/macro/push/PushPlugin.kt
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/ParticipantStripScrollView.swift
    - scanner: typescript
      file: apps/web/src/observability/sampling.ts
    - scanner: swift
      file: apps/web/tauri/src-tauri/gen/apple/NotificationServiceExtension/NotificationService.swift
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/CallKitModels.swift
    - scanner: c
      file: apps/web/tauri/src-tauri/gen/apple/Sources/app/bindings/bindings.h
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/IncomingCallCoordinator.swift
    - scanner: kotlin
      file: apps/web/tauri/android_push_plugin/android/src/main/java/com/macro/push/PushStore.kt
      symbol: PushStore
    - scanner: typescript
      file: apps/web/playwright.config.ts
    - scanner: kotlin
      file: apps/web/tauri/src-tauri/gen/android/app/src/main/java/com/macro/workspace/mobile/MainActivity.kt
      symbol: MainActivity
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/TelecomService.kt
      symbol: TelecomService
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallActivity.kt
      symbol: CallActivity
    - scanner: typescript
      file: apps/web/src/observability/runtime-resources.ts
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallReceiver.kt
      symbol: CallReceiver
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/CallVideoOverlayController.swift
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/CallKitLog.swift
      symbol: callKitLog
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/RingDeclineReporter.swift
    - scanner: kotlin
      file: apps/web/tauri/network_status_plugin/android/src/main/java/com/macro/network/NetworkStatusPlugin.kt
    - scanner: typescript
      file: apps/web/vite.config.ts
    - scanner: kotlin
      file: apps/web/tauri/src-tauri/gen/android/buildSrc/src/main/java/com/macro/app/prod/kotlin/RustPlugin.kt
    - scanner: typescript
      file: apps/web/src/routes/app-route.ts
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/Calls.kt
      symbol: Calls
    - scanner: kotlin
      file: apps/web/tauri/android_auth_plugin/android/src/main/java/com/macro/auth/AuthSession.kt
      symbol: AuthSession
    - scanner: typescript
      file: apps/web/src/routes/routes.ts
    - scanner: typescript
      file: apps/web/src/observability/navigation-lifecycle.ts
      symbol: trackNavigationLifecycle
    - scanner: typescript
      file: apps/web/src/observability/desktop.ts
    - scanner: swift
      file: apps/web/tauri/ios_push_plugin/store/Sources/PendingPushStore/PendingPushStore.swift
    - scanner: swift
      file: apps/web/tauri/pasteboard_plugin/ios/Sources/PasteboardPlugin.swift
    - scanner: kotlin
      file: apps/web/tauri/android_mobile_plugin/android/src/main/java/com/macro/mobile/MobilePlugin.kt
      symbol: MobilePlugin
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/NativeLiveKitCallSession.swift
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/RingPolicy.kt
      symbol: RingPolicy
    - scanner: typescript
      file: apps/web/src/observability/native-diagnostics.ts
    - scanner: typescript
      file: apps/web/codegen.ts
      symbol: config
    - scanner: typescript
      file: apps/web/knip.ts
      symbol: config
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallTracing.kt
    - scanner: swift
      file: apps/web/tauri/ios_push_plugin/ios/Sources/NotificationsPlugin.swift
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallService.kt
      symbol: CallService
    - scanner: kotlin
      file: apps/web/tauri/android_mobile_plugin/android/src/main/java/com/macro/mobile/MobileExports.kt
    - scanner: swift
      file: apps/web/tauri/edit_menu_plugin/ios/Sources/EditMenuPlugin.swift
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallTheme.kt
      symbol: CallTheme
    - scanner: swift
      file: apps/web/tauri/src-tauri/gen/apple/ShareExtension/ShareViewController.swift
    - scanner: kotlin
      file: apps/web/tauri/android_auth_plugin/android/src/main/java/com/macro/auth/AuthPlugin.kt
    - scanner: kotlin
      file: apps/web/tauri/android_auth_plugin/android/src/main/java/com/macro/auth/AuthRedirectActivity.kt
      symbol: AuthRedirectActivity
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallOffer.kt
      symbol: CallOffer
    - scanner: typescript
      file: apps/web/vitest.config.ts
    - scanner: typescript
      file: apps/web/src/observability/reload.ts
    - scanner: javascript
      file: apps/web/st-tmp.mjs
      symbol: jumped
    - scanner: kotlin
      file: apps/web/tauri/android_push_plugin/android/src/main/java/com/macro/push/PushMessage.kt
      symbol: PushMessage
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/CallKitPlugin.swift
    - scanner: kotlin
      file: apps/web/tauri/src-tauri/gen/android/buildSrc/src/main/java/com/macro/app/prod/kotlin/BuildTask.kt
      symbol: BuildTask
    - scanner: typescript
      file: apps/web/vite.base.ts
      symbol: createAppViteConfig
    - scanner: typescript
      file: apps/web/src/observability/frontend-instance.ts
      symbol: frontendInstanceId
    - scanner: typescript
      file: apps/web/src/observability/ui-operation.ts
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/CallAudioRouteController.swift
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/MicrophoneAccessAlert.swift
    - scanner: typescript
      file: apps/web/src/observability/perf-marks.ts
      symbol: perfMark
    - scanner: kotlin
      file: apps/web/tauri/android_auth_plugin/android/src/main/java/com/macro/auth/AuthCallback.kt
      symbol: AuthCallback
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/CallPictureInPictureController.swift
    - scanner: swift
      file: apps/web/tauri/file_export_plugin/ios/Sources/FileExportPlugin.swift
    - scanner: typescript
      file: apps/web/src/observability/flow.tsx
    - scanner: swift
      file: apps/web/tauri/network_status_plugin/ios/Sources/NetworkStatusPlugin.swift
    - scanner: kotlin
      file: apps/web/tauri/android_auth_plugin/android/src/main/java/com/macro/auth/AuthActivity.kt
      symbol: AuthActivity
    - scanner: swift
      file: apps/web/tauri/input_accessory_plugin/ios/Sources/InputAccessoryPlugin.swift
    - scanner: kotlin
      file: apps/web/tauri/android_push_plugin/android/src/main/java/com/macro/push/PushService.kt
      symbol: PushService
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallPlugin.kt
    - scanner: typescript
      file: apps/web/src/observability/generated/bundle-reloads.ts
      symbol: BundleReloadDiagnostics
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Sources/RingStatePoller.swift
    - scanner: kotlin
      file: apps/web/tauri/android_mobile_plugin/android/src/main/java/com/macro/mobile/MobileFiles.kt
    - scanner: javascript
      file: apps/web/tauri/callkit_plugin/src/android-init.js
    - scanner: typescript
      file: apps/web/src/observability/document-lifecycle.ts
    - scanner: kotlin
      file: apps/web/tauri/callkit_plugin/android/src/main/java/com/macro/call/CallMiniWindow.kt
      symbol: CallMiniWindow
    - scanner: typescript
      file: apps/web/src/observability/generated/native-diagnostics.ts
  technology: SolidJS
  group: App shell
description: PhotoLibraryPlugin in App shell.
---

File apps/web/tauri/photo_library_plugin/ios/Sources/PhotoLibraryPlugin.swift. It belongs to App shell, not a separate application.

## Derived relationships

| Source | Target | Description | Technology |
| --- | --- | --- | --- |
| [apps/web/src/observability/ui-operation.ts](../../../../../../apps/web/src/observability/ui-operation.ts) | [apps/web/src/features/block-form/views/respond-view.tsx](../../../../../../apps/web/src/features/block-form/views/respond-view.tsx) | Invokes supplied callback: onFinish | typescript |
| [apps/web/src/observability/ui-operation.ts](../../../../../../apps/web/src/observability/ui-operation.ts) | [apps/web/src/observability/typing-burst.ts](../../../../../../apps/web/src/observability/typing-burst.ts) | Invokes supplied callback: onFinish | typescript |
