import { stack } from '../../shared';

export function getRoxDbSecretName() {
  return stack === 'prod' ? 'macro-db-prod' : 'macro-db-dev';
}

export function getRoxDbEnv() {
  return {
    DATABASE_URL_SECRET_NAME: getRoxDbSecretName(),
  };
}
