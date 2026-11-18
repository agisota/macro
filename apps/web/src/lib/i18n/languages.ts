import { Language } from '@service-auth/generated/schemas/language';

export { Language };

/** Shown when the person and their team have not chosen a language. */
export const DEFAULT_LANGUAGE: Language = Language.ru;

/**
 * The interface languages in picker order, each with its name written in that
 * language so people can find their own regardless of the current one.
 */
export const LANGUAGES: readonly { code: Language; nativeName: string }[] = [
  { code: Language.en, nativeName: 'English' },
  { code: Language.de, nativeName: 'Deutsch' },
  { code: Language.fr, nativeName: 'Français' },
  { code: Language.es, nativeName: 'Español' },
  { code: Language.it, nativeName: 'Italiano' },
  { code: Language.nl, nativeName: 'Nederlands' },
  { code: Language['pt-PT'], nativeName: 'Português (Portugal)' },
  { code: Language.sv, nativeName: 'Svenska' },
  { code: Language.da, nativeName: 'Dansk' },
  { code: Language.nb, nativeName: 'Norsk bokmål' },
  { code: Language.fi, nativeName: 'Suomi' },
  { code: Language.pl, nativeName: 'Polski' },
  { code: Language.ru, nativeName: 'Русский' },
  { code: Language.ja, nativeName: '日本語' },
  { code: Language.ko, nativeName: '한국어' },
  { code: Language['zh-Hans'], nativeName: '简体中文' },
  { code: Language['zh-Hant'], nativeName: '繁體中文' },
  { code: Language.hi, nativeName: 'हिन्दी' },
  { code: Language.id, nativeName: 'Bahasa Indonesia' },
  { code: Language.vi, nativeName: 'Tiếng Việt' },
  { code: Language.th, nativeName: 'ไทย' },
];

const LANGUAGE_CODES: ReadonlySet<string> = new Set(Object.values(Language));

export function isLanguage(value: unknown): value is Language {
  return typeof value === 'string' && LANGUAGE_CODES.has(value);
}

export function nativeLanguageName(code: Language): string {
  return (
    LANGUAGES.find((language) => language.code === code)?.nativeName ?? code
  );
}

/**
 * Always unset. The interface does not copy the browser, so a person who has
 * not chosen a language, and whose team has not either, sees Russian. The
 * list is still accepted so callers can pass `navigator.languages`.
 */
export function browserLanguage(
  preferred: readonly string[]
): Language | undefined {
  void preferred;
  return undefined;
}

/**
 * The language the interface shows: the person's own choice, else their
 * team's, else an explicit browser language passed in, else Russian. A missing
 * choice is not filled from the browser.
 */
export function resolveInterfaceLanguage(
  userLanguage: Language | null | undefined,
  teamLanguage: Language | null | undefined,
  browser: Language | undefined
): Language {
  return userLanguage ?? teamLanguage ?? browser ?? DEFAULT_LANGUAGE;
}
