import * as Sentry from "@sentry/react";

export function initializeSentry() {
  if (import.meta.env.VITE_SENTRY_DSN) {
    const integrations: any[] = [];
    
    // Add Replay integration if available
    try {
      integrations.push(
        new (Sentry as any).Replay({
          maskAllText: true,
          blockAllMedia: true,
        })
      );
    } catch (e) {
      console.warn('Sentry Replay integration not available');
    }

    Sentry.init({
      dsn: import.meta.env.VITE_SENTRY_DSN,
      environment: import.meta.env.VITE_ENVIRONMENT || 'production',
      integrations,
      tracesSampleRate: import.meta.env.VITE_ENVIRONMENT === 'production' ? 0.1 : 1.0,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
    });
  }
}

export function captureException(error: Error, context?: Record<string, any>) {
  Sentry.captureException(error, {
    contexts: {
      custom: context,
    },
  });
}

export function captureMessage(message: string, level: 'fatal' | 'error' | 'warning' | 'info' | 'debug' = 'info') {
  Sentry.captureMessage(message, level);
}

export function setUserContext(userId: string, email?: string, metadata?: Record<string, any>) {
  Sentry.setUser({
    id: userId,
    email,
    ...metadata,
  });
}

export function clearUserContext() {
  Sentry.setUser(null);
}
