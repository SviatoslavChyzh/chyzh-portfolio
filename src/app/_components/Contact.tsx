import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin } from 'lucide-react';
import ContactForm from '@/app/_components/ContactForm';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_90%)] py-10"
    >
      <div className="container grid gap-4 lg:grid-cols-auto-fit-100">
        <Card>
          <CardHeader className="text-nowrap text-3xl">
            <CardTitle className="flex items-center gap-6">Get in touch</CardTitle>
            <CardDescription>
              <span className="text-wrap">
                I am available on social media and email. Feel free to reach out to me
              </span>
              <Separator />
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex w-full justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/sviatoslav-chyzh-852113176/"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-primary p-2 hover:border-accent-foreground hover:bg-accent"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/SviatoslavChyzh"
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border-2 border-primary p-2 hover:border-accent-foreground hover:bg-accent"
              >
                <Github />
              </a>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-nowrap text-3xl">
            <CardTitle className="flex items-center gap-6">Contact me</CardTitle>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
