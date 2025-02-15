import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/app/constants';
import Image from 'next/image';
import type { Locale } from '@/app/types';
import { getDictionary } from '@/app/[lang]/dictionaries';

export default async function HeroSection({ lang }: { lang: Locale }) {
  const { heroSection } = await getDictionary(lang);

  return (
    <div className="relative grid min-h-screen items-center overflow-x-clip" id="intro">
      <div className="container mt-40 grid gap-6 md:mt-0 lg:mt-0 lg:grid-cols-auto-fit-100">
        <Card className="bg-transparent">
          <CardHeader className="text-nowrap text-3xl">
            <CardTitle className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/avatar.jpeg" alt="SC" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex flex-wrap gap-4">
                <span className="font-mono font-thin text-accent">
                  {lang === 'en' ? 'I am,' : 'Ich bin,'}
                </span>
                <span>Sviatoslav Chyzh</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-start text-xl text-muted-foreground">
            {heroSection}
          </CardContent>
        </Card>
        <Card className="bg-transparent">
          <CardHeader className="text-3xl">
            <CardTitle className="flex items-center gap-6">👨‍💻 Skills</CardTitle>
          </CardHeader>
          <CardContent>
            {SKILLS.map((skill) => (
              <Badge
                key={skill}
                className="m-1 rounded-lg p-3 text-muted-foreground transition-all hover:scale-110 hover:cursor-pointer"
                variant="secondary"
              >
                {skill}
              </Badge>
            ))}
          </CardContent>
        </Card>
      </div>
      <Image fill className="header-image" src="/city-at-night.jpg" alt="header-image" />
    </div>
  );
}
