import { EDUCATION } from '@/app/constants';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Education() {
  return (
    <section className="bg-secondary pb-10" id="education">
      <div className="container">
        <h2 className="text-3xl text-blue-600 lg:p-8">🏫 Education</h2>
        <div className="grid gap-4 lg:grid-cols-auto-fit-100">
          {EDUCATION.map((job) => (
            <Card key={job.id} className="mx-8 p-8 hover:bg-primary-foreground hover:shadow-lg">
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
