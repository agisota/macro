import { mailboxAddress } from '@core/constant/mailbox-handle';
import ArrowLeft from '@icon/system/regular/arrow-left.svg';
import { Show } from 'solid-js';
import { AuthButton, FormError, FormInput } from './form-fields';

/** The local part the person chose, shown as their @rox.one address. */
export function AddressForm(props: {
  local: string;
  sending: boolean;
  error?: string;
  onLocalInput: (value: string) => void;
  onSubmit: () => void;
  onBack: () => void;
}) {
  const preview = () => {
    const local = props.local.trim().toLowerCase();
    return local ? mailboxAddress(local) : '';
  };
  return (
    <form
      class="flex flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit();
      }}
    >
      <h2 class="text-base font-medium text-ink">Choose your Rox address</h2>
      <p class="text-xs text-ink-muted leading-snug">
        The name before @rox.one. Letters, numbers, dots, underscores, or
        hyphens.
      </p>
      <FormInput
        id="rox-handle"
        type="text"
        placeholder="Your name"
        autocomplete="off"
        value={props.local}
        onInput={props.onLocalInput}
      />
      <Show when={preview()}>
        <p class="text-xs text-ink-muted">Your address</p>
        <p class="text-sm text-ink">{preview()}</p>
      </Show>
      <FormError message={props.error} />
      <AuthButton type="submit" disabled={props.sending}>
        Use this address
      </AuthButton>
      <AuthButton variant="secondary" onClick={props.onBack}>
        <ArrowLeft class="size-5 shrink-0" />
        Back
      </AuthButton>
    </form>
  );
}
