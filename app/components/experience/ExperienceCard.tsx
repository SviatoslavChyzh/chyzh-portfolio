import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { JobExperience } from '@/constants/indes';

export default function ExperienceCard({ job }: { job: JobExperience }) {
  return (
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
  );
}
