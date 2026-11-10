import { HOME_SECTIONS, type HomeSection } from '@/app/constants';
import type { Locale } from '@/app/types';

export type NavItem = {
  id: HomeSection;
  label: string;
  href: string;
  /** Set for entries that are their own page (path without the locale prefix). */
  page?: string;
};

/** Sections of the home page are linked by anchor; "Projects" is its own page. */
export function buildNavItems(locale: Locale, label: (id: HomeSection) => string): NavItem[] {
  return HOME_SECTIONS.map((id) =>
    id === 'projects'
      ? { id, label: label(id), href: `/${locale}/projects`, page: '/projects' }
      : { id, label: label(id), href: `/${locale}#${id}` },
  );
}

/** Inline style that names a section's view timeline, see `globals.css`. */
export function sectionTimeline(id: HomeSection) {
  return { '--vt-name': `--${id}` } as React.CSSProperties;
}
