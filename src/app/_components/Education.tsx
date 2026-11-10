import { Award, CalendarDays, GraduationCap, type LucideIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import PeriodRange from '@/app/_components/PeriodRange';
import SectionHeading from '@/app/_components/SectionHeading';
import { sectionTimeline } from '@/app/_components/nav';
import { EDUCATION, type EducationItem } from '@/app/constants';
import type { Locale } from '@/app/types';

const KIND_ICONS: Record<EducationItem['kind'], LucideIcon> = {
  degree: GraduationCap,
  certificate: Award,
};

export default async function Education({ locale }: { locale: Locale }) {
  const t = await getTranslations('education');
  const tCommon = await getTranslations('common');

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 sm:py-24"
      style={sectionTimeline('education')}
    >
      <div className="shell">
        <SectionHeading id="education-heading" title={t('title')} />

        <ul className="mt-12 grid gap-6 md:grid-cols-2">
          {EDUCATION.map((item) => {
            const Icon = KIND_ICONS[item.kind];

            return (
              <li
                key={item.id}
                className="reveal bg-card flex gap-5 rounded-xl border p-6 shadow-sm sm:p-8"
              >
                <span
                  className="bg-secondary text-secondary-foreground flex size-12 shrink-0 items-center justify-center rounded-lg"
                  aria-hidden="true"
                >
                  <Icon className="size-6" />
                </span>
                <div className="space-y-2">
                  <p className="text-muted-foreground text-sm font-medium">{t(item.kind)}</p>
                  <h3 className="text-lg font-semibold tracking-tight text-balance">
                    {item.title[locale]}
                  </h3>
                  <p className="text-primary font-medium text-pretty">{item.institution[locale]}</p>
                  <p className="text-muted-foreground flex items-center gap-2 text-sm">
                    <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                    <span>
                      <PeriodRange
                        period={item.period}
                        locale={locale}
                        presentLabel={tCommon('present')}
                        toLabel={tCommon('to')}
                      />
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
