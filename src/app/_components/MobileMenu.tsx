'use client';

import { Menu } from 'lucide-react';
import type { Route } from 'next';
import Link from 'next/link';
import type { NavItem } from '@/app/_components/nav';
import { SITE } from '@/app/constants';
import { GithubIcon } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { usePathname } from '@/i18n/navigation';

type MobileMenuProps = {
  items: NavItem[];
  labels: {
    open: string;
    close: string;
    title: string;
    description: string;
    sourceCode: string;
    newTab: string;
  };
};

export default function MobileMenu({ items, labels }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <Sheet>
      {/* The trigger gets aria-expanded / aria-controls from the dialog primitive. */}
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="lg:hidden" aria-label={labels.open}>
          <Menu aria-hidden="true" />
        </Button>
      </SheetTrigger>
      <SheetContent closeLabel={labels.close} className="w-[min(20rem,85vw)]">
        <SheetHeader>
          <SheetTitle>{labels.title}</SheetTitle>
          <SheetDescription className="sr-only">{labels.description}</SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <nav aria-label={labels.title}>
          <ul className="grid gap-1">
            {items.map((item) => (
              <li key={item.id}>
                <SheetClose asChild>
                  <Link
                    href={item.href as Route}
                    aria-current={item.page === pathname ? 'page' : undefined}
                    className="hover:bg-accent hover:text-accent-foreground aria-[current=page]:text-primary flex h-12 items-center rounded-md px-3 text-base font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              </li>
            ))}
          </ul>
        </nav>
        <Separator className="my-4" />
        <a
          href={SITE.repository}
          target="_blank"
          rel="noreferrer"
          className="hover:bg-accent hover:text-accent-foreground flex h-12 items-center gap-3 rounded-md px-3 text-base font-medium transition-colors"
        >
          <GithubIcon className="size-5" />
          {labels.sourceCode}
          <span className="sr-only">({labels.newTab})</span>
        </a>
      </SheetContent>
    </Sheet>
  );
}
