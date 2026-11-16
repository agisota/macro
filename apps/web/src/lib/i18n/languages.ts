import { Language } from '@service-auth/generated/schemas/language';

export { Language };

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
 * Does not copy the system language. A new profile falls through to
 * {@link DEFAULT_LANGUAGE}. A saved `interface-language-v1` is not read here.
 */
export function browserLanguage(
  _preferred: readonly string[]
): Language | undefined {
  return undefined;
}

/**
 * The person's own choice, else their team's, else an explicit browser
 * language when the caller already resolved one, else Russian.
 */
export function resolveInterfaceLanguage(
  userLanguage: Language | null | undefined,
  teamLanguage: Language | null | undefined,
  browser: Language | undefined
): Language {
  return userLanguage ?? teamLanguage ?? browser ?? DEFAULT_LANGUAGE;
}
