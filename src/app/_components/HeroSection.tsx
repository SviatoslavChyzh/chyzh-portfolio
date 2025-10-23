import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import DownloadResumeButton from '@/app/_components/DownloadResumeButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function HeroSection() {
  const t = await getTranslations();

  return (
    <section
      className="relative mt-20 grid min-h-screen items-center overflow-x-clip"
      id="intro"
      style={{ '--vt-name': '--intro' } as CSSProperties}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="bg-primary/30 animate-float absolute top-1/4 left-1/4 h-4 w-4 rounded-full"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="bg-primary/20 animate-float absolute top-1/5 right-1/4 h-6 w-6 rounded-full"
          style={{ animationDelay: '2s' }}
        />
        <div
          className="bg-primary/40 animate-float absolute bottom-1/3 left-1/3 h-3 w-3 rounded-full"
          style={{ animationDelay: '4s' }}
        />
      </div>
      <div className="container grid w-full items-center justify-center gap-8 md:grid-cols-[2fr_1fr]">
        <Card className="border-none p-8 shadow-none">
          <CardContent className="space-y-6 p-0">
            <div className="space-y-2">
              <div className="bg-primary/10 border-primary/20 text-primary-light inline-flex items-center rounded-full border px-3 py-1 text-sm">
                ✨ Available for hire
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Hi, I am Sviatoslav Chyzh
              </h1>
              <p className="text-foreground text-xl">
                A software engineer with a passion for building{' '}
                <span className="text-secondary-foreground font-medium">web applications</span>
              </p>
            </div>
            <p className="text-foreground">{t('heroSection')}</p>
            <div className="flex flex-wrap gap-3">
              <DownloadResumeButton />
              <Button variant="outline" asChild>
                <Link href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </Link>
              </Button>
              <Link href="#skills" className="inline-flex gap-2">
                <Button className="rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-purple-700 hover:shadow-xl">
                  Learn More
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/SviatoslavChyzh" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/in/sviatoslav-chyzh"
                  target="_blank"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <div className="animate-slide-up flex justify-center">
          <div className="relative">
            <div className="gradient-primary absolute -inset-4 rounded-full opacity-30 blur-xl" />

            <Avatar className="border-primary/20 h-80 w-80 border-4 shadow-2xl">
              <AvatarImage src="/avatar.jpeg" alt="Sviatoslav Chyzh" />
              <AvatarFallback className="text-6xl">SC</AvatarFallback>
            </Avatar>

            <div className="animate-float absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-xl">
              <span className="text-2xl">⚛️</span>
            </div>
            <div
              className="animate-float absolute -bottom-4 -left-4 flex h-12 w-12 items-center justify-center rounded-xl"
              style={{ animationDelay: '2s' }}
            >
              <span className="text-2xl">🔧</span>
            </div>
            <div
              className="animate-float absolute top-1/2 -right-8 flex h-10 w-10 items-center justify-center rounded-xl"
              style={{ animationDelay: '1s' }}
            >
              <span className="text-xl">💻</span>
            </div>
          </div>
          <div className="absolute bottom-24 left-1/2 -translate-x-1/2 transform animate-bounce">
            <Link href="#skills">
              <Button
                variant="ghost"
                aria-label="Scroll Down"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ChevronDown size={32} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        fill
        className="header-image"
        src="/city-at-night.jpeg"
        alt="header-image"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </section>
  );
}
