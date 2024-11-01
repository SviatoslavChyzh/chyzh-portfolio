import type { MetaFunction } from '@remix-run/cloudflare';
import { SidebarInset, SidebarTrigger } from '@/components/ui/sidebar';
import { ModeToggle } from '@/components/theme/ModeToggle';
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

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function Index() {
  const isMobile = useIsMobile();

  return (
    <SidebarInset>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div className="flex items-center px-4">
          <SidebarTrigger className="-ml-1" />
        </div>
        <div className="px-4">
          <ModeToggle />
        </div>
      </header>
      <Card className="mx-4">
        <CardHeader>
          <CardTitle>Sviatoslav Chyzh</CardTitle>
          <CardDescription>skills & experience</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-6 max-w-[45ch] border-b-4">
            I am a software engineer with a passion for building web applications. I have experience
            working with React, TypeScript, and Tailwind CSS. I am always looking to learn new
            technologies and improve my skills
          </p>
          <div
            className={`${isMobile ? 'w-[calc(100vw-10rem)]' : 'w-[calc(100vw-25rem)]'} job-experience relative grid grid-flow-col justify-start gap-4 overflow-auto p-4`}
          >
            {JOB_EXPERIENCE.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardDescription className="text-primary">
                    {job.startDate} - {job.endDate}
                  </CardDescription>
                  <CardTitle>
                    <div className="flex min-w-96 items-center justify-between gap-4">
                      <h2>{job.title}</h2>
                      <span className="uppercase text-accent">{job.company}</span>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc text-muted-foreground">
                    {job.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          {/*<ReactExperience />*/}
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </SidebarInset>
  );
}
