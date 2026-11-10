import type messages from '@/app/messages/en.json';
import type { routing } from '@/i18n/routing';

// Type-checks translation keys and locales across the app.
declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof messages;
  }
}
