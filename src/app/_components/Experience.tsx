import { ArrowRight, ArrowUpRight, CalendarDays } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import PeriodRange from '@/app/_components/PeriodRange';
import SectionHeading from '@/app/_components/SectionHeading';
import { sectionTimeline } from '@/app/_components/nav';
import { JOB_EXPERIENCE, type JobLink } from '@/app/constants';
import type { Locale } from '@/app/types';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

const pillClassName =
  'inline-flex h-11 items-center gap-1.5 rounded-full border border-input bg-background px-4 text-sm font-medium';
const pillLinkClassName = cn(
  pillClassName,
  'transition-colors hover:bg-accent hover:text-accent-foreground',
);

function ProjectPill({ project, newTabLabel }: { project: JobLink; newTabLabel: string }) {
  if (!project.href) {
    return <span className={pillClassName}>{project.name}</span>;
  }

  if (project.internal) {
    return (
      <Link href={project.href} className={pillLinkClassName}>
        {project.name}
        <ArrowRight className="size-4" aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a href={project.href} target="_blank" rel="noreferrer" className={pillLinkClassName}>
      {project.name}
      <ArrowUpRight className="size-4" aria-hidden="true" />
      <span className="sr-only">({newTabLabel})</span>
    </a>
  );
}

export default async function Experience({ locale }: { locale: Locale }) {
  const t = await getTranslations('experience');
  const tCommon = await getTranslations('common');

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-muted/60 border-y py-16 sm:py-24"
      style={sectionTimeline('experience')}
    >
      <div className="shell">
        <SectionHeading id="experience-heading" title={t('title')} description={t('description')} />

        <ol className="md:before:bg-input/50 relative mt-12 space-y-6 md:before:absolute md:before:inset-y-3 md:before:left-[7px] md:before:w-px">
          {JOB_EXPERIENCE.map((job) => {
            const isCurrent = job.period.end === null;
            const projectsLabelId = `${job.id}-projects`;

            return (
              <li key={job.id} className="reveal relative md:pl-10">
                <span
                  className={cn(
                    'border-background absolute top-9 left-0 hidden size-[15px] rounded-full border-2 md:block',
                    isCurrent ? 'bg-primary ring-primary/25 ring-4' : 'bg-input',
                  )}
                  aria-hidden="true"
                />

                <article
                  className={cn(
                    'bg-card grid gap-6 rounded-xl border p-6 shadow-sm sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-10',
                    isCurrent && 'border-primary/50 shadow-md',
                  )}
                >
                  <header className="space-y-3">
                    {isCurrent ? <Badge>{t('current')}</Badge> : null}
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-balance">
                        {job.title[locale]}
                      </h3>
                      <p className="text-primary mt-1 font-medium">{job.company}</p>
                    </div>
                    <p className="text-muted-foreground flex items-center gap-2 text-sm">
                      <CalendarDays className="size-4 shrink-0" aria-hidden="true" />
                      <span>
                        <PeriodRange
                          period={job.period}
                          locale={locale}
                          presentLabel={tCommon('present')}
                          toLabel={tCommon('to')}
                        />
                      </span>
                    </p>
                    {job.stack ? (
                      <ul aria-label={t('stack')} className="flex flex-wrap gap-2 pt-1">
                        {job.stack.map((technology) => (
                          <li key={technology} className="flex">
                            <Badge variant="secondary">{technology}</Badge>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </header>

                  <div className="space-y-5">
                    {job.summary ? (
                      <p className="text-muted-foreground leading-relaxed text-pretty">
                        {job.summary[locale]}
                      </p>
                    ) : null}

                    <ul className="marker:text-primary list-disc space-y-2.5 pl-5 leading-relaxed">
                      {job.highlights[locale].map((highlight) => (
                        <li key={highlight} className="pl-1 text-pretty">
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {job.projects ? (
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-1">
                        <p id={projectsLabelId} className="text-sm font-semibold">
                          {t('projects')}:
                        </p>
                        <ul aria-labelledby={projectsLabelId} className="flex flex-wrap gap-2">
                          {job.projects.map((project) => (
                            <li key={project.name}>
                              <ProjectPill
                                project={project}
                                newTabLabel={tCommon('opensInNewTab')}
                              />
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
