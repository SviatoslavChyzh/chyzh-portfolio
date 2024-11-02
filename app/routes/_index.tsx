import type { MetaFunction } from '@remix-run/cloudflare';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { JOB_EXPERIENCE } from '@/constants/indes';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ExperienceCard from '@/components/experience/ExperienceCard';

export const meta: MetaFunction = () => {
  return [
    { title: 'Sviatoslav Chyzh | Full Stack Software Engineer' },
    {
      name: 'description',
      content:
        'Portfolio of Sviatoslav Chyzh, a full stack software engineer specializing in TypeScript and React. Explore my projects and experience.',
    },
  ];
};

export default function Index() {
  const isMobile = useIsMobile();

  return (
    <>
      <main>
        <Card className="mx-auto mt-4 max-w-7xl border-none px-4 py-8 shadow-none sm:px-6 lg:px-8">
          <CardHeader>
            <CardTitle>Sviatoslav Chyzh</CardTitle>
            <CardDescription>skills & experience</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-6 max-w-[45ch] border-b-4">
              I am a software engineer with a passion for building web applications. I have
              experience working with React, TypeScript, and Tailwind CSS. I am always looking to
              learn new technologies and improve my skills
            </p>
            <div className="job-experience relative grid w-full grid-flow-col justify-start gap-4 overflow-auto p-4">
              {isMobile ? (
                <Carousel className="w-full max-w-xs">
                  <CarouselContent>
                    {JOB_EXPERIENCE.map((job) => (
                      <CarouselItem key={job.id}>
                        <div className="p-1">
                          <ExperienceCard job={job} />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <>
                  {JOB_EXPERIENCE.map((job) => (
                    <ExperienceCard key={job.id} job={job} />
                  ))}
                </>
              )}
            </div>
            {/*<ReactExperience />*/}
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </main>
      <footer></footer>
    </>
  );
}
