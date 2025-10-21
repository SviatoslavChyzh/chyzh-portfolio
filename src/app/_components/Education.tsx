import { EDUCATION } from '@/app/constants';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { CSSProperties } from 'react';

export default function Education() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-blue-300 to-indigo-200 dark:from-gray-900 dark:to-indigo-900"
      id="education"
      style={{ '--vt-name': '--education' } as CSSProperties}
    >
      <div className="container py-20">
        <h2 className="p-8 text-3xl">🏫 Education</h2>
        <div className="lg:grid-cols-auto-fit-100 grid gap-4">
          {EDUCATION.map((job) => (
            <Card key={job.id} className="hover:bg-secondary mx-8 p-4 py-16 hover:shadow-2xl">
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
