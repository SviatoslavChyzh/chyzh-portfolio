import { JOB_EXPERIENCE } from '@/app/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import type { Locale } from '@/app/types';
import type { CSSProperties } from 'react';

export default function Experience({ lang }: { lang: Locale }) {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-indigo-100 to-blue-200 dark:from-gray-900 dark:to-blue-900"
      id="experience"
      style={{ '--vt-name': '--experience' } as CSSProperties}
    >
      <div className="container py-20">
        <h2 className="p-8 text-3xl text-blue-600">💼 Work Experience</h2>
        <div className="grid gap-4">
          {JOB_EXPERIENCE.map((job) => (
            <Card
              key={job.id}
              className="transition hover:cursor-pointer hover:bg-secondary hover:shadow-2xl lg:p-8"
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
                    <div className="flex flex-wrap items-center gap-4">
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
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
