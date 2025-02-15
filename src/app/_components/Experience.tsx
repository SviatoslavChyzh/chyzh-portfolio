import { JOB_EXPERIENCE } from '@/app/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Locale } from '@/app/types';

export default function Experience({ lang }: { lang: Locale }) {
  return (
    <section className="container min-h-screen pb-10" id="experience">
      <h2 className="p-8 text-3xl text-blue-600">💼 Work Experience</h2>
      <div className="grid gap-4 lg:grid-cols-auto-fit-100">
        {JOB_EXPERIENCE.map((job) => (
          <Card
            key={job.id}
            className="transition hover:scale-[1.01] hover:bg-secondary hover:shadow-lg lg:p-8"
          >
            <CardHeader>
              <CardDescription className="text-primary">
                {job.startDate} - {job.endDate}
              </CardDescription>
              <CardTitle>
                <div className="flex flex-col gap-4">
                  <h2>{job.title}</h2>
                  <span className="uppercase text-accent">{job.company}</span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc text-muted-foreground">
                {job.description &&
                  job.description[lang].map((item, index) => <li key={index}>{item}</li>)}
              </ul>
              <div className="mt-4 flex items-center gap-4">
                {job.projects && (
                  <>
                    Projects:{' '}
                    {job.projects.map((project, index) => (
                      <Badge key={index} className="p-2">
                        {project.link ? (
                          <Link
                            className="underline hover:text-white"
                            href={project.link as string}
                            key={index}
                            target="_blank"
                          >
                            {project.name}
                          </Link>
                        ) : (
                          project.name
                        )}
                      </Badge>
                    ))}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
