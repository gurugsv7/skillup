/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_SUPABASE_SERVICE_ROLE_KEY: string;
  readonly VITE_RESEND_API_KEY: string;
  readonly VITE_POSTHOG_API_KEY: string;
  readonly VITE_POSTHOG_API_HOST: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_ENVIRONMENT: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
