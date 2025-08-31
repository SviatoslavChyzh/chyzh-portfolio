import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import type { PropsWithChildren } from 'react';
import type { Locale } from '@/app/types';
import NavBar from '@/app/_components/NavBar';
import { Toaster } from '@/components/ui/toaster';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { setRequestLocale } from 'next-intl/server';
import notFound from './not-found';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sviatoslav Chyzh | Frontend Software Engineer',
  description:
    'Portfolio of Sviatoslav Chyzh, a frontend software engineer specializing in TypeScript and React. Explore my projects and experience.',
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: Promise<{ lang: Locale }> }>) {
  const lang = (await params).lang;

  if (!hasLocale(routing.locales, lang)) {
    notFound();
  }

  setRequestLocale(lang);

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>
            <NavBar lang={lang} />
            {children}
            <Toaster />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
