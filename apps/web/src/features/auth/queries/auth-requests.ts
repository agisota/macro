import { SERVER_HOSTS } from '@core/constant/servers';
import { platformFetch } from '@core/util/platformFetch';
import { authServiceClient } from '@service-auth/client';
import type {
  PasskeyLookup,
  PasskeyResult,
  SendCodeResult,
  VerifyCodeResult,
} from '../context/auth-context';

/** Where the passwordless magic link returns. */
const REDIRECT_URI = `${window.location.origin}/app`;

/** The one account that signs in with a password instead of a code. */
const PASSWORD_LOGIN_EMAIL_SHA256 =
  '0d10222b5594dbb0eb5d2bccbc9b5d8e9ff83e99421b573fb32c8a7b74491c81';

async function isPasswordLogin(email: string) {
  const digest = await crypto.subtle.digest(
    'SHA-256',
    new TextEncoder().encode(email.toLowerCase())
  );
  const hex = Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
  return hex === PASSWORD_LOGIN_EMAIL_SHA256;
}

const referralCode = () =>
  new URL(window.location.href).searchParams.get('referral_code');

/** The service's 400 for an unknown address sent without a signup handle. */
const HANDLE_REQUIRED = 'handle is required';

/** Starts passwordless sign-in, or signs in a password account directly. */
export async function sendEmailCode(input: {
  email: string;
  handle?: string;
  password?: string;
  isAgent: boolean;
}): Promise<SendCodeResult> {
  const { email, handle, password, isAgent } = input;
  if (await isPasswordLogin(email)) {
    if (!password) return { t: 'password-required' };
    const tokens = await authServiceClient.passwordLogin({ password, email });
    return tokens.isErr()
      ? {
          t: 'failed',
          message:
            'Failed to login. Check your email and password then try again.',
        }
      : { t: 'signed-in' };
  }

  const referral_code = referralCode();
  const response = await platformFetch(
    `${SERVER_HOSTS['auth-service']}/login/passwordless`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        redirect_uri: REDIRECT_URI,
        email,
        ...(handle && { handle }),
        ...(referral_code && { referral_code }),
        ...(isAgent && { is_agent: true }),
      }),
    }
  ).catch(() => undefined);
  if (!response) return { t: 'failed', message: 'Unable to reach Rox.' };
  if (!response.ok) {
    const message = await response.text();
    // An unknown address needs a handle; the form asks for one and resends.
    if (
      response.status === 400 &&
      message.trim().toLowerCase().includes(HANDLE_REQUIRED)
    )
      return { t: 'handle-required' };
    return { t: 'failed', message };
  }

  // 202: the address must sign in through its organization's identity provider.
  if (response.status === 202) {
    const body: unknown = await response.json().catch(() => undefined);
    if (
      !body ||
      typeof body !== 'object' ||
      !('idp_id' in body) ||
      typeof body.idp_id !== 'string' ||
      !body.idp_id
    )
      return {
        t: 'failed',
        message: 'Unable to start SSO login for this email.',
      };
    const sso = new URL(`${SERVER_HOSTS['auth-service']}/login/sso`);
    sso.searchParams.set('idp_id', body.idp_id);
    sso.searchParams.set('login_hint', email);
    if (referral_code) sso.searchParams.set('referral_code', referral_code);
    window.location.href = sso.toString();
    return { t: 'redirected' };
  }

  // Local backends return the code so seeded persona logins skip the inbox.
  if (import.meta.env.DEV) {
    const body = (await response.json().catch(() => undefined)) as
      | { code?: string }
      | undefined;
    if (body?.code) return { t: 'code-sent', autoCode: body.code };
  }
  return { t: 'code-sent' };
}

export async function verifyEmailCode(input: {
  email: string;
  code: string;
}): Promise<VerifyCodeResult> {
  const result = await authServiceClient.passwordlessCallback(input);
  if (result.isOk()) return { t: 'verified' };
  const code = result.error[0]?.code;
  if (code === 'UNAUTHORIZED') return { t: 'invalid-code' };
  if (code === 'RATE_LIMITED') return { t: 'rate-limited' };
  return { t: 'failed' };
}

const PASSKEY_BROWSER = 'This browser cannot add a passkey.';
const PASSKEY_MISSING = 'No passkey was created.';
const PASSKEY_UNREACHABLE = 'Unable to reach Rox.';

function bytesFromBase64Url(value: string): Uint8Array {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/');
  const pad =
    padded.length % 4 === 0
      ? padded
      : padded + '='.repeat(4 - (padded.length % 4));
  const binary = atob(pad);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1)
    bytes[index] = binary.charCodeAt(index);
  return bytes;
}

