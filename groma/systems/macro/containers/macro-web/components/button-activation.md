---
type: C4 Component
title: Web module
status: stable
groma:
  id: button-activation
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/components/ui/utils/button-activation.ts
      symbol: createButtonActivation
    - scanner: typescript
      file: apps/web/src/components/ui/utils/menuKeyboardNavigation.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/multiSelectSelection.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/press.ts
      symbol: pressHandlers
    - scanner: typescript
      file: apps/web/src/components/ui/utils/selectionDismissal.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/palette.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/date.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/button-finishes.ts
      symbol: raisedButtonStyles
    - scanner: typescript
      file: apps/web/src/components/ui/utils/color.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/controlSizes.ts
      symbol: CONTROL_SIZE_VARIANTS
    - scanner: typescript
      file: apps/web/src/components/ui/utils/control-sizes.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/classname.ts
      symbol: cn
    - scanner: typescript
      file: apps/web/src/components/ui/utils/variants.ts
    - scanner: typescript
      file: apps/web/src/components/ui/utils/file-tree.ts
  technology: SolidJS
description: Part of the signed-in client
---

Kobalte supplies disabled semantics; non-native actions still need activation guards.
