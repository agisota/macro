import type { JSX } from 'solid-js';

/** Installed Rox app icon, served from `public/rox-mark.png`. */
export const ROX_MARK_SRC = `${import.meta.env.BASE_URL}rox-mark.png`;

/** The company mark. Decorative: the nearby name carries the accessible name. */
export function RoxMark(props: {
  class?: string;
  style?: JSX.CSSProperties;
}) {
  return (
    <img
      src={ROX_MARK_SRC}
      alt=""
      width={1024}
      height={1024}
      class={props.class}
      style={{ 'object-fit': 'contain', ...props.style }}
    />
  );
}
