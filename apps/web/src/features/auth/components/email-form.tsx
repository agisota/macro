import ArrowRight from '@icon/system/regular/arrow-right.svg';
import { Show } from 'solid-js';
import { AuthButton, FormError, FormInput } from './form-fields';

export function EmailForm(props: {
  email: string;
  handle?: string;
  signup: boolean;
  /** The service answered that this address is new and needs a handle. */
  handleRequired: boolean;
  password: string;
  passwordRequired: boolean;
  sending: boolean;
  error?: string;
  onEmailInput: (value: string) => void;
  onHandleInput: (value: string) => void;
  onPasswordInput: (value: string) => void;
  onSubmit: () => void;
}) {
  return (
    <form
      class="flex flex-col gap-3"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSubmit();
      }}
    >
      <p class="text-xs text-ink-muted leading-snug">
        We’ll send a one-time code to verify.
      </p>
      <FormInput
        id="email"
        type="email"
        placeholder="you@company.com"
        value={props.email}
        onInput={props.onEmailInput}
      />
      <Show when={props.signup || props.handleRequired}>
        {/* The field appears mid-sign-in because the server said this address
            is new, so say why before asking for the handle. */}
        <Show when={!props.signup}>
          <p class="text-xs text-ink-muted leading-snug">
            This address is new. Choose a handle for your Rox account.
          </p>
        </Show>
        <FormInput
          id="handle"
          type="text"
          placeholder="Your Rox handle"
          value={props.handle ?? ''}
          onInput={props.onHandleInput}
        />
      </Show>
      <Show when={props.passwordRequired}>
        <FormInput
          id="password"
          type="password"
          placeholder="Password"
          value={props.password}
          onInput={props.onPasswordInput}
        />
      </Show>
      <FormError message={props.error} />
      <AuthButton type="submit" disabled={props.sending}>
        Continue
        <ArrowRight class="size-5 shrink-0" />
      </AuthButton>
    </form>
  );
}
