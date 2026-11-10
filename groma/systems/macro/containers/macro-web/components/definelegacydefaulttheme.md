---
type: C4 Component
title: Theme
status: stable
groma:
  id: definelegacydefaulttheme
  parent: macro-web
  code:
    - scanner: typescript
      file: apps/web/src/features/theme/themes/defineLegacyDefaultTheme.ts
      symbol: defineLegacyDefaultTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/satsuma.ts
      symbol: satsumaTheme
    - scanner: typescript
      file: apps/web/src/features/theme/utils/themeCssVars.ts
      symbol: themeCssVars
    - scanner: typescript
      file: apps/web/src/features/theme/constants.ts
    - scanner: typescript
      file: apps/web/src/features/theme/types/themeTypes.ts
    - scanner: typescript
      file: apps/web/src/features/theme/components/ThemeEdit3.tsx
      symbol: ThemeEdit3
    - scanner: typescript
      file: apps/web/src/features/theme/themes/macro-light.ts
      symbol: macroLightTheme
    - scanner: typescript
      file: apps/web/src/features/theme/components/ColorSwatch.tsx
      symbol: ColorSwatch
    - scanner: typescript
      file: apps/web/src/features/theme/utils/themeValidation.ts
    - scanner: typescript
      file: apps/web/src/features/theme/themes/macro-gruvbox.ts
      symbol: macroGruvboxTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/rain.ts
      symbol: rainTheme
    - scanner: typescript
      file: apps/web/src/features/theme/components/ColorPickerPopover.tsx
      symbol: ColorPickerPopover
    - scanner: typescript
      file: apps/web/src/features/theme/utils/themeColorTokens.ts
    - scanner: typescript
      file: apps/web/src/features/theme/themes/macro-dark.ts
      symbol: macroDarkTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/flora.ts
      symbol: floraTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/lapis.ts
      symbol: lapisTheme
    - scanner: typescript
      file: apps/web/src/features/theme/utils/colorUtil.ts
    - scanner: typescript
      file: apps/web/src/features/theme/themes/decepticon.ts
      symbol: decepticonTheme
    - scanner: typescript
      file: apps/web/src/features/theme/utils/buttonTheme.ts
      symbol: buttonAccentVars
    - scanner: typescript
      file: apps/web/src/features/theme/themes/moon.ts
      symbol: moonTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/spirit.ts
      symbol: spiritTheme
    - scanner: typescript
      file: apps/web/src/features/theme/utils/themeAssignments.ts
    - scanner: typescript
      file: apps/web/src/features/theme/components/ThemeEditor.tsx
      symbol: ThemeEditor
    - scanner: typescript
      file: apps/web/src/features/theme/components/ThemeChipPill.tsx
      symbol: ThemeChipPill
    - scanner: typescript
      file: apps/web/src/features/theme/themes/ember.ts
      symbol: emberTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/paper.ts
      symbol: paperTheme
    - scanner: typescript
      file: apps/web/src/features/theme/themes/index.ts
      symbol: DEFAULT_THEMES
    - scanner: typescript
      file: apps/web/src/features/theme/themes/void.ts
      symbol: voidTheme
    - scanner: typescript
      file: apps/web/src/features/theme/components/ThemeChips.tsx
      symbol: ThemeChips
    - scanner: typescript
      file: apps/web/src/features/theme/signals/themeSignals.ts
    - scanner: typescript
      file: apps/web/src/features/theme/utils/themeMigrations.ts
    - scanner: typescript
      file: apps/web/src/features/theme/components/ThemeTokenEditor.tsx
      symbol: ThemeTokenEditor
    - scanner: typescript
      file: apps/web/src/features/theme/utils/themeUtils.ts
    - scanner: typescript
      file: apps/web/src/features/theme/utils/resolvedThemeColors.ts
  technology: SolidJS
description: Theme ids and theme application helpers.
---

Defaults are `Macro Light` and `Macro Dark`, re-exported from `./themes`. `Root.tsx` imports `applyTheme`, `ensureMinimalThemeContrast`, `resolveActiveThemeId`, and `systemThemeEffect` from `@theme/utils/themeUtils` and applies the active theme on mount (`Root.tsx:51-56`, `Root.tsx:217-218`). The utils file was not opened.
