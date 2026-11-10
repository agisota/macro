---
type: C4 Component
title: patch_apprun
status: stable
groma:
  id: patch-apprun
  parent: macro-patch-apprun
  code:
    - scanner: python
      file: nix/appimage/patch_apprun.py
      symbol: patch_apprun
description: Scanned source
---

!/usr/bin/env python3