function base64UrlFromBytes(bytes: Uint8Array): string {
  let binary = '';
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

async function postPasskey(
  path: string,
  body: Record<string, string>
): Promise<{ ok: true } | { ok: false; message: string }> {
  const response = await platformFetch(
    `${SERVER_HOSTS['auth-service']}${path}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    }
  ).catch(() => undefined);
  if (!response) return { ok: false, message: PASSKEY_UNREACHABLE };
  if (!response.ok) {
    const message = (await response.text()).trim();
    return { ok: false, message: message || PASSKEY_UNREACHABLE };
  }
  return { ok: true };
}

async function issuedChallenge(
  email: string
): Promise<{ challenge: Uint8Array } | { message: string }> {
  const response = await platformFetch(
    `${SERVER_HOSTS['auth-service']}/login/passwordless/passkey/challenge`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
  ).catch(() => undefined);
  if (!response) return { message: PASSKEY_UNREACHABLE };
  if (!response.ok) {
    const message = (await response.text()).trim();
    return { message: message || PASSKEY_UNREACHABLE };
  }
  const body = (await response.json().catch(() => undefined)) as
    | { challenge?: string }
    | undefined;
  if (!body?.challenge) return { message: PASSKEY_UNREACHABLE };
  return { challenge: bytesFromBase64Url(body.challenge) };
}

/** Looks up a stored passkey. A missing route means this email has none. */
export async function passkeyMode(email: string): Promise<PasskeyLookup> {
  const response = await platformFetch(
    `${SERVER_HOSTS['auth-service']}/login/passwordless/passkey/lookup`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    }
  ).catch(() => undefined);
  if (!response?.ok) return 'none';
  const body = (await response.json().catch(() => undefined)) as
    | { stored?: boolean }
    | undefined;
  return body?.stored ? 'assert' : 'none';
}

/** Creates a passkey with a server challenge and stores the attestation bytes. */
export async function registerPasskey(input: {
  email: string;
}): Promise<PasskeyResult> {
  if (!navigator.credentials?.create)
    return { t: 'failed', message: PASSKEY_BROWSER };
  const issued = await issuedChallenge(input.email);
  if ('message' in issued) return { t: 'failed', message: issued.message };
  let credential: Credential | null;
  try {
    credential = await navigator.credentials.create({
      publicKey: {
        challenge: issued.challenge,
        rp: { name: 'Rox', id: window.location.hostname },
        user: {
          id: new TextEncoder().encode(input.email),
          name: input.email,
          displayName: input.email,
        },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }],
        authenticatorSelection: {
          residentKey: 'preferred',
          userVerification: 'preferred',
        },
        timeout: 60_000,
      },
    });
  } catch {
    return { t: 'failed', message: PASSKEY_MISSING };
  }
  if (!credential || credential.type !== 'public-key')
    return { t: 'failed', message: PASSKEY_MISSING };
  const created = credential as PublicKeyCredential;
  const attestation = created.response as AuthenticatorAttestationResponse;
  if (!attestation.attestationObject)
    return { t: 'failed', message: PASSKEY_MISSING };
  const stored = await postPasskey('/login/passwordless/passkey', {
    email: input.email,
    credential_id: created.id,
    client_data_json: base64UrlFromBytes(
      new Uint8Array(attestation.clientDataJSON)
    ),
    attestation_object: base64UrlFromBytes(
      new Uint8Array(attestation.attestationObject)
    ),
  });
  return stored.ok
    ? { t: 'registered' }
    : { t: 'failed', message: stored.message };
}

/** Uses the passkey already stored for this email. */
export async function assertPasskey(input: {
  email: string;
}): Promise<PasskeyResult> {
  if (!navigator.credentials?.get)
    return { t: 'failed', message: PASSKEY_BROWSER };
  const issued = await issuedChallenge(input.email);
  if ('message' in issued) return { t: 'failed', message: issued.message };
  let credential: Credential | null;
  try {
    credential = await navigator.credentials.get({
      publicKey: {
        challenge: issued.challenge,
        userVerification: 'preferred',
        timeout: 60_000,
      },
    });
  } catch {
    return { t: 'failed', message: PASSKEY_MISSING };
  }
  if (!credential || credential.type !== 'public-key')
    return { t: 'failed', message: PASSKEY_MISSING };
  const asserted = credential as PublicKeyCredential;
  const assertion = asserted.response as AuthenticatorAssertionResponse;
  const stored = await postPasskey('/login/passwordless/passkey/assert', {
    email: input.email,
    credential_id: asserted.id,
    client_data_json: base64UrlFromBytes(
      new Uint8Array(assertion.clientDataJSON)
    ),
  });
  return stored.ok
    ? { t: 'asserted' }
    : { t: 'failed', message: stored.message };
}

/** Exchanges the session code an SSO return carries for session cookies. */
export async function exchangeSessionCode(token: string): Promise<boolean> {
  const result = await authServiceClient.sessionLogin({ session_code: token });
  if (result.isErr())
    console.error('Failed to redeem session code', result.error);
  return result.isOk();
}
