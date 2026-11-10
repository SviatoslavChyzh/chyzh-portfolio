import { ArrowRight, ArrowUpRight, Check } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import type { Project } from '@/app/constants';
import type { Locale } from '@/app/types';
import { Badge } from '@/components/ui/badge';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

type ProjectCardProps = {
  project: Project;
  locale: Locale;
  /**
   * - `default`: full card that links to the live site.
   * - `featured`: like default, with a wide image and the highlights next to the text.
   * - `compact`: teaser without the highlight list that links to the projects page.
   */
  variant?: 'default' | 'featured' | 'compact';
  headingLevel?: 'h2' | 'h3';
  /** Load the screenshot eagerly (for the first card on the page). */
  eager?: boolean;
};

const IMAGE_SIZES: Record<NonNullable<ProjectCardProps['variant']>, string> = {
  default: '(min-width: 768px) 50vw, 100vw',
  featured: '(min-width: 1152px) 1104px, 100vw',
  compact: '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw',
};

// The link's ::after covers the whole card, so the card is one large click target
// while screen readers and keyboards still get exactly one link per project.
const linkClassName =
  'text-primary inline-flex min-h-11 items-center gap-1.5 font-semibold underline-offset-4 after:absolute after:inset-0 after:content-[""] hover:underline focus-visible:outline-none';

export default async function ProjectCard({
  project,
  locale,
  variant = 'default',
  headingLevel: Heading = 'h3',
  eager = false,
}: ProjectCardProps) {
  const t = await getTranslations('projects');
  const tCommon = await getTranslations('common');
  const name = project.name[locale];
  const isFeatured = variant === 'featured';
  const isCompact = variant === 'compact';

  return (
    <article
      id={isCompact ? undefined : project.slug}
      className={cn(
        'group bg-card has-[a:focus-visible]:outline-ring relative flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2',
      )}
    >
      <div
        className={cn(
          'bg-muted relative aspect-16/10 overflow-hidden border-b',
          isFeatured && 'lg:aspect-21/10',
        )}
      >
        <Image
          src={project.image}
          alt={t('screenshotAlt', { name })}
          fill
          sizes={IMAGE_SIZES[variant]}
          loading={eager ? 'eager' : 'lazy'}
          className="object-cover object-top motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.03]"
        />
      </div>

      <div
        className={cn(
          'flex flex-1 flex-col gap-4 p-6',
          !isCompact && 'sm:p-8',
          // Wide screens: text in the first column, highlights in a panel beside it.
          isFeatured &&
            'lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:content-start lg:gap-x-12 lg:*:col-start-1',
        )}
      >
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm font-medium">
            {project.kind[locale]} · {project.year}
          </p>
          <Heading
            className={cn(
              'font-semibold tracking-tight text-balance',
              isCompact ? 'text-xl' : 'text-2xl',
            )}
          >
            {name}
          </Heading>
        </div>

        <p className={cn('leading-relaxed text-pretty', isCompact && 'text-sm')}>
          {project.description[locale]}
        </p>

        {isCompact ? null : (
          <ul
            aria-label={t('highlights')}
            className={cn(
              'space-y-2 text-sm',
              isFeatured &&
                'lg:bg-muted/70 lg:col-start-2! lg:row-span-4 lg:row-start-1 lg:space-y-3 lg:self-start lg:rounded-lg lg:p-6',
            )}
          >
            {project.highlights[locale].map((highlight) => (
              <li key={highlight} className="flex gap-2.5">
                <Check className="text-primary mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        <ul aria-label={t('stack')} className="flex flex-wrap gap-2">
          {project.stack.map((technology) => (
            <li key={technology} className="flex">
              <Badge variant="secondary">{technology}</Badge>
            </li>
          ))}
        </ul>

        <p className="mt-auto flex flex-wrap items-center gap-x-4 pt-2">
          {isCompact ? (
            <Link href={`/projects#${project.slug}`} className={linkClassName}>
              {t('details')}
              <span className="sr-only">: {name}</span>
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          ) : (
            <>
              <a href={project.url} target="_blank" rel="noreferrer" className={linkClassName}>
                {t('visit')}
                <span className="sr-only">
                  : {name} ({tCommon('opensInNewTab')})
                </span>
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
              <span className="text-muted-foreground text-sm">{project.displayUrl}</span>
            </>
          )}
        </p>
      </div>
    </article>
  );
}
