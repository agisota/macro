import { Show } from 'solid-js';
import { AuthButton, FormError } from './form-fields';

/** A new account adds a passkey. A known account uses the one it already has. */
export function PasskeyForm(props: {
  mode: 'enroll' | 'assert';
  busy: boolean;
  error?: string;
  onSubmit: () => void;
}) {
  const enroll = () => props.mode === 'enroll';
  return (
    <form
      class="flex flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit();
      }}
    >
      <h2 class="text-base font-medium text-ink">
        {enroll() ? 'Add a passkey' : 'Use your passkey'}
      </h2>
      <Show when={enroll()}>
        <p class="text-xs text-ink-muted leading-snug">
          This key stays on this device and confirms it is you.
        </p>
      </Show>
      <FormError message={props.error} />
      <AuthButton type="submit" disabled={props.busy}>
        {enroll() ? 'Add a passkey' : 'Use your passkey'}
      </AuthButton>
    </form>
  );
}
