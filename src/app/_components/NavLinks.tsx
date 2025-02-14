'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';

export default function NavLinks({
  menuItems,
  lang,
}: {
  menuItems: { name: string; href: string }[];
  lang: string;
}) {
  const pathName = usePathname();

  function getActiveItem(href: string) {
    const path = pathName.split('/').filter((item) => item !== lang && item !== '');

    if (path.length === 0) {
      return href === '';
    }

    return path.includes(href);
  }

  return (
    <>
      <div className="flex gap-8">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            className={clsx(
              {
                'text-blue-600': getActiveItem(item.href),
              },
              'text-nowrap',
            )}
            href={`/${lang}/${item.href}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
