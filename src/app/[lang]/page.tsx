import HeroSection from '@/app/_components/HeroSection';
import Experience from '@/app/_components/Experience';
import type { Locale } from '@/app/types';
import Education from '@/app/_components/Education';
import Contact from '@/app/_components/Contact';

export const dynamic = 'force-dynamic';
export const runtime = 'edge';

export default async function Home({
  params,
}: {
  params: Promise<{ parish: string; lang: Locale }>;
}) {
  const { lang } = await params;
  return (
    <main>
      <HeroSection lang={lang} />
      <Experience lang={lang} />
      <Education />
      <Contact />
    </main>
  );
}
