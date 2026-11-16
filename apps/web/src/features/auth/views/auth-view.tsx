import { fireAndForget } from '@core/util/fireAndForget';
import IconApple from '@icon/macro-apple.svg';
import { Stepper } from '@ui/components/Stepper';
import {
  type Accessor,
  type JSX,
  Match,
  onMount,
  Show,
  Switch,
} from 'solid-js';
import { EmailForm } from '../components/email-form';
import { AuthButton } from '../components/form-fields';
import { LoginCard } from '../components/login-card';
import { VerifyForm } from '../components/verify-form';
import {
  type AuthIntent,
  type AuthUser,
  useAuthContext,
} from '../context/auth-context';
import { createEmailLogin, type EmailLogin } from '../primitives/email-login';
import {
  createSessionIdentity,
  redeemSessionToken,
} from '../primitives/session';

/** What desktop sign-up hands onboarding's opening slides. */
export type SignupJourneySlots = {
  onGoogle: () => Promise<void>;
  /** Absent while Microsoft sign-up is off. */
  onMicrosoft?: () => Promise<void>;
  onBackFromEmail: () => void;
  onSignIn: () => void;
  onAgentSignup: () => void;
  emailForm: JSX.Element;
  showingEmail: boolean;
};

/** Sign-in and sign-up: SSO or an emailed code, then whatever comes next. */
export function AuthView(props: {
  intent: AuthIntent;
  showApple: boolean;
  /** Continue with Microsoft, behind `enable-microsoft-signup`. */
  showMicrosoft?: boolean;
  /** The header yields to the on-screen keyboard on phones. */
  compact: boolean;
  initialEmail?: string;
  autoStart?: boolean;
  /** Why a provider sign-in just failed; the email step opens instead. */
  ssoFallbackNotice?: string;
  /** The session code an SSO return put on the URL. */
  token?: string;
  onVerified?: () => void;
  /** Desktop sign-up: onboarding's slides host Google and the email form. */
  signupJourney?: (slots: SignupJourneySlots) => JSX.Element;
  /** Switches a returning visitor from sign-up to sign-in. */
  onSignIn?: () => void;
  /** Switches an agent from sign-up to the agent signup page. */
  onAgentSignup?: () => void;
  /**
   * Shown while the session is still resolving on a cold load, instead of the
   * signed-out screens a returning visitor would otherwise see flash by.
   */
  pending?: () => JSX.Element;
  /** What a signed-in visitor sees instead. */
  signedIn: (user: Accessor<AuthUser>) => JSX.Element;
}) {
  const context = useAuthContext();
  const login = createEmailLogin(context, {
    intent: props.intent,
    initialEmail: props.initialEmail,
    autoStart: props.autoStart,
    onVerified: props.onVerified,
    fallbackNotice: props.ssoFallbackNotice,
    openOnEmail: !props.signupJourney,
  });
  createSessionIdentity(context);
  redeemSessionToken(context, () => props.token);
  onMount(() => context.pageView(props.intent));

  const user = () => {
    const session = context.session();
    return session.t === 'signed-in' ? session.user : undefined;
  };

  const signedOut = () => (
    <Switch>
      <Match when={props.signupJourney}>
        {(journey) =>
          journey()({
            onGoogle: () => context.startSso('google', 'signup'),
            onMicrosoft: props.showMicrosoft
              ? () => context.startSso('microsoft', 'signup')
              : undefined,
            onBackFromEmail: login.back,
            onSignIn: () => props.onSignIn?.(),
            onAgentSignup: () => props.onAgentSignup?.(),
            showingEmail: login.step() !== 'choose',
            emailForm: (
              <Show when={login.step() !== 'choose'}>
                <Stepper
                  step={login.step() === 'verify' ? 1 : 0}
                  transition={Stepper.transitions.scale}
                >
                  <Stepper.Step>
                    <EmailStep login={login} />
                  </Stepper.Step>
                  <Stepper.Step>
                    <VerifyStep login={login} />
                  </Stepper.Step>
                </Stepper>
              </Show>
            ),
          })
        }
      </Match>
      <Match when={true}>
        <LoginCard
          compact={props.compact}
          agentSignup={props.intent === 'agent-signup'}
        >
          <Stepper
            step={login.step() === 'verify' ? 1 : 0}
            transition={Stepper.transitions.scale}
          >
            <Stepper.Step>
              <Show when={props.showApple}>
                <AuthButton
                  variant="secondary"
                  class="mb-3"
                  onClick={() =>
                    fireAndForget(
                      context.startSso('apple', props.intent),
                      'auth'
                    )
                  }
                >
                  <IconApple class="size-5 shrink-0" aria-hidden="true" />
                  Continue with Apple
                </AuthButton>
              </Show>
              <EmailStep login={login} />
            </Stepper.Step>
            <Stepper.Step>
              <VerifyStep login={login} />
            </Stepper.Step>
          </Stepper>
        </LoginCard>
      </Match>
    </Switch>
  );

  return (
    <Show when={context.session().t !== 'loading'} fallback={props.pending?.()}>
      <Show when={user()} fallback={signedOut()}>
        {(signedIn) => (
          // Refreshes update the existing workspace; only changing accounts
          // should remount it and restart its pending work.
          <Show when={signedIn().id} keyed>
            {(_id) => props.signedIn(signedIn)}
          </Show>
        )}
      </Show>
    </Show>
  );
}

function EmailStep(props: { login: EmailLogin }) {
  return (
    <EmailForm
      email={props.login.email()}
      handle={props.login.handle()}
      signup={props.login.isSignup()}
      handleRequired={props.login.handleRequired()}
      password={props.login.password()}
      passwordRequired={props.login.passwordRequired()}
      sending={props.login.sending()}
      error={props.login.sendError()}
      onEmailInput={props.login.setEmail}
      onHandleInput={props.login.setHandle}
      onPasswordInput={props.login.setPassword}
      onSubmit={props.login.submitEmail}
    />
  );
}

function VerifyStep(props: { login: EmailLogin }) {
  return (
    <VerifyForm
      email={props.login.email()}
      code={props.login.code()}
      verifying={props.login.verifying()}
      canVerify={props.login.canVerify()}
      resendIn={props.login.resendIn()}
      resending={props.login.sending()}
      error={props.login.verifyError() ?? props.login.sendError()}
      onCodeInput={props.login.setCode}
      onVerify={props.login.verify}
      onResend={() => fireAndForget(props.login.resend(), 'auth')}
      onBack={props.login.back}
    />
  );
}
