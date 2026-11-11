---
type: C4 Component
title: HarnessApp
status: stable
groma:
  id: harnessapp
  parent: macro-web
  code:
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Tests/OverlayHarness/HarnessApp.swift
  technology: SolidJS
  group: Development tooling
description: Runs the production overlay without authentication, a backend, or a call
---

Runs the production overlay without authentication, a backend, or a call. A physical device can use this same screen to stress the gesture lifecycle.
