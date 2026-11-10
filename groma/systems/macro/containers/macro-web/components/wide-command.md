---
type: C4 Component
title: Web module
status: stable
groma:
  id: wide-command
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/icon/wide-command.tsx
      symbol: AnimatedCommandIcon
  technology: SolidJS
description: Part of the signed-in client
---

⌘ symbol from Asset 183.svg (15.05×15.05 viewBox, 1.5px stroke). On hover: translucent bg appears + icon scales up with spring easing. stroke-width is compensated (÷1.15) during animation so visual weight stays constant.
