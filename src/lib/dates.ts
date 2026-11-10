/**
 * Formats a `Period` date for display: `'2019-10'` → `Oct 2019` / `Okt. 2019`,
 * `'2009'` → `2009`. The input doubles as the `<time datetime>` value.
 */
export function formatPeriodDate(value: string, locale: string): string {
  const [year, month] = value.split('-').map(Number);

  if (!month) {
    return String(year);
  }

  return new Intl.DateTimeFormat(locale, {
    month: 'short',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, 1)));
}
