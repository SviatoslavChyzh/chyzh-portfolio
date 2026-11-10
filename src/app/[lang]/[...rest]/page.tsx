import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { routing } from '@/i18n/routing';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    return {};
  }

  const t = await getTranslations({ locale: lang, namespace: 'metadata' });

  return { title: t('notFoundTitle') };
}

// Any unknown path below a locale renders the localized not-found page.
export default function CatchAllPage() {
  notFound();
}
