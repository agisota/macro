import { isTauri } from './platform';

export function getWebOrigin(): string {
  if (isTauri()) {
    return import.meta.env.MODE === 'development'
      ? 'https://dev.rox.one'
      : 'https://rox.one';
  }
  return window.location.origin;
}
