export type Env = 'dev' | 'prod' | 'local';

/** The backend services the SDK talks to. Note `search` and `properties` are
 * served on the storage host, so they point there. */
export type ServiceName =
  | 'agent-harness'
  | 'storage'
  | 'auth'
  | 'email'
  | 'calendar'
  | 'cognition'
  | 'notification'
  | 'properties'
  | 'search'
  | 'scheduled-action'
  | 'static-files'
  | 'connection'
  | 'contacts'
  | 'unfurl';

export const WEB_APP_URLS: Record<Env, string> = {
  dev: 'https://dev.rox.one',
  prod: 'https://rox.one',
  local: 'http://localhost:3000',
};

export const HOSTS: Record<Env, Record<ServiceName, string>> = {
  dev: {
    'agent-harness': 'https://dev-gateway.rox.one/agent-harness',
    storage: 'https://dev-gateway.rox.one/dss',
    auth: 'https://dev-gateway.rox.one/auth',
    email: 'https://dev-gateway.rox.one/email',
    calendar: 'https://dev-gateway.rox.one/calendar',
    cognition: 'https://dev-gateway.rox.one/cognition',
    notification: 'https://dev-gateway.rox.one/notification',
    properties: 'https://dev-gateway.rox.one/dss',
    search: 'https://dev-gateway.rox.one/dss',
    'scheduled-action': 'https://dev-gateway.rox.one/scheduled-action',
    'static-files': 'https://static-file-service-dev.rox.one',
    connection: 'https://dev-gateway.rox.one/connection-gateway',
    contacts: 'https://dev-gateway.rox.one/contacts',
    unfurl: 'https://dev-gateway.rox.one/unfurl',
  },
  prod: {
    'agent-harness': 'https://gateway.rox.one/agent-harness',
    storage: 'https://gateway.rox.one/dss',
    auth: 'https://gateway.rox.one/auth',
    email: 'https://gateway.rox.one/email',
    calendar: 'https://gateway.rox.one/calendar',
    cognition: 'https://gateway.rox.one/cognition',
    notification: 'https://gateway.rox.one/notification',
    properties: 'https://gateway.rox.one/dss',
    search: 'https://gateway.rox.one/dss',
    'scheduled-action': 'https://gateway.rox.one/scheduled-action',
    'static-files': 'https://static-file-service.rox.one',
    connection: 'https://gateway.rox.one/connection-gateway',
    contacts: 'https://gateway.rox.one/contacts',
    unfurl: 'https://gateway.rox.one/unfurl',
  },
  local: {
    'agent-harness': 'http://localhost:8101',
    storage: 'http://localhost:8086',
    auth: 'http://localhost:8080',
    email: 'http://localhost:8087',
    // calendar_service serves its routes under `/calendar` as well as at the
    // root; the `/calendar` segment keeps local paths identical to the
    // gateway's. Mirrors apps/web servers.ts.
    calendar: 'http://localhost:8088/calendar',
    cognition: 'http://localhost:8101/cognition',
    notification: 'http://localhost:8089',
    properties: 'http://localhost:8086',
    search: 'http://localhost:8086',
    'scheduled-action': 'http://localhost:8101/scheduled-action',
    'static-files': 'http://localhost:8100',
    connection: 'http://localhost:8082',
    contacts: 'http://localhost:8083',
    unfurl: 'http://localhost:8095',
  },
};

/** A credential string, or a (possibly async) function that returns one. */
export type TokenSource = string | (() => string | Promise<string>);

/** Access scope for bot-authenticated requests. `user` acts with the
 * requested-as user's access (requires `requestedAs`); `team` acts with the
 * bot's owning team's access (team-owned bots only). */
export type BotScope = 'user' | 'team';

/**
 * How the SDK authenticates with Macro.
 *
 * A user has exactly one of two credential fields.
 *
 * - `token`: a bearer token, or a `mak_` API key. The SDK picks the header
 *   from the prefix at send time.
 * - `apiKey`: a Settings → API Keys key, always sent as
 *   `x-macro-user-api-key`. Not prefix-checked, so keys that predate the
 *   `mak_` prefix work here.
 *
 * A bot uses an `mbot_` token as `x-macro-bot-token` plus
 * `x-macro-bot-scope`, defaulting to `user` when `requestedAs` is set and
 * `team` otherwise.
 */
export type MacroAuth =
  | { type: 'user'; token: TokenSource; apiKey?: never }
  | { type: 'user'; apiKey: string; token?: never }
  | { type: 'bot'; token: TokenSource; scope?: BotScope };

/** Options passed to `new Macro(opts)` and stored on `MacroClient`. */
export interface MacroOpts {
  /** Optional generated API operation events; excludes arguments, URLs and response data. */
  onRequest?: (event: import('./utils/activity').RequestActivity) => void;
  /** How to authenticate. Takes precedence over `token`. Falls back to
   * `MACRO_API_KEY` (a user API key or bearer token) or `MACRO_BOT_TOKEN`
   * (bot). */
  auth?: MacroAuth;
  /** Shorthand for `auth: { type: 'user', token }`. Accepts a Settings API
   * key (`mak_…`) or a bearer token. */
  token?: TokenSource;
  /** Which Macro environment to talk to. Falls back to the MACRO_ENV env
   * var, then `'prod'`. */
  env?: Env;
  /** Override individual service hosts (e.g. point one at localhost). */
  hosts?: Partial<Record<ServiceName, string>>;
  /** Override the web app base URL (e.g. for local frontend dev). Also reads MACRO_WEB_URL. */
  webAppUrl?: string;
  /**
   * Signing secret for verifying incoming persisted-webhook deliveries.
   * Required only for `macro.events.webhook()` / `macro.events.handle()`.
   * SSE via `macro.events.listen()` uses the API token and does not need
   * this. Falls back to MACRO_WEBHOOK_SECRET.
   */
  webhookSecret?: string;
  wsVerify?: string;
  /** User id the bot acts for, sent as `x-macro-bot-for-macro-user-id` on
   * every request. Bot auth only. Set via `macro.requestedAs(user)` rather
   * than directly. */
  requestedAs?: string;
}
