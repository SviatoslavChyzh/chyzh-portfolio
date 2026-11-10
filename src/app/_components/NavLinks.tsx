'use client';

import type { Route } from 'next';
import Link from 'next/link';
import type { NavItem } from '@/app/_components/nav';
import { usePathname } from '@/i18n/navigation';

/**
 * Desktop navigation. The link of the section currently on screen is highlighted
 * purely in CSS (`.top-navigation` in globals.css); `aria-current` marks the
 * link of the page you are on.
 */
export default function NavLinks({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <ul className="top-navigation flex items-center">
      {items.map((item) => (
        <li key={item.id}>
          <Link
            href={item.href as Route}
            data-section={item.id}
            aria-current={item.page === pathname ? 'page' : undefined}
            className="hover:text-primary aria-[current=page]:border-primary aria-[current=page]:text-primary inline-flex h-11 items-center border-b-2 border-transparent px-3 text-sm font-medium whitespace-nowrap transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
