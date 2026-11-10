import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import Contact from '@/app/_components/Contact';
import Education from '@/app/_components/Education';
import Experience from '@/app/_components/Experience';
import HeroSection from '@/app/_components/HeroSection';
import ProjectsTeaser from '@/app/_components/ProjectsTeaser';
import Skills from '@/app/_components/Skills';
import type { Locale } from '@/app/types';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  return {
    alternates: {
      canonical: `/${lang}`,
      languages: { en: '/en', de: '/de', 'x-default': '/en' },
    },
    openGraph: { url: `/${lang}` },
  };
}

export default async function Home({ params }: PageProps) {
  const { lang } = await params;
  // The layout has already rejected unknown locales.
  const locale = lang as Locale;
  setRequestLocale(locale);

  return (
    <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
      <HeroSection />
      <Skills />
      <Experience locale={locale} />
      <Education locale={locale} />
      <ProjectsTeaser locale={locale} />
      <Contact />
    </main>
  );
}
