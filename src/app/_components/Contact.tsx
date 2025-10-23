import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin } from 'lucide-react';
import ContactForm from '@/app/_components/ContactForm';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[radial-gradient(hsl(0,72%,65%,40%),hsl(24,62%,73%,40%),hsl(var(--background))_90%)] py-16"
      style={{ '--vt-name': '--contact' } as CSSProperties}
    >
      <div className="lg:grid-cols-auto-fit-100 container grid gap-4">
        <Card>
          <CardHeader className="text-3xl text-nowrap">
            <CardTitle className="flex items-center gap-6">Get in touch</CardTitle>
            <CardDescription>
              <span className="text-wrap">
                I am available on social media and email. Feel free to reach out to me
              </span>
              <Separator />
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="flex w-full justify-center gap-4">
              <Link href="https://www.linkedin.com/in/sviatoslav-chyzh" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://github.com/SviatoslavChyzh" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </div>
            <Separator />
            <div className="flex flex-wrap items-center justify-center gap-8">
              <Image
                src="/main-logo.png"
                alt="main-logo"
                width={270}
                height={270}
                className="border-primary rounded-xl border-2"
              />
              <Image
                src="/exported_qrcode_image.svg"
                alt="phone"
                width={300}
                height={300}
                className="border-primary rounded-xl border-2"
              />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="text-3xl text-nowrap">
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
