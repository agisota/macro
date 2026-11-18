import { stack } from '../../../shared';

const PROD_LOCAL_ORIGINS = [
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:3002',
  'http://localhost:3003',
  'http://localhost:3004',
  'http://localhost:3005',
  'http://localhost:3006',
  'http://localhost:3007',
  'http://localhost:3008',
  'http://localhost:3009',
  'https://localhost:3000',
  'https://localhost:3001',
  'https://localhost:3002',
  'https://localhost:3003',
  'https://localhost:3004',
  'https://localhost:3005',
  'https://localhost:3006',
  'https://localhost:3007',
  'https://localhost:3008',
  'https://localhost:3009',
];

// Browsers upload straight to presigned S3 URLs, so a local frontend on any
// port needs CORS against non-prod buckets.
const NON_PROD_LOCAL_ORIGINS = ['http://localhost:*', 'https://localhost:*'];

const SHARED_ORIGINS = [
  'http://host.local:3000',
  'https://app-dev.rox.one',
  'https://app-staging.rox.one',
  'https://app-prod.rox.one',
  'https://app.rox.one',
  'https://dev.rox.one',
  'https://chat-dev.rox.one',
  'https://chat.rox.one',
  'https://staging.rox.one',
  'https://prod.rox.one',
  'https://www.rox.one',
  'https://rox.one',
  'https://website-dev.rox.one',
  'https://website-staging.rox.one',
  'https://website-prod.rox.one',
  'https://apollo-testing.rox.one',
  // S3 CORS supports a single wildcard in AllowedOrigin. This lets feature
  // preview apps (for example, https://branch.preview.rox.one) load
  // presigned S3 media such as call recordings.
  'https://*.preview.rox.one',
  'tauri://localhost',
];

/** Browser origins allowed by S3 bucket CORS rules on the current Pulumi stack. */
export const ALLOWED_ORIGINS = [
  ...(stack === 'prod' ? PROD_LOCAL_ORIGINS : NON_PROD_LOCAL_ORIGINS),
  ...SHARED_ORIGINS,
];
