'use client';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

type MobileMenuProps = {
  menuItems: { name: string; href: string }[];
  lang: string;
  menuTitle: string;
};

export default function MobileMenu({ menuItems, lang, menuTitle }: MobileMenuProps) {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="secondary"
            aria-controls="primary-navigation"
            aria-expanded={false}
            className="ml-2 rounded-md p-2 hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-muted-foreground">{menuTitle}</SheetTitle>
          </SheetHeader>
          <Separator />
          <div className="grid gap-4 py-4">
            {menuItems.map((item) => (
              <SheetClose key={item.href} asChild>
                <Link
                  className="hover:bg-primary px-4 leading-10 hover:cursor-pointer hover:text-white hover:shadow-[inset_0_-3px_0_0_hsl(var(--accent))]"
                  href={`/${lang}${item.href}`}
                >
                  {item.name}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
