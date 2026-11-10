'use client';

import { Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import type { Locale } from '@/app/types';
import { buttonVariants } from '@/components/ui/button';
import { getPathname, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/** Language names in their own language, so the link reads correctly for everyone. */
const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
};

/**
 * Links to the current page in the other language. With two locales a plain
 * link is simpler (and more accessible) than a one-option dropdown.
 *
 * It is a regular `<a>` on purpose: the locale is part of the root layout, so a
 * full navigation re-renders `<html lang>` and everything below it cleanly.
 */
export default function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const target: Locale = locale === 'en' ? 'de' : 'en';

  return (
    <a
      href={getPathname({ href: pathname, locale: target })}
      hrefLang={target}
      lang={target}
      aria-label={`${target.toUpperCase()} – ${LANGUAGE_NAMES[target]}`}
      className={cn(buttonVariants({ variant: 'outline' }), 'gap-1.5 px-3')}
    >
      <Languages aria-hidden="true" />
      {target.toUpperCase()}
    </a>
  );
}
