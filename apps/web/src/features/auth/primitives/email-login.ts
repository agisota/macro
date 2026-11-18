import { isAllowedHandle } from '@core/constant/mailbox-handle';
import { fireAndForget } from '@core/util/fireAndForget';
import { createSignal, onCleanup } from 'solid-js';
import type {
  AuthContext,
  AuthIntent,
  VerifyCodeResult,
} from '../context/auth-context';
import { isCompleteCode, RESEND_AFTER_SECONDS } from '../core/email-code';

export type LoginStep = 'choose' | 'email' | 'address' | 'verify' | 'passkey';

const VERIFY_ERRORS = {
  'invalid-code': 'Invalid code.',
  'rate-limited': 'Too many attempts. Wait a minute, then try again.',
  failed: 'Unable to perform verification.',
} satisfies Record<Exclude<VerifyCodeResult['t'], 'verified'>, string>;

const HANDLE_ERROR =
  'Choose 3–32 lowercase letters, numbers, dots, underscores, or hyphens. Reserved names and consecutive dots are not allowed.';

type EmailLoginCapabilities = Pick<
  AuthContext,
  | 'session'
  | 'sendEmailCode'
  | 'verifyEmailCode'
  | 'completeLogin'
  | 'identify'
  | 'track'
  | 'passkeyMode'
  | 'registerPasskey'
  | 'assertPasskey'
>;

/**
 * Sign-in by emailed one-time code (or, for a few accounts, a password):
 * email, then a chosen @rox.one address when the person is new, then the
 * code, then a passkey for a new account or an existing one.
 */
