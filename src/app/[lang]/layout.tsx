import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import type { PropsWithChildren } from 'react';
import type { Locale } from '@/app/types';
import NavBar from '@/app/_components/NavBar';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sviatoslav Chyzh | Full Stack Software Engineer',
  description:
    'Portfolio of Sviatoslav Chyzh, a full stack software engineer specializing in TypeScript and React. Explore my projects and experience.',
};

export default async function RootLayout({
  children,
  params,
}: PropsWithChildren<{ params: Promise<{ lang: Locale }> }>) {
  const lang = (await params).lang;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar lang={lang} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
