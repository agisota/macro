import { DEFAULT_THEMES } from './themes';

type DefaultTheme = (typeof DEFAULT_THEMES)[number]['id'];

export const DEFAULT_LIGHT_THEME: DefaultTheme = 'Rox Light';
export const DEFAULT_DARK_THEME: DefaultTheme = 'Rox Dark';

export { DEFAULT_THEMES };
