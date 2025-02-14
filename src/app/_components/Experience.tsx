import { JOB_EXPERIENCE } from '@/app/constants';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Experience() {
  return (
    <section className="container min-h-screen pb-10" id="experience">
      <h2 className="p-8 text-3xl text-blue-600">💼 Work Experience</h2>
      <div className="grid gap-4 lg:grid-cols-auto-fit-100">
        {JOB_EXPERIENCE.map((job) => (
          <Card key={job.id} className="hover:bg-secondary hover:shadow-lg lg:p-8">
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
                {job.description?.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
