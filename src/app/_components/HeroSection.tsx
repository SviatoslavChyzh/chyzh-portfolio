import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import DownloadResumeButton from '@/app/_components/DownloadResumeButton';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { getTranslations } from 'next-intl/server';

export default async function HeroSection() {
  const t = await getTranslations();

  return (
    <section
      className="relative mt-20 grid min-h-screen items-center overflow-x-clip"
      id="intro"
      style={{ '--vt-name': '--intro' } as CSSProperties}
    >
      <div className="container grid w-full items-center justify-center gap-8 md:grid-cols-[2fr_1fr]">
        <Card className="border-none p-8 shadow-none">
          <CardContent className="space-y-6 p-0">
            <div className="space-y-2">
              <div className="bg-primary text-primary-foreground hover:bg-primary/80 focus:ring-ring mb-2 inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none">
                Available for hire
              </div>
              <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
                Hi, I am Sviatoslav Chyzh
              </h1>
              <p className="text-muted-foreground text-xl">
                A software engineer with a passion for building web applications
              </p>
            </div>
            <p className="text-muted-foreground">{t('heroSection')}</p>
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
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/SviatoslavChyzh" target="_blank" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
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
        <div className="border-background bg-muted relative aspect-square overflow-hidden rounded-full border-4 md:order-last">
          <Avatar className="h-full w-full">
            <AvatarImage src="/avatar.jpeg" alt="Sviatoslav Chyzh" />
            <AvatarFallback className="text-6xl">SC</AvatarFallback>
          </Avatar>
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
