declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    ANALYZE?: 'true';
    API_KEY: string;
    API_SECRET: string;

    SERVER_PORT: string;
    SERVER_HOSTNAME: string;
  }
}