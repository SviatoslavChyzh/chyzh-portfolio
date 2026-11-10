import { ArrowUp } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { SITE } from '@/app/constants';
import { GithubIcon, LinkedinIcon } from '@/components/icons';

const linkClassName =
  'hover:text-primary inline-flex h-11 items-center gap-2 rounded-md px-2 font-medium transition-colors';

export default async function Footer() {
  const t = await getTranslations('footer');
  const tCommon = await getTranslations('common');
  const newTab = `(${tCommon('opensInNewTab')})`;

  return (
    <footer className="border-t">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 text-sm sm:flex-row">
        <div className="text-muted-foreground text-center sm:text-left">
          <p>{t('copyright', { year: String(new Date().getFullYear()) })}</p>
          <p>{t('builtWith')}</p>
        </div>

        <nav aria-label={t('label')}>
          <ul className="flex flex-wrap items-center justify-center gap-x-2">
            <li>
              <a href={SITE.github} target="_blank" rel="noreferrer" className={linkClassName}>
                <GithubIcon className="size-4" />
                GitHub
                <span className="sr-only">{newTab}</span>
              </a>
            </li>
            <li>
              <a href={SITE.linkedin} target="_blank" rel="noreferrer" className={linkClassName}>
                <LinkedinIcon className="size-4" />
                LinkedIn
                <span className="sr-only">{newTab}</span>
              </a>
            </li>
            <li>
              <a href={SITE.repository} target="_blank" rel="noreferrer" className={linkClassName}>
                {t('sourceCode')}
                <span className="sr-only">{newTab}</span>
              </a>
            </li>
            <li>
              <a href="#top" className={linkClassName}>
                <ArrowUp className="size-4" aria-hidden="true" />
                {t('backToTop')}
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
