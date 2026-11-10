---
type: C4 Component
title: Web module
status: stable
groma:
  id: popuppositioner
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/lib/core/component/GeneralizedPopup/PopupPositioner.tsx
      symbol: PopupPositioner
    - scanner: typescript
      file: apps/web/src/lib/core/component/GeneralizedPopup/Popup.tsx
      symbol: GeneralizedPopup
  technology: SolidJS
description: Part of the signed-in client
---

Reference element the popup is positioned against.
