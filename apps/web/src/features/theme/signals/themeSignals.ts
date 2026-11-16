import { makePersisted } from '@solid-primitives/storage';
import { createMemo, createSignal } from 'solid-js';
import {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  DEFAULT_THEMES,
} from '../constants';
import type {
  ThemeColorTokens,
  ThemeV0,
  ThemeV1,
  ThemeV3,
} from '../types/themeTypes';
import { resolveThemeColors } from '../utils/resolvedThemeColors';
import { normalizeThemeColorTokens } from '../utils/themeColorTokens';
import {
  convertThemev0v1,
  convertThemev1v2,
  convertThemev2v3,
} from '../utils/themeMigrations';
import { isThemeV2, isThemeV3 } from '../utils/themeValidation';

export const [isThemeSaved, setIsThemeSaved] = createSignal<boolean>(true);

/** Resolved semantic colors used by index.html before the app loads. */
export const [htmlColor, setHtmlColor] = makePersisted(
  createSignal<{
    color: string;
    panel?: string;
    ink?: string;
    muted?: string;
    input?: string;
  }>({ color: '' }),
  { name: 'html-color-theme' }
);

export const [userThemes, setUserThemes] = makePersisted(
  createSignal<ThemeV3[]>([]),
  { name: 'macro-user-themes' }
);
setUserThemes(
  (userThemes() as unknown[]).flatMap((theme) => {
    if (isThemeV3(theme)) {
      return [
        {
          ...theme,
          colorTokens: normalizeThemeColorTokens(theme.colorTokens, theme.mode),
        },
      ];
    }
    if (isThemeV2(theme)) return [convertThemev2v3(theme)];
    if (typeof theme !== 'object' || theme === null) return [];

    const version = (theme as { version?: unknown }).version;
    if (version === 1) {
      return [convertThemev2v3(convertThemev1v2(theme as ThemeV1))];
    }
    if (version === undefined || version === 0) {
      return [
        convertThemev2v3(convertThemev1v2(convertThemev0v1(theme as ThemeV0))),
      ];
    }
    return [];
  })
);

export const [currentThemeId, setCurrentThemeId] = makePersisted(
  createSignal<string>(DEFAULT_DARK_THEME),
  { name: 'macro-selected-theme' }
);

export const themes = createMemo<ThemeV3[]>(() => [
  ...DEFAULT_THEMES,
  ...userThemes(),
]);

/** VNext colors currently rendered and edited in the document. */
export const [themeColorTokens, setThemeColorTokens] =
  createSignal<ThemeColorTokens>({});

/** Intrinsic mode of the currently rendered theme. */
export const [liveThemeMode, setLiveThemeMode] = createSignal<'light' | 'dark'>(
  'dark'
);

/** Shared concrete colors for integrations which cannot inherit CSS tokens. */
export const resolvedThemeColors = createMemo(() =>
  resolveThemeColors(themeColorTokens(), liveThemeMode())
);

/** Icons outside the app follow committed colors, not transient previews. */
export const [committedThemeAccent, setCommittedThemeAccent] = createSignal(
  'oklch(0.7 0.12 250deg)'
);

// Per-mode theme preferences, persisted to localStorage. The active one is
// applied by systemThemeEffect / resolveActiveThemeId (themeUtils.ts): the light
// theme when themeMode is 'light' (or 'system' + OS light), the dark theme when
// 'dark' (or 'system' + OS dark).
export const [lightModeTheme, setLightModeTheme] = makePersisted(
  createSignal<string>(DEFAULT_LIGHT_THEME),
  { name: 'macro-light-mode-theme' }
);

export const [darkModeTheme, setDarkModeTheme] = makePersisted(
  createSignal<string>(DEFAULT_DARK_THEME),
  { name: 'macro-dark-mode-theme' }
);

/** The "Active theme" mode: pin a fixed light or dark theme, or follow the OS
 *  ('system'). Drives which per-mode theme (lightModeTheme/darkModeTheme) is
 *  live — see resolveActiveThemeId / systemThemeEffect in themeUtils. */
export type ThemeMode = 'light' | 'dark' | 'system';

/** Mode used only when `macro-theme-mode` is not stored. A saved value is kept. */
function initialThemeMode(): ThemeMode {
  if (typeof localStorage !== 'undefined') {
    const stored = localStorage.getItem('macro-theme-mode');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as unknown;
        if (parsed === 'light' || parsed === 'dark' || parsed === 'system') {
          return parsed;
        }
      } catch {
        // A corrupt value does not follow the system; a new profile is light.
      }
    }
  }
  return 'light';
}

export const [themeMode, setThemeMode] = makePersisted(
  createSignal<ThemeMode>(initialThemeMode()),
  { name: 'macro-theme-mode' }
);

const supportsMatchMedia =
  typeof window !== 'undefined' && typeof window.matchMedia === 'function';

// Tracks the OS color scheme so the active theme can follow it when themeMode is
// 'system'.
export const [systemMode, setSystemMode] = createSignal<'dark' | 'light'>(
  supportsMatchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
);

if (supportsMatchMedia) {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  darkModeQuery.addEventListener('change', (e: MediaQueryListEvent) => {
    setSystemMode(e.matches ? 'dark' : 'light');
  });
}

// Theme-list filters: whether light and/or dark themes are shown in the list.
export const [showLightThemes, setShowLightThemes] = makePersisted(
  createSignal<boolean>(true),
  { name: 'macro-show-light-themes' }
);
export const [showDarkThemes, setShowDarkThemes] = makePersisted(
  createSignal<boolean>(true),
  { name: 'macro-show-dark-themes' }
);

export const [themeDepth, setThemeDepth] = createSignal<number>(0.15);
