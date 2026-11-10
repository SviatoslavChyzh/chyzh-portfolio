import type { Locale, Period } from '@/app/types';
import { formatPeriodDate } from '@/lib/dates';

type PeriodRangeProps = {
  period: Period;
  locale: Locale;
  /** Shown instead of an end date for ongoing periods, e.g. "Present". */
  presentLabel: string;
  /** Read by screen readers in place of the dash, e.g. "to". */
  toLabel: string;
};

/** "Oct 2019 – Present", marked up with machine-readable `<time>` elements. */
export default function PeriodRange({ period, locale, presentLabel, toLabel }: PeriodRangeProps) {
  return (
    <>
      <time dateTime={period.start}>{formatPeriodDate(period.start, locale)}</time>
      <span aria-hidden="true"> – </span>
      <span className="sr-only"> {toLabel} </span>
      {period.end ? (
        <time dateTime={period.end}>{formatPeriodDate(period.end, locale)}</time>
      ) : (
        presentLabel
      )}
    </>
  );
}
