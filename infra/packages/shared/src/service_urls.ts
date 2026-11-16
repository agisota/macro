import { stack } from '.';

/** Public OAuth identities remain stable when their processes move to the harness. */
export const AGENT_PUBLIC_URLS = {
  cognition: `https://document-cognition${stack === 'prod' ? '' : `-${stack}`}.rox.one`,
  mcp: `https://mcp-server${stack === 'prod' ? '' : `-${stack}`}.rox.one`,
};

/**
 * Service url for all macro services
 */
export enum ServiceUrl {
  APP_SERVICE_URL = 'APP_SERVICE_URL',
  PREVIEW_GATEWAY_URL = 'PREVIEW_GATEWAY_URL',
  SYNC_SERVICE_URL = 'SYNC_SERVICE_URL',
  EMAIL_SERVICE_URL = 'EMAIL_SERVICE_URL',
  STATIC_FILE_SERVICE_URL = 'STATIC_FILE_SERVICE_URL',
  NOTIFICATION_SERVICE_URL = 'NOTIFICATION_SERVICE_URL',
  AUTHENTICATION_SERVICE_URL = 'AUTHENTICATION_SERVICE_URL',
  DOCUMENT_STORAGE_SERVICE_URL = 'DOCUMENT_STORAGE_SERVICE_URL',
  CONNECTION_GATEWAY_URL = 'CONNECTION_GATEWAY_URL',
  DOCUMENT_COGNITION_SERVICE_URL = 'DOCUMENT_COGNITION_SERVICE_URL',
  LEXICAL_SERVICE_URL = 'LEXICAL_SERVICE_URL',
  UNFURL_SERVICE_URL = 'UNFURL_SERVICE_URL',
  AGENT_HARNESS_SERVICE_URL = 'AGENT_HARNESS_SERVICE_URL',
  AGENT_HARNESS_EGRESS_URL = 'AGENT_HARNESS_EGRESS_URL',
  MCP_SERVER_URL = 'MCP_SERVER_URL',
  MCP_CHATGPT_SERVICE_URL = 'MCP_CHATGPT_SERVICE_URL',
  CONNECT_API_URL = 'CONNECT_API_URL',
}

/**
 * Map of service URLs
 */
type ServiceUrlMap = {
  [K in ServiceUrl]: string;
};

/**
 * Dev Service URLs
 */
const DEV_SERVICE_URLS: ServiceUrlMap = {
  [ServiceUrl.APP_SERVICE_URL]: 'https://dev.rox.one',
  [ServiceUrl.PREVIEW_GATEWAY_URL]: 'https://dev-gateway.rox.one/preview',
  [ServiceUrl.SYNC_SERVICE_URL]:
    'https://sync-service-dev3.macroverse.workers.dev',
  [ServiceUrl.EMAIL_SERVICE_URL]: 'https://dev-gateway.rox.one/email',
  [ServiceUrl.STATIC_FILE_SERVICE_URL]:
    'https://static-file-service-dev.rox.one',
  [ServiceUrl.NOTIFICATION_SERVICE_URL]:
    'https://dev-gateway.rox.one/notification',
  [ServiceUrl.AUTHENTICATION_SERVICE_URL]: 'https://dev-gateway.rox.one/auth',
  [ServiceUrl.DOCUMENT_STORAGE_SERVICE_URL]:
    'https://dev-gateway.rox.one/dss',
  [ServiceUrl.CONNECTION_GATEWAY_URL]:
    'https://dev-gateway.rox.one/connection-gateway',
  [ServiceUrl.DOCUMENT_COGNITION_SERVICE_URL]:
    'https://dev-gateway.rox.one/cognition',
  [ServiceUrl.LEXICAL_SERVICE_URL]: 'https://dev-gateway.rox.one/lexical',
  [ServiceUrl.UNFURL_SERVICE_URL]: 'https://dev-gateway.rox.one/unfurl',
  [ServiceUrl.AGENT_HARNESS_SERVICE_URL]:
    'https://dev-gateway.rox.one/agent-harness',
  [ServiceUrl.AGENT_HARNESS_EGRESS_URL]:
    'https://dev-gateway.rox.one/agent-harness-egress',
  [ServiceUrl.MCP_SERVER_URL]: 'https://dev-gateway.rox.one/mcp',
  [ServiceUrl.MCP_CHATGPT_SERVICE_URL]:
    'https://mcp-chatgpt-worker-dev.macroverse.workers.dev',
  [ServiceUrl.CONNECT_API_URL]: 'https://connect-dev.rox.one',
};

