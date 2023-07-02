// ========== Config
// import all modules
import 'dotenv/config'

export default {
  // Base Congfig
  NODE_ENV: String(process.env?.SERVICE_NODE_ENV ?? ''),
  PORT: Number(process.env?.SERVICE_PORT ?? 3000),
  WHITELIST: String(process.env?.SERVICE_WHITELIST ?? '').split(','),
  APP_URL: String(process.env?.SERVICE_APP_URL ?? ''),

  // Database Config
  DB_HOST: String(process.env?.SERVICE_DB_HOST ?? ''),
  DB_PORT: Number(process.env?.SERVICE_DB_PORT ?? 3006),
  DB_USERNAME: String(process.env?.SERVICE_DB_USERNAME ?? ''),
  DB_PASSWORD: String(process.env?.SERVICE_DB_PASSWORD ?? ''),
  DB_NAME: String(process.env?.SERVICE_DB_NAME ?? ''),

  // Database Pool Config
  DB_POOL_MIN: Number(process.env?.SERVICE_DB_POOL_MIN ?? 0),
  DB_POOL_MAX: Number(process.env?.SERVICE_DB_POOL_MAX ?? 0),
  DB_POOL_ACQUIRE: Number(process.env?.SERVICE_DB_POOL_ACQUIRE ?? 0),
  DB_POOL_LIMIT: Number(process.env?.SERVICE_DB_POOL_LIMIT ?? 0),

  // RediS Config
  REDIS_HOST: String(process.env?.SERVICE_REDIS_HOST ?? ''),
  REDIS_PORT: Number(process.env?.SERVICE_REDIS_PORT ?? 3006),
  REDIS_USERNAME: String(process.env?.SERVICE_REDIS_USERNAME ?? ''),
  REDIS_PASSWORD: String(process.env?.SERVICE_REDIS_PASSWORD ?? ''),

  // JWT Config
  JWT_ACCESS_TOKEN_KEY: String(process.env?.SERVICE_JWT_ACCESS_TOKEN_KEY ?? ''),
  JWT_ACCESS_TOKEN_EXPIRES: Number(process.env?.SERVICE_JWT_ACCESS_TOKEN_DURATION ?? 6379),
  JWT_REFRESH_TOKEN_KEY: String(process.env?.SERVICE_JWT_REFRESH_TOKEN_KEY ?? ''),
  JWT_REFRESH_TOKEN_EXPIRES: String(process.env?.SERVICE_JWT_REFRESH_TOKEN_DURATION ?? '')
}
