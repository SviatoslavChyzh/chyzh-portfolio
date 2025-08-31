import HeroSection from '@/app/_components/HeroSection';
import Experience from '@/app/_components/Experience';
import type { Locale } from '@/app/types';
import Education from '@/app/_components/Education';
import Contact from '@/app/_components/Contact';
import Skills from '@/app/_components/Skills';
// import { routing } from '@/i18n/routing';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

// export function generateStaticParams() {
//   return routing.locales.map((locale) => ({ locale }));
// }

export default async function Home({
  params,
}: {
  params: Promise<{ parish: string; lang: Locale }>;
}) {
  const { lang } = await params;

  return (
    <main>
      <HeroSection />
      <Skills />
      <Experience lang={lang} />
      <Education />
      <Contact />
    </main>
  );
}
