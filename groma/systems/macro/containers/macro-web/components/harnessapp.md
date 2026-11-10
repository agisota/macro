---
type: C4 Component
title: Web module
status: stable
groma:
  id: harnessapp
  parent: macro-web
  code:
    - scanner: swift
      file: apps/web/tauri/callkit_plugin/ios/Tests/OverlayHarness/HarnessApp.swift
  technology: SolidJS
description: Part of the signed-in client
---

Runs the production overlay without authentication, a backend, or a call. A physical device can use this same screen to stress the gesture lifecycle.
