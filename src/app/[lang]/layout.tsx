import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { ReactNode } from 'react';
import '../globals.css';
import Footer from '@/app/_components/Footer';
import NavBar from '@/app/_components/NavBar';
import { SITE } from '@/app/constants';
import { ThemeProvider } from '@/components/theme-provider';
import { routing } from '@/i18n/routing';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

type LayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>;

export function generateStaticParams() {
  return routing.locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Pick<LayoutProps, 'params'>): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    return {};
  }

  const t = await getTranslations({ locale: lang, namespace: 'metadata' });

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: t('title'),
      template: `%s | ${SITE.name}`,
    },
    description: t('description'),
    openGraph: {
      type: 'website',
      siteName: SITE.name,
      title: t('title'),
      description: t('description'),
      locale: lang === 'de' ? 'de_DE' : 'en_US',
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps) {
  const { lang } = await params;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  setRequestLocale(lang);
  const t = await getTranslations('common');

  return (
    <html
      lang={lang}
      className={`${geistSans.variable} ${geistMono.variable}`}
      // Tells Next.js to skip the smooth scrolling from globals.css on route changes.
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <a
              href="#main"
              className="bg-primary text-primary-foreground sr-only rounded-md px-4 py-3 font-medium focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50"
            >
              {t('skipToContent')}
            </a>
            <NavBar locale={lang} />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
