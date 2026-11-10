import { Mail } from 'lucide-react';
import type { Metadata, Route } from 'next';
import Link from 'next/link';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import ProjectCard from '@/app/_components/ProjectCard';
import { PROJECTS, SITE } from '@/app/constants';
import type { Locale } from '@/app/types';
import { Button } from '@/components/ui/button';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const t = await getTranslations({ locale: lang as Locale, namespace: 'metadata' });

  return {
    title: t('projectsTitle'),
    description: t('projectsDescription'),
    alternates: {
      canonical: `/${lang}/projects`,
      languages: { en: '/en/projects', de: '/de/projects', 'x-default': '/en/projects' },
    },
    openGraph: {
      title: `${t('projectsTitle')} | ${SITE.name}`,
      description: t('projectsDescription'),
      url: `/${lang}/projects`,
    },
  };
}

export default async function ProjectsPage({ params }: PageProps) {
  const { lang } = await params;
  // The layout has already rejected unknown locales.
  const locale = lang as Locale;
  setRequestLocale(locale);

  const t = await getTranslations('projects');
  const [featured, ...others] = PROJECTS;

  return (
    <main id="main" tabIndex={-1} className="flex-1 pt-(--header-height) focus:outline-none">
      <div className="bg-muted/60 border-b">
        <div className="shell py-14 sm:py-20">
          <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl">
            {t('title')}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-2xl text-lg text-pretty sm:text-xl">
            {t('intro')}
          </p>
        </div>
      </div>

      <div className="shell py-12 sm:py-16">
        <ul className="grid gap-8 md:grid-cols-2">
          <li className="md:col-span-2">
            <ProjectCard
              project={featured}
              locale={locale}
              variant="featured"
              headingLevel="h2"
              eager
            />
          </li>
          {others.map((project) => (
            <li key={project.slug} className="reveal">
              <ProjectCard project={project} locale={locale} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </div>

      <section aria-labelledby="projects-cta-heading" className="bg-muted/60 border-t">
        <div className="shell flex flex-col items-center gap-4 py-14 text-center sm:py-20">
          <h2
            id="projects-cta-heading"
            className="text-2xl font-bold tracking-tight text-balance sm:text-3xl"
          >
            {t('ctaTitle')}
          </h2>
          <p className="text-muted-foreground max-w-xl text-lg text-pretty">{t('ctaText')}</p>
          <Button asChild size="lg" className="mt-2">
            <Link href={`/${locale}#contact` as Route}>
              <Mail aria-hidden="true" />
              {t('ctaButton')}
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
