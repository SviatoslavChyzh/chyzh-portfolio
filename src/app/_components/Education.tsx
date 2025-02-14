import { EDUCATION } from '@/app/constants';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Education() {
  return (
    <section className="bg-secondary pb-10" id="education">
      <div className="container">
        <h2 className="p-8 text-3xl text-blue-600">🏫 Education</h2>
        <div className="grid grid-cols-auto-fill-100 gap-4">
          {EDUCATION.map((job) => (
            <Card key={job.id} className="p-8 hover:bg-secondary hover:shadow-lg">
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
