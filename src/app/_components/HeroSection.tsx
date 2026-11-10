import { ArrowRight, Download, Mail } from 'lucide-react';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { sectionTimeline } from '@/app/_components/nav';
import { SITE } from '@/app/constants';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function HeroSection() {
  const t = await getTranslations('hero');
  const tCommon = await getTranslations('common');
  const newTab = `(${tCommon('opensInNewTab')})`;

  return (
    <section
      id="intro"
      aria-labelledby="intro-heading"
      className="relative isolate overflow-hidden pt-(--header-height)"
      style={sectionTimeline('intro')}
    >
      {/* Decorative skyline, only where there is room next to the text. */}
      <Image
        src="/city-at-night.jpeg"
        alt=""
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="hero-backdrop hidden md:block"
      />

      <div className="shell grid items-center gap-10 py-14 sm:py-20 md:min-h-[calc(100svh-var(--header-height))] md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] md:gap-12">
        <div className="space-y-6">
          <p className="bg-card inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium shadow-xs">
            <span className="bg-success size-2 rounded-full" aria-hidden="true" />
            {t('availability')}
          </p>

          <div className="space-y-4">
            <h1
              id="intro-heading"
              className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              {t('title')}
            </h1>
            <p className="text-muted-foreground text-xl text-balance sm:text-2xl">
              {t.rich('subtitle', {
                highlight: (chunks) => <span className="text-primary font-semibold">{chunks}</span>,
              })}
            </p>
          </div>

          <p className="max-w-xl text-base leading-relaxed text-pretty sm:text-lg">
            {t('description')}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/projects">
                {t('viewProjects')}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.resume} download>
                <Download aria-hidden="true" />
                {t('downloadResume')}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">
                <Mail aria-hidden="true" />
                {t('contact')}
              </a>
            </Button>
          </div>

          <ul aria-label={t('socialLabel')} className="flex gap-2">
            <li>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t('github')} ${newTab}`}
                  title={t('github')}
                >
                  <GithubIcon className="size-5!" />
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="ghost" size="icon">
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${t('linkedin')} ${newTab}`}
                  title={t('linkedin')}
                >
                  <LinkedinIcon className="size-5!" />
                </a>
              </Button>
            </li>
          </ul>
        </div>

        <div className="relative order-first mx-auto w-40 sm:w-52 md:order-last md:w-full md:max-w-xs">
          <div
            className="bg-primary/35 absolute -inset-6 -z-10 rounded-full blur-3xl"
            aria-hidden="true"
          />
          <Image
            src="/avatar.jpeg"
            alt={t('avatarAlt')}
            width={640}
            height={640}
            sizes="(max-width: 640px) 160px, (max-width: 768px) 208px, 320px"
            loading="eager"
            fetchPriority="high"
            className="border-card aspect-square w-full rounded-full border-4 object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
