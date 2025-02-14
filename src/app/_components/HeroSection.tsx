import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SKILLS } from '@/app/constants';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <div className="relative grid h-screen items-center overflow-x-clip" id="intro">
      <div className="container grid grid-cols-auto-fill-100 gap-6">
        <Card className="bg-transparent">
          <CardHeader className="text-nowrap text-3xl">
            <CardTitle className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="/avatar.jpeg" alt="SC" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <span className="font-mono font-thin text-accent">I am,</span> Sviatoslav Chyzh
            </CardTitle>
          </CardHeader>
          <CardContent className="text-start text-xl text-muted-foreground">
            a software engineer with a passion for building web applications, based in Germany. I
            have experience working with React, TypeScript, and Tailwind CSS. I am always looking to
            learn new technologies and improve my skills
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
      <Image fill className="header-image" src="/city-at-night.jpg" alt="header-image" layout="" />
    </div>
  );
}