/**
 * Prod Service URLs
 */
const PROD_SERVICE_URLS: ServiceUrlMap = {
  [ServiceUrl.APP_SERVICE_URL]: 'https://rox.one',
  [ServiceUrl.PREVIEW_GATEWAY_URL]: 'https://gateway.rox.one/preview',
  [ServiceUrl.SYNC_SERVICE_URL]:
    'https://sync-service-prod2.macroverse.workers.dev',
  [ServiceUrl.EMAIL_SERVICE_URL]: 'https://gateway.rox.one/email',
  [ServiceUrl.STATIC_FILE_SERVICE_URL]: 'https://static-file-service.rox.one',
  [ServiceUrl.NOTIFICATION_SERVICE_URL]:
    'https://gateway.rox.one/notification',
  [ServiceUrl.AUTHENTICATION_SERVICE_URL]: 'https://gateway.rox.one/auth',
  [ServiceUrl.DOCUMENT_STORAGE_SERVICE_URL]: 'https://gateway.rox.one/dss',
  [ServiceUrl.CONNECTION_GATEWAY_URL]:
    'https://gateway.rox.one/connection-gateway',
  [ServiceUrl.DOCUMENT_COGNITION_SERVICE_URL]:
    'https://gateway.rox.one/cognition',
  [ServiceUrl.LEXICAL_SERVICE_URL]: 'https://gateway.rox.one/lexical',
  [ServiceUrl.UNFURL_SERVICE_URL]: 'https://gateway.rox.one/unfurl',
  [ServiceUrl.AGENT_HARNESS_SERVICE_URL]:
    'https://gateway.rox.one/agent-harness',
  [ServiceUrl.AGENT_HARNESS_EGRESS_URL]:
    'https://gateway.rox.one/agent-harness-egress',
  [ServiceUrl.MCP_SERVER_URL]: 'https://gateway.rox.one/mcp',
  [ServiceUrl.MCP_CHATGPT_SERVICE_URL]:
    'https://mcp-chatgpt-worker.macroverse.workers.dev',
  [ServiceUrl.CONNECT_API_URL]: 'https://connect.rox.one',
};

/**
 * Singleton for service URLs
 */
let _SERVICE_URL_MAP: ServiceUrlMap | undefined;

/**
 * Gets the service URL map for the stack
 * @throws Error if there is no matching service for the given stack
 * @returns ServiceUrlMap
 */
function getServiceUrls(): ServiceUrlMap {
  if (stack === 'dev') {
    return DEV_SERVICE_URLS;
  } else if (stack === 'prod') {
    return PROD_SERVICE_URLS;
  }

  throw new Error(`Unknown stack: ${stack}`);
}

/**
 * Gets the service URL for a given service
 * @param service Service to get URL for
 * @returns Service URL
 */
export function getServiceUrl(service: ServiceUrl): string {
  // Initialize the singleton
  if (!_SERVICE_URL_MAP) {
    _SERVICE_URL_MAP = getServiceUrls();
  }

  return _SERVICE_URL_MAP[service];
}

/**
 * Gets the domain name for a given service
 * @param service Service to get URL for
 * @returns Domain name
 */
export function getDomainName(service: ServiceUrl): string {
  // Initialize the singleton
  if (!_SERVICE_URL_MAP) {
    _SERVICE_URL_MAP = getServiceUrls();
  }

  return _SERVICE_URL_MAP[service].replace('https://', '');
}
