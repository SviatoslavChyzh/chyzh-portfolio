import { JOB_EXPERIENCE } from '@/app/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Education() {
  return (
    <section className="container min-h-screen" id="education">
      <h2 className="p-8 text-3xl text-blue-600">🏫 Education</h2>
      <div className="grid grid-cols-auto-fill-100 gap-4">
        {JOB_EXPERIENCE.map((job) => (
          <Card key={job.id} className="p-8 hover:bg-gray-100 hover:shadow-lg">
            <CardHeader>
              <CardDescription className="text-primary">
                {job.startDate} - {job.endDate}
              </CardDescription>
              <CardTitle>
                <div className="flex flex-wrap items-center justify-between gap-4">
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
    </section>
  );
}
