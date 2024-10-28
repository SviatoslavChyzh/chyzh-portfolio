import { createFileRoute, useRouter } from '@tanstack/react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/features/sidebar/components/app-sidebar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';
import { JOB_EXPERIENCE } from '@/features/job-experience/constants';
import { ThemeProvider } from '@/features/theme/components/ThemeProvider';
import { ModeToggle } from '@/features/theme/components/ModeToggle';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();
  const isMobile = useIsMobile();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <SidebarProvider>
        <AppSidebar />
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
              <CardTitle>My Resume</CardTitle>
              <CardDescription>skills & experience</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-6 max-w-[45ch] border-b-4">Intro</p>
              <div
                className={`${isMobile ? 'w-[calc(100vw-10rem)]' : 'w-[calc(100vw-25rem)]'} job-experience relative grid grid-flow-col justify-start gap-4 overflow-auto p-4`}
              >
                {JOB_EXPERIENCE.map((job) => (
                  <Card key={job.id}>
                    <CardHeader>
                      <CardTitle>Job Year</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex min-w-96 items-center justify-between gap-4">
                        <h2>Job Role</h2>
                        <span className="uppercase">Company name</span>
                      </div>
                    </CardContent>
                    <CardFooter>Description</CardFooter>
                  </Card>
                ))}
              </div>
            </CardContent>
            <CardFooter></CardFooter>
          </Card>
        </SidebarInset>
      </SidebarProvider>
    </ThemeProvider>
  );
}
