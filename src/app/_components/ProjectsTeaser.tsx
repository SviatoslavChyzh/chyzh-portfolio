import { ArrowRight } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import ProjectCard from '@/app/_components/ProjectCard';
import SectionHeading from '@/app/_components/SectionHeading';
import { sectionTimeline } from '@/app/_components/nav';
import { FEATURED_PROJECT_SLUGS, PROJECTS } from '@/app/constants';
import type { Locale } from '@/app/types';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

/** A few projects on the home page, with a link to the full projects page. */
export default async function ProjectsTeaser({ locale }: { locale: Locale }) {
  const t = await getTranslations('projects');
  const featured = FEATURED_PROJECT_SLUGS.flatMap(
    (slug) => PROJECTS.find((project) => project.slug === slug) ?? [],
  );

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-muted/60 border-y py-16 sm:py-24"
      style={sectionTimeline('projects')}
    >
      <div className="shell">
        <SectionHeading
          id="projects-heading"
          title={t('featuredTitle')}
          description={t('featuredDescription')}
        />

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <li key={project.slug} className="reveal">
              <ProjectCard project={project} locale={locale} variant="compact" />
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              {t('viewAll')}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
