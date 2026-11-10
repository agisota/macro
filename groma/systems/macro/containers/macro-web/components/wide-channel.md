---
type: C4 Component
title: Web module
status: stable
groma:
  id: wide-channel
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/icon/wide-channel.tsx
      symbol: AnimatedChannelIcon
  technology: SolidJS
description: Part of the signed-in client
---

One-shot "expand & reconverge" animation, driven by the .animating class (toggled by the triggerAnimation prop, same as the other animated icons). Each line moves radially outward from the icon's center, then eases back to rest with a slight overshoot — the hash briefly expands a
