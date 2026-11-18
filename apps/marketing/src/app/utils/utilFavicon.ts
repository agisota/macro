import { createEffect } from 'solid-js';

export function utilFaviconEffect() {
  createEffect(() => {
    const elementFavicon = document.getElementById('favicon');
    if (!elementFavicon) return;
    elementFavicon.setAttribute('href', '/rox-mark.png');
    elementFavicon.setAttribute('type', 'image/png');
  });
}
