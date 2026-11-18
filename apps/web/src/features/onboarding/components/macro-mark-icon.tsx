import { RoxMark } from '@core/component/RoxMark';
import type { JSX } from 'solid-js';

export function MacroMarkIcon(props: {
  style?: JSX.CSSProperties;
  class?: string;
}) {
  return <RoxMark class={props.class} style={props.style} />;
}
