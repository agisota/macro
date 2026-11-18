import { ROX_MARK_SRC } from '@core/component/RoxMark';

const FAVICON_SIZE = 48;

let currentFaviconLink: HTMLLinkElement | null = null;
let requestedIcon = '';
const renderedIcons = new Map<string, string>();

function setFavicon(url: string): void {
  if (!currentFaviconLink?.isConnected) {
    document
      .querySelectorAll('link[rel*="icon"]')
      .forEach((link) => link.remove());
    currentFaviconLink = document.createElement('link');
    currentFaviconLink.rel = 'icon';
    currentFaviconLink.type = 'image/png';
    document.head.appendChild(currentFaviconLink);
  }
  currentFaviconLink.href = url;
}

/** The installed app icon, used for notifications and the tab. */
export function getFaviconUrl(_color: string) {
  return ROX_MARK_SRC;
}

/**
 * Update the site's live favicon from the installed app icon, and optionally
 * a notification badge.
 */
export function updateFavicon(
  faviconColor: string,
  badgeColor?: string,
  hasBadge?: boolean
): void {
  const key = JSON.stringify([faviconColor, badgeColor, !!hasBadge]);
  if (key === requestedIcon && currentFaviconLink?.isConnected) return;
  requestedIcon = key;
  const cached = renderedIcons.get(key);
  if (cached) {
    setFavicon(cached);
    return;
  }

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = FAVICON_SIZE;
  canvas.height = FAVICON_SIZE;

  const img = new Image();
  img.src = ROX_MARK_SRC;

  img.onload = () => {
    if (requestedIcon !== key) return;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    if (hasBadge) {
      const badgeRadius = 6;
      ctx.beginPath();
      ctx.arc(
        canvas.width - badgeRadius,
        badgeRadius,
        badgeRadius,
        0,
        2 * Math.PI
      );
      ctx.fillStyle = badgeColor || faviconColor;
      ctx.fill();
    }

    const faviconUrl = canvas.toDataURL();

    if (renderedIcons.size >= 32)
      renderedIcons.delete(renderedIcons.keys().next().value!);
    renderedIcons.set(key, faviconUrl);
    setFavicon(faviconUrl);
  };
}