export function createEmailLogin(
  context: EmailLoginCapabilities,
  options: {
    intent: AuthIntent;
    initialEmail?: string;
    /** Send the code for `initialEmail` right away (dev persona links). */
    autoStart?: boolean;
    /** After a verified sign-in, before the session swaps the page. */
    onVerified?: () => void;
    /** A provider sign-in just failed: open on the email step and say why. */
    fallbackNotice?: string;
  }
) {
  const [step, setStep] = createSignal<LoginStep>(
    options.initialEmail || options.fallbackNotice ? 'email' : 'choose'
  );
  const [email, setEmail] = createSignal(options.initialEmail ?? '');
  const [handle, setHandle] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [passwordRequired, setPasswordRequired] = createSignal(false);
  /** A code went out with a chosen address, so this person is creating an account. */
  const [createdAccount, setCreatedAccount] = createSignal(false);
  const [passkeyKind, setPasskeyKind] = createSignal<'enroll' | 'assert'>(
    'enroll'
  );
  const [passkeyError, setPasskeyError] = createSignal<string>();
  const [passkeyBusy, setPasskeyBusy] = createSignal(false);
  const [sending, setSending] = createSignal(false);
  const [sendError, setSendError] = createSignal<string | undefined>(
    options.fallbackNotice
  );
  const [code, setCode] = createSignal('');
  const [verifying, setVerifying] = createSignal(false);
  const [verifyError, setVerifyError] = createSignal<string>();
  const [resendIn, setResendIn] = createSignal(0);

  let attempt = 0;
  let verifiedAttempt: number | undefined;
  const resetAttempt = () => {
    attempt += 1;
    verifiedAttempt = undefined;
  };

  let countdown: ReturnType<typeof setInterval> | undefined;
  const startResendCountdown = () => {
    clearInterval(countdown);
    setResendIn(RESEND_AFTER_SECONDS);
    countdown = setInterval(() => {
      setResendIn((seconds) => Math.max(0, seconds - 1));
      if (resendIn() === 0) clearInterval(countdown);
    }, 1000);
  };
  onCleanup(() => clearInterval(countdown));

  const finish = async () => {
    await context.completeLogin();
    const session = context.session();
    if (session.t === 'signed-in') {
      context.track('login', { method: 'email' });
      context.identify(session.user);
    }
    options.onVerified?.();
  };

  const verify = async (value = code()) => {
    const address = email();
    if (verifying() || !isCompleteCode(value) || !address) return;
    setVerifying(true);
    setVerifyError();
    const currentAttempt = attempt;
    if (verifiedAttempt !== currentAttempt) {
      const result = await context.verifyEmailCode({
        email: address,
        code: value,
      });
      if (attempt !== currentAttempt) {
        setVerifying(false);
        return;
      }
      if (result.t !== 'verified') {
        setVerifying(false);
        // A rejected code must not spend another attempt on Verify.
        if (result.t === 'invalid-code') setCode('');
        setVerifyError(VERIFY_ERRORS[result.t]);
        return;
      }
      // The one-time code is consumed even if local session cleanup fails.
      // Only this attempt may retry completion without verifying it again.
      verifiedAttempt = currentAttempt;
    }
    try {
      if (createdAccount()) {
        setPasskeyKind('enroll');
        setPasskeyError();
        setStep('passkey');
        setVerifying(false);
        return;
      }
      const mode = await context.passkeyMode(address);
      if (attempt !== currentAttempt) {
        setVerifying(false);
        return;
      }
      if (mode === 'assert') {
        setPasskeyKind('assert');
        setPasskeyError();
        setStep('passkey');
        setVerifying(false);
        return;
      }
      await finish();
    } catch (error) {
      setVerifying(false);
      throw error;
    }
  };

  /** Send (or resend) the code. `withHandle` carries the chosen address. */
  const send = async (withHandle: boolean): Promise<boolean> => {
    const address = email().trim();
    const chosen = handle().trim().toLowerCase();
    if (sending() || !address) return false;
    if (withHandle && !chosen) return false;
    if (withHandle && !isAllowedHandle(chosen)) {
      setSendError(HANDLE_ERROR);
      return false;
    }
    resetAttempt();
    setSending(true);
    setSendError();
    try {
      const result = await context.sendEmailCode({
        email: address,
        handle: withHandle ? chosen : undefined,
        password: passwordRequired() ? password() : undefined,
        isAgent: options.intent === 'agent-signup',
      });
      switch (result.t) {
        case 'code-sent':
          if (withHandle) setCreatedAccount(true);
          setEmail(address);
          setCode('');
          setStep('verify');
          startResendCountdown();
          if (result.autoCode) {
            setCode(result.autoCode);
            fireAndForget(verify(result.autoCode), 'email-login');
          }
          return true;
        case 'password-required':
          setPasswordRequired(true);
          return false;
        case 'handle-required':
          setSendError();
          setStep('address');
          return false;
        case 'signed-in':
          await finish();
          return false;
        case 'redirected':
          return false;
        case 'failed':
          setSendError(result.message);
          return false;
      }
    } finally {
      setSending(false);
    }
  };

  const submitPasskey = async () => {
    if (passkeyBusy()) return;
    setPasskeyBusy(true);
    setPasskeyError();
    const outcome =
      passkeyKind() === 'assert'
        ? await context.assertPasskey({ email: email() })
        : await context.registerPasskey({ email: email() });
    if (outcome.t === 'failed') {
      setPasskeyBusy(false);
      setPasskeyError(outcome.message);
      return;
    }
    try {
      await finish();
    } catch (error) {
      setPasskeyBusy(false);
      throw error;
    }
  };

  if (options.autoStart && options.initialEmail)
    fireAndForget(send(false), 'email-login');

  return {
    step,
    email,
    handle,
    setHandle,
    createdAccount,
    passkeyKind,
    passkeyError,
    passkeyBusy,
    setEmail: (address: string) => {
      if (address !== email()) {
        resetAttempt();
        setCreatedAccount(false);
        setHandle('');
      }
      return setEmail(address);
    },
    password,
    setPassword,
    passwordRequired,
    sending,
    sendError,
    code,
    setCode,
    verifying,
    verifyError,
    resendIn,
    canVerify: () => isCompleteCode(code()) && !verifying(),
    chooseEmail: () => {
      resetAttempt();
      if (options.intent !== 'login')
        context.track('sign_up_click', { method: 'email' });
      setStep('email');
    },
    submitEmail: () => fireAndForget(send(false), 'email-login'),
    submitAddress: () => fireAndForget(send(true), 'email-login'),
    verify: (value?: string) => fireAndForget(verify(value), 'email-login'),
    submitPasskey: () => fireAndForget(submitPasskey(), 'email-login'),
    resend: async () => {
      setVerifyError();
      // A failed resend may be retried at once; a sent one restarts the wait.
      if (!(await send(createdAccount()))) setResendIn(0);
    },
    back: () => {
      resetAttempt();
      if (
        step() === 'verify' ||
        step() === 'address' ||
        step() === 'passkey'
      ) {
        setCode('');
        setVerifyError();
        setSendError();
        setPasskeyError();
        setStep('email');
      } else {
        setSendError();
        setStep('choose');
      }
    },
  };
}

export type EmailLogin = ReturnType<typeof createEmailLogin>;
