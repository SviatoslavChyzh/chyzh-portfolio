import { EDUCATION } from '@/app/constants';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CSSProperties } from 'react';

export default function Education() {
  return (
    <section
      className="bg-secondary"
      id="education"
      style={{ '--vt-name': '--education' } as CSSProperties}
    >
      <div className="container py-20">
        <h2 className="p-8 text-3xl text-blue-600">🏫 Education</h2>
        <div className="grid gap-4 lg:grid-cols-auto-fit-100">
          {EDUCATION.map((job) => (
            <Card
              key={job.id}
              className="mx-8 p-8 py-16 hover:bg-primary-foreground hover:shadow-lg"
            >
              <CardHeader>
                <CardDescription className="text-primary">
                  🗓️ {job.startDate} - {job.endDate}
                </CardDescription>
                <CardTitle>
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h2>{job.title}</h2>
                    <span className="text-accent">{job.company}</span>
                  </div>
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
