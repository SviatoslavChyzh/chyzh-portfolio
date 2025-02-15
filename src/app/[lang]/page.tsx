import { getDictionary } from '@/app/[lang]/dictionaries';
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
  const { navigationTitle } = await getDictionary(lang);
  return (
    <main>
      <HeroSection lang={lang} />
      <Experience lang={lang} />
      <Education />
      <Contact />
      {/*<div className="h-screen bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_90%)]">*/}
      {/*  Home*/}
      {/*</div>*/}
      {/*test*/}
      <div className="hidden">{navigationTitle}</div>
    </main>
  );
}
