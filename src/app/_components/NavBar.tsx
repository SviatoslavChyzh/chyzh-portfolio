import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';
import MobileMenu from '@/app/_components/MobileMenu';
import NavLinks from '@/app/_components/NavLinks';
import { buildNavItems } from '@/app/_components/nav';
import { SITE } from '@/app/constants';
import type { Locale } from '@/app/types';
import { GithubIcon } from '@/components/icons';
import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { Link } from '@/i18n/navigation';

export default async function NavBar({ locale }: { locale: Locale }) {
  const t = await getTranslations('navigation');
  const tCommon = await getTranslations('common');
  const items = buildNavItems(locale, (id) => t(id));
  const sourceCodeLabel = `${t('sourceCode')} (${tCommon('opensInNewTab')})`;

  return (
    <header className="bg-background/85 fixed inset-x-0 top-0 z-40 h-(--header-height) border-b backdrop-blur-md">
      <div className="scroll-watcher" aria-hidden="true" />
      <div className="shell flex h-full items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={t('home')}
          className="flex min-h-11 min-w-11 shrink-0 items-center gap-3 rounded-md"
        >
          <Image
            src="/logo.png"
            alt=""
            width={40}
            height={40}
            className="border-primary/40 size-10 rounded-lg border object-cover"
          />
          <span className="hidden text-base font-semibold tracking-tight sm:inline">
            {SITE.name}
          </span>
        </Link>

        <nav aria-label={t('label')} className="hidden lg:block">
          <NavLinks items={items} />
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle label={t('toggleTheme')} />
          <LocaleSwitcher />
          <Button asChild variant="outline" size="icon" className="hidden sm:inline-flex">
            <a
              href={SITE.repository}
              target="_blank"
              rel="noreferrer"
              aria-label={sourceCodeLabel}
              title={t('sourceCode')}
            >
              <GithubIcon />
            </a>
          </Button>
          <MobileMenu
            items={items}
            labels={{
              open: t('openMenu'),
              close: t('closeMenu'),
              title: t('menuTitle'),
              description: t('menuDescription'),
              sourceCode: t('sourceCode'),
              newTab: tCommon('opensInNewTab'),
            }}
          />
        </div>
      </div>
    </header>
  );
}
