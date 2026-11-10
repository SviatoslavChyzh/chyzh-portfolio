import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import ContactForm from '@/app/_components/ContactForm';
import SectionHeading from '@/app/_components/SectionHeading';
import { sectionTimeline } from '@/app/_components/nav';
import { SITE } from '@/app/constants';
import { GithubIcon, LinkedinIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';

export default async function Contact() {
  const t = await getTranslations('contact');
  const tCommon = await getTranslations('common');
  const newTab = `(${tCommon('opensInNewTab')})`;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 sm:py-24"
      style={sectionTimeline('contact')}
    >
      <div className="shell grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
        <div>
          <SectionHeading
            id="contact-heading"
            align="start"
            title={t('title')}
            description={t('description')}
          />

          <ul aria-label={t('profiles')} className="mt-8 flex flex-wrap gap-3">
            <li>
              <Button asChild variant="outline">
                <a href={SITE.linkedin} target="_blank" rel="noreferrer">
                  <LinkedinIcon />
                  {t('linkedin')}
                  <span className="sr-only">{newTab}</span>
                </a>
              </Button>
            </li>
            <li>
              <Button asChild variant="outline">
                <a href={SITE.github} target="_blank" rel="noreferrer">
                  <GithubIcon />
                  {t('github')}
                  <span className="sr-only">{newTab}</span>
                </a>
              </Button>
            </li>
          </ul>

          <div className="mt-10 flex items-start gap-5 sm:gap-6">
            <Image
              src="/main-logo.png"
              alt={t('logoAlt')}
              width={350}
              height={390}
              sizes="(max-width: 640px) 144px, 176px"
              className="border-primary/40 h-auto w-36 rounded-xl border sm:w-44"
            />
            <figure className="w-36 sm:w-44">
              {/* A QR code needs dark modules on a light background in every theme. */}
              <div className="rounded-xl border bg-white p-3">
                <Image
                  src="/exported_qrcode_image.svg"
                  alt={t('qrAlt')}
                  width={300}
                  height={300}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="text-muted-foreground mt-3 text-sm text-pretty">
                {t('qrCaption')}
              </figcaption>
            </figure>
          </div>
        </div>

        <div className="bg-card rounded-xl border p-6 shadow-sm sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight">{t('formTitle')}</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
