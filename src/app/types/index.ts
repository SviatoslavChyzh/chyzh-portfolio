import type { routing } from '@/i18n/routing';

export type Locale = (typeof routing.locales)[number];

/** A value that has to be provided for every supported locale. */
export type Localized<T = string> = Record<Locale, T>;

/**
 * A time span. Dates are either a month (`'2019-10'`) or a whole year (`'2009'`),
 * which is also exactly what `<time datetime>` accepts. `end: null` means ongoing.
 */
export type Period = {
  start: string;
  end: string | null;
};
